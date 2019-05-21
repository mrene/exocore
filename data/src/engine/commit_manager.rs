use std::cmp::Ordering;
use std::collections::{HashMap, HashSet};

use itertools::Itertools;

use crate::operation::{GroupId, OperationId};
use exocore_common::crypto::signature::Signature;
use exocore_common::node::NodeId;
use exocore_common::serialization::framed::{SignedFrame, TypedFrame, TypedSliceFrame};
use exocore_common::serialization::protos::data_chain_capnp::{block, pending_operation};
use exocore_common::time::{duration_to_consistent_u64, Clock};

use crate::block::{
    Block, BlockDepth, BlockOffset, BlockOperations, BlockOwned, BlockSignature, BlockSignatures,
};
use crate::chain;
use crate::engine::{pending_sync, Event, SyncContext};
use crate::operation;
use crate::operation::{Operation, OperationType};
use crate::pending;
use std::str::FromStr;

use super::Error;
use exocore_common::cell::{Cell, CellNodes, CellNodesRead};
use std::time::Duration;

///
/// Manages commit of pending store's operations to the chain. It does that by monitoring the pending store for incoming
/// block proposal, signing/refusing them or proposing new blocks.
///
/// It also manages cleanup of the pending store, by deleting old operations that were committed to the chain and that are
/// in block with sufficient depth.
///
pub(super) struct CommitManager<PS: pending::PendingStore, CS: chain::ChainStore> {
    config: CommitManagerConfig,
    cell: Cell,
    clock: Clock,
    phantom: std::marker::PhantomData<(PS, CS)>,
}

impl<PS: pending::PendingStore, CS: chain::ChainStore> CommitManager<PS, CS> {
    pub fn new(config: CommitManagerConfig, cell: Cell, clock: Clock) -> CommitManager<PS, CS> {
        CommitManager {
            config,
            cell,
            clock,
            phantom: std::marker::PhantomData,
        }
    }

    ///
    /// Tick is called by the Engine at interval to make progress on proposing blocks, signing / refusing
    /// proposed blocks, and committing them to the chain. We also cleanup the pending store once operations
    /// have passed a certain depth in the chain, which guarantees their persistence.
    ///
    pub fn tick(
        &mut self,
        sync_context: &mut SyncContext,
        pending_synchronizer: &mut pending_sync::PendingSynchronizer<PS>,
        pending_store: &mut PS,
        chain_store: &mut CS,
    ) -> Result<(), Error> {
        // find all blocks (proposed, committed, refused, etc.) in pending store
        let mut pending_blocks = PendingBlocks::new(&self.cell, pending_store, chain_store)?;

        // get all potential next blocks sorted by most probable to less probable, and select the best next block
        let potential_next_blocks = pending_blocks.potential_next_blocks();
        let best_potential_next_block = potential_next_blocks.first().map(|b| b.group_id);

        // if we have a next block, we check if we can sign it and commit it
        if let Some(next_block_id) = best_potential_next_block {
            let (has_my_signature, has_my_refusal) = {
                let next_block = pending_blocks.get_block(&next_block_id);
                (next_block.has_my_signature, next_block.has_my_refusal)
            };

            if !has_my_signature && !has_my_refusal {
                if let Ok(should_sign) = self.check_should_sign_block(
                    next_block_id,
                    &pending_blocks,
                    chain_store,
                    pending_store,
                ) {
                    let mut_next_block = pending_blocks.get_block_mut(&next_block_id);
                    if should_sign {
                        self.sign_block(
                            sync_context,
                            pending_synchronizer,
                            pending_store,
                            mut_next_block,
                        )?;
                    } else {
                        self.refuse_block(
                            sync_context,
                            pending_synchronizer,
                            pending_store,
                            mut_next_block,
                        )?;
                    }
                }
            }

            let next_block = pending_blocks.get_block(&next_block_id);
            let valid_signatures = next_block
                .signatures
                .iter()
                .filter(|sig| next_block.validate_signature(&self.cell, sig));

            let nodes = self.cell.nodes();
            if next_block.has_my_signature && nodes.is_quorum(valid_signatures.count()) {
                debug!("Block has enough signatures, we should commit");
                self.commit_block(sync_context, next_block, pending_store, chain_store)?;
            }
        } else if self.should_propose_block(chain_store, &pending_blocks)? {
            debug!("No current block, and we can propose one");
            self.propose_block(
                sync_context,
                &pending_blocks,
                pending_synchronizer,
                pending_store,
                chain_store,
            )?;
        }

        self.maybe_cleanup_pending_store(
            sync_context,
            &pending_blocks,
            pending_store,
            chain_store,
        )?;

        Ok(())
    }

    ///
    /// Checks if we should sign a block that was previously proposed. We need to make sure
    /// all operations are valid and not already in the chain and then validate the hash of
    /// the block with local version of the operations.
    ///
    fn check_should_sign_block(
        &self,
        block_id: OperationId,
        pending_blocks: &PendingBlocks,
        chain_store: &CS,
        pending_store: &PS,
    ) -> Result<bool, Error> {
        let block = pending_blocks.get_block(&block_id);
        let block_frame = block.proposal.get_block()?;

        // make sure we don't have operations that are already committed
        for operation_id in &block.operations {
            for block_id in pending_blocks
                .operations_blocks
                .get(operation_id)
                .expect("Operation was not in map")
            {
                let op_block = pending_blocks
                    .blocks_status
                    .get(block_id)
                    .expect("Couldn't find block");
                if *op_block == BlockStatus::PastCommitted {
                    return Ok(false);
                }

                let operation_in_chain = chain_store
                    .get_block_by_operation_id(*operation_id)?
                    .is_some();
                if operation_in_chain {
                    return Ok(false);
                }
            }
        }

        // validate hash of operations of block
        let block_operations = Self::get_block_operations(block, pending_store)?.map(|op| op.frame);
        let operations_hash = BlockOperations::hash_operations(block_operations)?;
        let block_reader = block_frame.get_typed_reader()?;
        if operations_hash.as_bytes() != block_reader.get_operations_hash()? {
            debug!(
                "Block entries hash didn't match our local hash for block id={} offset={}",
                block.group_id, block.proposal.offset
            );
            return Ok(false);
        }

        Ok(true)
    }

    ///
    /// Adds our signature to a given block proposal.
    ///
    fn sign_block(
        &self,
        sync_context: &mut SyncContext,
        pending_synchronizer: &mut pending_sync::PendingSynchronizer<PS>,
        pending_store: &mut PS,
        next_block: &mut PendingBlock,
    ) -> Result<(), Error> {
        let local_node = self.cell.local_node();

        let operation_id = self.clock.consistent_time(&local_node);
        let signature_frame_builder = operation::OperationBuilder::new_signature_for_block(
            next_block.group_id,
            operation_id,
            local_node.id(),
            &next_block.proposal.get_block()?,
        )?;

        let signature_operation =
            signature_frame_builder.sign_and_build(local_node.frame_signer())?;

        let signature_reader = signature_operation.get_operation_reader()?;
        let pending_signature = PendingBlockSignature::from_pending_operation(signature_reader)?;
        debug!("Signing block {}", next_block.group_id);
        next_block.add_my_signature(pending_signature);

        pending_synchronizer.handle_new_operation(
            sync_context,
            pending_store,
            signature_operation,
        )?;

        Ok(())
    }

    ///
    /// Adds our refusal to a given block proposal (ex: it's not valid)
    ///
    fn refuse_block(
        &self,
        sync_context: &mut SyncContext,
        pending_synchronizer: &mut pending_sync::PendingSynchronizer<PS>,
        pending_store: &mut PS,
        next_block: &mut PendingBlock,
    ) -> Result<(), Error> {
        let local_node = self.cell.local_node();

        let operation_id = self.clock.consistent_time(&local_node);

        let refusal_builder = operation::OperationBuilder::new_refusal(
            next_block.group_id,
            operation_id,
            local_node.id(),
        )?;
        let refusal_operation = refusal_builder.sign_and_build(local_node.frame_signer())?;

        let refusal_reader = refusal_operation.get_operation_reader()?;
        let pending_refusal = PendingBlockRefusal::from_pending_operation(refusal_reader)?;

        next_block.add_my_refusal(pending_refusal);

        pending_synchronizer.handle_new_operation(
            sync_context,
            pending_store,
            refusal_operation,
        )?;

        Ok(())
    }

    ///
    /// Checks if we need to propose a new block, based on when the last block was created and
    /// how many operations are in the store.
    ///
    fn should_propose_block(
        &self,
        chain_store: &CS,
        pending_blocks: &PendingBlocks,
    ) -> Result<bool, Error> {
        let local_node = self.cell.local_node();
        if !local_node.has_full_access() {
            return Ok(false);
        }

        let nodes = self.cell.nodes();
        let now = self.clock.consistent_time(local_node);
        if is_node_commit_turn(&nodes, local_node.id(), now, &self.config)? {
            // number of operations in store minus number of operations in blocks ~= non-committed
            let approx_non_committed_operations = pending_blocks
                .entries_operations_count
                .checked_sub(pending_blocks.operations_blocks.len())
                .unwrap_or(0);

            if approx_non_committed_operations >= self.config.commit_maximum_pending_count {
                return Ok(true);
            } else {
                let previous_block = chain_store
                    .get_last_block()?
                    .ok_or(Error::UninitializedChain)?;
                let previous_block_elapsed = now
                    .checked_sub(previous_block.get_proposed_operation_id()?)
                    .unwrap_or(now);
                let maximum_interval =
                    duration_to_consistent_u64(self.config.commit_maximum_interval, 0);
                return Ok(previous_block_elapsed >= maximum_interval);
            }
        }

        Ok(false)
    }

    ///
    /// Creates a new block proposal with operations currently in the store.
    ///
    fn propose_block(
        &self,
        sync_context: &mut SyncContext,
        pending_blocks: &PendingBlocks,
        pending_synchronizer: &mut pending_sync::PendingSynchronizer<PS>,
        pending_store: &mut PS,
        chain_store: &mut CS,
    ) -> Result<(), Error> {
        let local_node = self.cell.local_node();
        let previous_block = chain_store
            .get_last_block()?
            .ok_or(Error::UninitializedChain)?;

        let block_operations = pending_store
            .operations_iter(..)?
            .filter(|operation| operation.operation_type == OperationType::Entry)
            .filter(|operation| {
                // check if operation was committed to any previous block
                let operation_is_committed = pending_blocks
                    .operations_blocks
                    .get(&operation.operation_id)
                    .map_or(false, |blocks| {
                        blocks.iter().any(|block| {
                            let block_status = pending_blocks
                                .blocks_status
                                .get(block)
                                .expect("Couldn't find status of a current block");
                            *block_status == BlockStatus::PastCommitted
                        })
                    });

                let operation_in_chain = chain_store
                    .get_block_by_operation_id(operation.operation_id)
                    .ok()
                    .and_then(|operation| operation)
                    .is_some();

                !operation_is_committed && !operation_in_chain
            })
            .sorted_by_key(|operation| operation.operation_id)
            .map(|operation| operation.frame);

        let block_operations = BlockOperations::from_operations(block_operations)?;
        let block_operation_id = self.clock.consistent_time(&local_node);
        let block = BlockOwned::new_with_prev_block(
            &self.cell,
            &previous_block,
            block_operation_id,
            block_operations,
        )?;
        if block.operations_iter()?.next().is_none() {
            debug!("No operations need to be committed, so won't be proposing any block");
            return Ok(());
        }

        let block_proposal_frame_builder = operation::OperationBuilder::new_block_proposal(
            block_operation_id,
            local_node.id(),
            &block,
        )?;
        let block_proposal_operation =
            block_proposal_frame_builder.sign_and_build(local_node.frame_signer())?;

        debug!(
            "Proposed block with operation_id {} for offset {}",
            block_operation_id,
            previous_block.next_offset()
        );
        pending_synchronizer.handle_new_operation(
            sync_context,
            pending_store,
            block_proposal_operation,
        )?;

        Ok(())
    }

    ///
    /// Commits (write) the given block to the chain.
    ///
    fn commit_block(
        &self,
        sync_context: &mut SyncContext,
        next_block: &PendingBlock,
        pending_store: &mut PS,
        chain_store: &mut CS,
    ) -> Result<(), Error> {
        let local_node = self.cell.local_node();

        let block_frame = next_block.proposal.get_block()?;
        let block_reader = block_frame.get_typed_reader()?;

        // fetch block's operations from the pending store
        let block_operations =
            Self::get_block_operations(next_block, pending_store)?.map(|operation| operation.frame);

        // make sure that the hash of operations is same as defined by the block
        // this should never happen since we wouldn't have signed the block if hash didn't match
        let block_operations = BlockOperations::from_operations(block_operations)?;
        if block_operations.multihash_bytes() != block_reader.get_operations_hash()? {
            return Err(Error::Fatal(
                "Block hash for local entries didn't match block hash, but was previously signed"
                    .to_string(),
            ));
        }

        // build signatures frame
        let signatures = next_block
            .signatures
            .iter()
            .filter_map(|pending_signature| {
                if next_block.validate_signature(&self.cell, pending_signature) {
                    Some(BlockSignature::new(
                        pending_signature.node_id.clone(),
                        pending_signature.signature.clone(),
                    ))
                } else {
                    None
                }
            })
            .collect::<Vec<_>>();
        let block_signatures = BlockSignatures::new_from_signatures(signatures);
        let signatures_frame =
            block_signatures.to_frame_for_existing_block(local_node, &block_reader)?;

        // finally build the frame
        let block = BlockOwned::new(
            next_block.proposal.offset,
            block_frame.to_owned(),
            block_operations.data().to_vec(),
            signatures_frame,
        );

        debug!("Writing with offset={} to chain", block.offset());
        chain_store.write_block(&block)?;
        sync_context.push_event(Event::ChainBlockNew(next_block.proposal.offset));

        Ok(())
    }

    ///
    /// Retrieves from the pending store all operations that are in the given block
    ///
    fn get_block_operations(
        next_block: &PendingBlock,
        pending_store: &PS,
    ) -> Result<impl Iterator<Item = pending::StoredOperation>, Error> {
        let operations = next_block
            .operations
            .iter()
            .map(|operation| {
                pending_store
                    .get_operation(*operation)
                    .map_err(Into::into)
                    .and_then(|op| {
                        op.ok_or_else(|| CommitManagerError::MissingOperation(*operation).into())
                    })
            })
            .collect::<Result<Vec<_>, Error>>()? // collect automatically flatten result into Result<Vec<_>>
            .into_iter()
            .sorted_by_key(|operation| operation.operation_id);

        Ok(operations)
    }

    ///
    /// Cleanups all operations that have been committed to the chain and that are deep enough
    /// to be considered impossible to be removed (i.e. there are no plausible fork)
    ///
    fn maybe_cleanup_pending_store(
        &self,
        sync_context: &mut SyncContext,
        pending_blocks: &PendingBlocks,
        pending_store: &mut PS,
        chain_store: &CS,
    ) -> Result<(), Error> {
        let last_stored_block = chain_store
            .get_last_block()?
            .ok_or(Error::UninitializedChain)?;
        let last_stored_block_depth = last_stored_block.get_depth()?;

        // cleanup all blocks and their operations that are committed or refused with enough depth
        for (group_id, block) in &pending_blocks.blocks {
            if block.status == BlockStatus::PastCommitted
                || block.status == BlockStatus::PastRefused
            {
                let block_frame = block.proposal.get_block()?;
                let block_reader = block_frame.get_typed_reader()?;

                let block_offset = block_reader.get_offset();
                let block_depth = block_reader.get_depth();

                let depth_diff = last_stored_block_depth - block_depth;
                if depth_diff >= self.config.operations_cleanup_after_block_depth {
                    debug!("Block at offset={} depth={} can be cleaned up (last_stored_block_depth={})", block_offset, block_depth, last_stored_block_depth);

                    // delete the block & related operations (sigs, refusals, etc.)
                    pending_store.delete_operation(*group_id)?;

                    // delete operations of the block
                    for operation_id in &block.operations {
                        pending_store.delete_operation(*operation_id)?;
                    }

                    // update the sync state so that the `PendingSynchronizer` knows what was last block to get cleaned
                    sync_context.sync_state.pending_last_cleanup_block =
                        Some((block_offset, block_depth));
                }
            }
        }

        // get approx number of operations that are not associated with block
        let approx_non_committed_operations = pending_blocks
            .entries_operations_count
            .checked_sub(pending_blocks.operations_blocks.len())
            .unwrap_or(0);

        // check for dangling operations, which are operations that are already in the chain but not in
        // any blocks that are in pending store. They probably got re-added to the pending store by a node
        // that was out of sync
        if approx_non_committed_operations > 0 {
            let mut operations_to_delete = Vec::new();
            for operation in pending_store.operations_iter(..)? {
                let is_in_block = pending_blocks
                    .operations_blocks
                    .contains_key(&operation.operation_id);
                if !is_in_block {
                    if let Some(block) =
                        chain_store.get_block_by_operation_id(operation.operation_id)?
                    {
                        let block_depth = block.get_depth()?;
                        let depth_diff = last_stored_block_depth - block_depth;
                        if depth_diff >= self.config.operations_cleanup_after_block_depth {
                            operations_to_delete.push(operation.operation_id);
                        }
                    }
                }
            }

            if !operations_to_delete.is_empty() {
                debug!(
                    "Deleting {} dangling operations from pending store",
                    operations_to_delete.len()
                );
                for operation_id in operations_to_delete {
                    pending_store.delete_operation(operation_id)?;
                }
            }
        }

        Ok(())
    }
}

///
/// In order to prevent nodes to commit new blocks all the same time resulting in splitting
/// the vote, we make nodes propose blocks in turns.
///
/// Turns are calculated by sorting nodes by their node ids, and then finding out who's turn
/// it is based on current time.
///
fn is_node_commit_turn(
    nodes: &CellNodesRead,
    my_node_id: &NodeId,
    now: u64,
    config: &CommitManagerConfig,
) -> Result<bool, Error> {
    let nodes_iter = nodes.iter();
    let sorted_nodes = nodes_iter
        .all()
        .sorted_by_key(|node| node.id().to_str())
        .collect_vec();
    let my_node_position = sorted_nodes
        .iter()
        .position(|node| node.id() == my_node_id)
        .ok_or(Error::MyNodeNotFound)? as u64;

    let commit_interval = duration_to_consistent_u64(config.commit_maximum_interval, 0);
    let node_turn = (now / commit_interval) % (sorted_nodes.len() as u64);
    Ok(node_turn == my_node_position)
}

///
/// CommitManager's configuration
///
#[derive(Copy, Clone, Debug)]
pub struct CommitManagerConfig {
    pub operations_cleanup_after_block_depth: BlockDepth,

    /// After how many new pending operations do we force a commit, even if we aren't
    /// past the commit interval
    pub commit_maximum_pending_count: usize,

    /// Interval at which commits are made, unless we hit `commit_maximum_pending_count`
    pub commit_maximum_interval: Duration,
}

impl Default for CommitManagerConfig {
    fn default() -> Self {
        CommitManagerConfig {
            operations_cleanup_after_block_depth: 6,
            commit_maximum_pending_count: 50,
            commit_maximum_interval: Duration::from_secs(5),
        }
    }
}

///
/// Structure that contains information on the pending store and blocks in it.
/// It is used by the commit manager to know if it needs to propose, sign, commit blocks
///
struct PendingBlocks {
    blocks: HashMap<GroupId, PendingBlock>,
    blocks_status: HashMap<GroupId, BlockStatus>,
    operations_blocks: HashMap<OperationId, HashSet<GroupId>>,
    entries_operations_count: usize,
}

impl PendingBlocks {
    fn new<PS: pending::PendingStore, CS: chain::ChainStore>(
        cell: &Cell,
        pending_store: &PS,
        chain_store: &CS,
    ) -> Result<PendingBlocks, Error> {
        let local_node = cell.local_node();

        let last_stored_block = chain_store
            .get_last_block()?
            .ok_or(Error::UninitializedChain)?;
        let next_offset = last_stored_block.next_offset();

        // first pass to fetch all groups proposal
        let mut groups_id = Vec::new();
        let mut entries_operations_count = 0;
        for pending_op in pending_store.operations_iter(..)? {
            match pending_op.operation_type {
                OperationType::BlockPropose => {
                    groups_id.push(pending_op.operation_id);
                }
                OperationType::Entry => {
                    entries_operations_count += 1;
                }
                _ => {}
            }
        }

        // then we get all operations for each block proposal
        let mut blocks = HashMap::<OperationId, PendingBlock>::new();
        for group_id in groups_id.iter_mut() {
            let group_operations = if let Some(group_operations) =
                pending_store.get_group_operations(*group_id)?
            {
                group_operations
            } else {
                warn!("Didn't have any operations for block proposal with group_id={}, which shouldn't be possible", group_id);
                continue;
            };

            let mut operations = Vec::new();
            let mut proposal: Option<PendingBlockProposal> = None;
            let mut signatures = Vec::new();
            let mut refusals = Vec::new();

            for operation in group_operations.operations {
                let operation_reader = operation.frame.get_typed_reader()?;

                match operation_reader.get_operation().which()? {
                    pending_operation::operation::Which::BlockPropose(reader) => {
                        let block_frame =
                            TypedSliceFrame::<block::Owned>::new(reader?.get_block()?)?;
                        let block_reader = block_frame.get_typed_reader()?;
                        for operation_header in block_reader.get_operations_header()? {
                            operations.push(operation_header.get_operation_id());
                        }

                        proposal = Some(PendingBlockProposal {
                            offset: block_reader.get_offset(),
                            operation,
                        })
                    }
                    pending_operation::operation::Which::BlockSign(_reader) => {
                        signatures.push(PendingBlockSignature::from_pending_operation(
                            operation_reader,
                        )?);
                    }
                    pending_operation::operation::Which::BlockRefuse(_reader) => {
                        refusals.push(PendingBlockRefusal::from_pending_operation(
                            operation_reader,
                        )?);
                    }
                    pending_operation::operation::Which::Entry(_) => {
                        warn!("Found a non-block related operation in block group, which shouldn't be possible (group_id={})", group_id);
                    }
                };
            }

            let proposal =
                proposal.expect("Couldn't find proposal operation within a group of the proposal");
            let has_my_refusal = refusals.iter().any(|sig| sig.node_id == *local_node.id());
            let has_my_signature = signatures.iter().any(|sig| sig.node_id == *local_node.id());

            let status = match chain_store.get_block(proposal.offset).ok() {
                Some(block) => {
                    if block.get_proposed_operation_id()? == *group_id {
                        BlockStatus::PastCommitted
                    } else {
                        BlockStatus::PastRefused
                    }
                }
                None => {
                    let nodes = cell.nodes();
                    if proposal.offset < next_offset {
                        // means it was a proposed block for a diverged chain
                        BlockStatus::PastRefused
                    } else if nodes.is_quorum(refusals.len()) || has_my_refusal {
                        BlockStatus::NextRefused
                    } else {
                        BlockStatus::NextPotential
                    }
                }
            };

            debug!(
                "Found pending store's block {} with status {:?}",
                proposal.offset, status
            );
            let pending_block = PendingBlock {
                group_id: *group_id,
                status,

                proposal,
                refusals,
                signatures,

                has_my_refusal,
                has_my_signature,

                operations,
            };
            blocks.insert(*group_id, pending_block);
        }

        let operations_blocks = Self::map_operations_blocks(&blocks);
        let blocks_status = Self::map_blocks_status(&blocks);

        Ok(PendingBlocks {
            blocks,
            blocks_status,
            operations_blocks,
            entries_operations_count,
        })
    }

    fn get_block(&self, block_op_id: &OperationId) -> &PendingBlock {
        self.blocks
            .get(block_op_id)
            .expect("Couldn't find block in map")
    }

    fn get_block_mut(&mut self, block_op_id: &OperationId) -> &mut PendingBlock {
        self.blocks
            .get_mut(block_op_id)
            .expect("Couldn't find block in map")
    }

    fn map_operations_blocks(
        pending_blocks: &HashMap<OperationId, PendingBlock>,
    ) -> HashMap<OperationId, HashSet<OperationId>> {
        let mut operations_blocks: HashMap<OperationId, HashSet<OperationId>> = HashMap::new();
        for block in pending_blocks.values() {
            for operation_id in &block.operations {
                let operation = operations_blocks
                    .entry(*operation_id)
                    .or_insert_with(HashSet::new);
                operation.insert(block.group_id);
            }
        }
        operations_blocks
    }

    fn map_blocks_status(
        pending_blocks: &HashMap<OperationId, PendingBlock>,
    ) -> HashMap<OperationId, BlockStatus> {
        let mut blocks_status = HashMap::new();
        for (block_group_id, block) in pending_blocks {
            blocks_status.insert(*block_group_id, block.status);
        }
        blocks_status
    }

    fn potential_next_blocks(&self) -> Vec<&PendingBlock> {
        // we sort potential next blocks by which block has better potential to become a block
        self.blocks
            .values()
            .filter(|block| block.status == BlockStatus::NextPotential)
            .sorted_by(|a, b| PendingBlock::compare_potential_next_block(a, b))
            .collect()
    }
}

///
/// Information about a block in the pending store.
///
/// This block could be a past block (committed to chain or refused), which will eventually be cleaned up,
/// or could be a next potential or refused block.
///
struct PendingBlock {
    group_id: OperationId,
    status: BlockStatus,

    proposal: PendingBlockProposal,
    refusals: Vec<PendingBlockRefusal>,
    signatures: Vec<PendingBlockSignature>,
    has_my_refusal: bool,
    has_my_signature: bool,

    operations: Vec<OperationId>,
}

impl PendingBlock {
    fn add_my_signature(&mut self, signature: PendingBlockSignature) {
        self.signatures.push(signature);
        self.has_my_signature = true;
    }

    fn add_my_refusal(&mut self, refusal: PendingBlockRefusal) {
        self.refusals.push(refusal);
        self.has_my_refusal = true;
    }

    fn validate_signature(&self, cell: &Cell, signature: &PendingBlockSignature) -> bool {
        let nodes = cell.nodes();
        let node = if let Some(node) = nodes.get(&signature.node_id) {
            node
        } else {
            return false;
        };

        let block = if let Ok(block) = self.proposal.get_block() {
            block
        } else {
            return false;
        };

        if let Some(signature_data) = block.signature_data() {
            signature.signature.validate(node, signature_data)
        } else {
            return false;
        }
    }

    fn compare_potential_next_block(a: &PendingBlock, b: &PendingBlock) -> Ordering {
        if a.has_my_signature {
            return Ordering::Greater;
        } else if b.has_my_signature {
            return Ordering::Less;
        }

        if a.signatures.len() > b.signatures.len() {
            return Ordering::Greater;
        } else if a.signatures.len() < b.signatures.len() {
            return Ordering::Less;
        }

        // fallback to operation id, which is time ordered
        a.group_id.cmp(&b.group_id)
    }
}

#[derive(PartialEq, Debug, Clone, Copy)]
enum BlockStatus {
    PastRefused,
    PastCommitted,
    NextPotential,
    NextRefused,
}

///
/// Block proposal wrapper
///
struct PendingBlockProposal {
    offset: BlockOffset,
    operation: pending::StoredOperation,
}

impl PendingBlockProposal {
    fn get_block(&self) -> Result<TypedSliceFrame<block::Owned>, Error> {
        let operation_reader = self.operation.frame.get_typed_reader()?;
        let inner_operation = operation_reader.get_operation();
        match inner_operation.which()? {
            pending_operation::operation::Which::BlockPropose(block_prop) => {
                Ok(TypedSliceFrame::new(block_prop?.get_block()?)?)
            }
            _ => Err(Error::Other(
                "Expected block sign pending op to create block signature, but got something else"
                    .to_string(),
            )),
        }
    }
}

///
/// Block refusal wrapper
///
struct PendingBlockRefusal {
    node_id: NodeId,
}

impl PendingBlockRefusal {
    fn from_pending_operation(
        operation_reader: pending_operation::Reader,
    ) -> Result<PendingBlockRefusal, Error> {
        let inner_operation = operation_reader.get_operation();
        match inner_operation.which()? {
            pending_operation::operation::Which::BlockRefuse(_sig) => {
                let node_id_str = operation_reader.get_node_id()?;
                let node_id = NodeId::from_str(node_id_str).map_err(|_| {
                    Error::Other(format!("Couldn't convert to NodeID: {}", node_id_str))
                })?;
                Ok(PendingBlockRefusal { node_id })
            }
            _ => Err(Error::Other(
                "Expected block refuse pending op to create block refusal, but got something else"
                    .to_string(),
            )),
        }
    }
}

///
/// Block signature wrapper
///
struct PendingBlockSignature {
    node_id: NodeId,
    signature: Signature,
}

impl PendingBlockSignature {
    fn from_pending_operation(
        operation_reader: pending_operation::Reader,
    ) -> Result<PendingBlockSignature, Error> {
        let inner_operation = operation_reader.get_operation();
        match inner_operation.which()? {
            pending_operation::operation::Which::BlockSign(sig) => {
                let op_signature_reader = sig?;
                let signature_reader = op_signature_reader.get_signature()?;

                let node_id_str = operation_reader.get_node_id()?;
                let node_id = NodeId::from_str(node_id_str).map_err(|_| {
                    Error::Other(format!("Couldn't convert to NodeID: {}", node_id_str))
                })?;
                let signature = Signature::from_bytes(signature_reader.get_node_signature()?);

                Ok(PendingBlockSignature { node_id, signature })
            }
            _ => Err(Error::Other(
                "Expected block sign pending op to create block signature, but got something else"
                    .to_string(),
            )),
        }
    }
}

///
/// CommitManager related error
///
#[derive(Debug, Fail)]
pub enum CommitManagerError {
    #[fail(display = "Invalid signature in commit manager: {}", _0)]
    InvalidSignature(String),
    #[fail(display = "A referenced operation is missing from local store: {}", _0)]
    MissingOperation(OperationId),
}

#[cfg(test)]
mod tests {
    use crate::chain::ChainStore;
    use crate::engine::testing::*;
    use crate::operation::{NewOperation, OperationBuilder};
    use crate::pending::PendingStore;

    use super::*;
    use std::time::Instant;

    #[test]
    fn should_propose_block_on_new_operations() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        // nothing will be done since nothing is in pending store
        cluster.tick_commit_manager(0)?;
        assert_eq!(0, cluster.pending_stores[0].operations_count());

        // append new operation
        append_new_operation(&mut cluster, b"hello world")?;

        // this should create a block proposal (2nd op in pending store)
        cluster.tick_commit_manager(0)?;
        assert_eq!(2, cluster.pending_stores[0].operations_count()); // operation + block

        // shouldn't have signature yet
        let blocks = get_pending_blocks(&cluster)?;
        assert!(!blocks.blocks.iter().nth(0).unwrap().1.has_my_signature);

        // this should sign + commit block to chain
        cluster.tick_commit_manager(0)?;
        assert_eq!(3, cluster.pending_stores[0].operations_count()); // operation + block + signature

        let blocks = get_pending_blocks(&cluster)?;
        assert_eq!(
            blocks.blocks.iter().nth(0).unwrap().1.status,
            BlockStatus::PastCommitted
        );
        let last_block = cluster.chains[0].get_last_block()?.unwrap();
        assert_ne!(last_block.offset, 0);

        // this should not do anything, since it's already committed
        cluster.tick_commit_manager(0)?;
        assert_eq!(3, cluster.pending_stores[0].operations_count()); // operation + block + signature

        Ok(())
    }

    #[test]
    fn only_one_node_at_time_should_commit() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(2);
        cluster.chain_add_genesis_block(0);
        cluster.chain_add_genesis_block(1);
        cluster.tick_chain_synchronizer(0)?;
        cluster.tick_chain_synchronizer(1)?;

        // add operation & try to commit on each node
        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;

        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(1)?;
        cluster.tick_commit_manager(1)?;

        // only one node should have committed since it was its turn
        assert_ne!(
            cluster.pending_stores[0].operations_count(),
            cluster.pending_stores[1].operations_count()
        );

        Ok(())
    }

    #[test]
    fn commit_block_at_interval() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        let commit_interval = cluster.commit_managers[0].config.commit_maximum_interval;

        cluster.clocks[0].set_fixed_instant(Instant::now());

        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        // first block should be committed right away since there is not previous
        cluster.clocks[0].add_fixed_instant_duration(Duration::from_millis(10));
        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        let first_block_offset = block.offset();
        assert_ne!(0, first_block_offset);

        // second block should wait for time
        cluster.clocks[0].add_fixed_instant_duration(Duration::from_millis(10));
        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        assert_eq!(first_block_offset, block.offset());

        // time has passed, should now commit
        cluster.clocks[0].add_fixed_instant_duration(commit_interval);
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        assert_ne!(first_block_offset, block.offset());

        Ok(())
    }

    #[test]
    fn commit_block_after_maximum_operations() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.clocks[0].set_fixed_instant(Instant::now());

        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        // first block should be committed right away since there is not previous
        cluster.clocks[0].add_fixed_instant_duration(Duration::from_millis(10));
        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        let first_block_offset = block.offset();
        assert_ne!(0, first_block_offset);

        // should not commit new operations because didn't exceed interval & not enough
        cluster.clocks[0].add_fixed_instant_duration(Duration::from_millis(10));
        append_new_operation(&mut cluster, b"hello world")?;
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        assert_eq!(first_block_offset, block.offset());

        // now add maximum ops
        cluster.clocks[0].add_fixed_instant_duration(Duration::from_millis(10));
        let max_ops = cluster.commit_managers[0]
            .config
            .commit_maximum_pending_count;
        for _i in 0..=max_ops {
            append_new_operation(&mut cluster, b"hello world")?;
        }

        // it should commits
        cluster.tick_commit_manager(0)?;
        cluster.tick_commit_manager(0)?;
        let block = cluster.chains[0].get_last_block()?.unwrap();
        assert_ne!(first_block_offset, block.offset());

        Ok(())
    }

    #[test]
    fn should_sign_valid_proposed_block() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        // append an operation
        let op_data = b"hello world";
        let op_id = append_new_operation(&mut cluster, op_data)?;

        // add a block proposal for this operation
        let block_id = append_block_proposal_from_operations(&mut cluster, vec![op_id])?;

        // ticking should sign the block
        cluster.tick_commit_manager(0)?;

        let blocks = get_pending_blocks(&cluster)?;
        assert!(blocks.blocks[&block_id].has_my_signature);

        // should commit to chain
        cluster.tick_commit_manager(0)?;
        let last_block = cluster.chains[0].get_last_block()?.unwrap();
        assert_ne!(last_block.offset, 0);

        Ok(())
    }

    #[test]
    fn should_refuse_invalid_proposed_block() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        // append an operation
        let op_data = b"hello world";
        let op_id = append_new_operation(&mut cluster, op_data)?;

        // should sign this block
        let block_id_good = append_block_proposal_from_operations(&mut cluster, vec![op_id])?;
        cluster.tick_commit_manager(0)?;

        // should refuse this block as another one is already signed
        let block_id_bad = append_block_proposal_from_operations(&mut cluster, vec![op_id])?;
        cluster.tick_commit_manager(0)?;

        let blocks = get_pending_blocks(&cluster)?;
        assert!(blocks.blocks[&block_id_good].has_my_signature);
        assert!(blocks.blocks[&block_id_bad].has_my_refusal);

        // should commit the good block, and ignore refused one
        cluster.tick_commit_manager(0)?;
        let last_block = cluster.chains[0].get_last_block()?.unwrap();
        let last_block_reader = last_block.block.get_typed_reader()?;
        assert_eq!(last_block_reader.get_proposed_operation_id(), block_id_good);

        Ok(())
    }

    #[test]
    fn test_is_node_commit_turn() -> Result<(), failure::Error> {
        let cluster = TestCluster::new(2);
        let node1 = cluster.get_node(0);
        let node2 = cluster.get_node(1);

        // we use node id to sort nodes
        let (first_node, sec_node) = if node1.id().to_str() < node2.id().to_str() {
            (&node1, &node2)
        } else {
            (&node2, &node1)
        };

        let config = CommitManagerConfig {
            commit_maximum_interval: Duration::from_secs(2),
            ..CommitManagerConfig::default()
        };

        let nodes = cluster.cells[0].nodes();
        let now = duration_to_consistent_u64(Duration::from_millis(0), 0);
        assert!(is_node_commit_turn(&nodes, first_node.id(), now, &config)?);
        assert!(!is_node_commit_turn(&nodes, sec_node.id(), now, &config)?);

        let now = duration_to_consistent_u64(Duration::from_millis(1999), 0);
        assert!(is_node_commit_turn(&nodes, first_node.id(), now, &config)?);
        assert!(!is_node_commit_turn(&nodes, sec_node.id(), now, &config)?);

        let now = duration_to_consistent_u64(Duration::from_millis(2000), 0);
        assert!(!is_node_commit_turn(&nodes, first_node.id(), now, &config)?);
        assert!(is_node_commit_turn(&nodes, sec_node.id(), now, &config)?);

        let now = duration_to_consistent_u64(Duration::from_millis(3999), 0);
        assert!(!is_node_commit_turn(&nodes, first_node.id(), now, &config)?);
        assert!(is_node_commit_turn(&nodes, sec_node.id(), now, &config)?);

        Ok(())
    }

    #[test]
    fn cleanup_past_committed_operations() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.clocks[0].set_fixed_instant(Instant::now());

        let assert_not_in_pending = |cluster: &TestCluster, operation_id: u64| {
            assert!(&cluster.pending_stores[0]
                .get_operation(operation_id)
                .unwrap()
                .is_none());
        };

        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        let config = cluster.commit_managers[0].config;

        let mut operations_id = Vec::new();
        for _i in 0..=config.operations_cleanup_after_block_depth {
            // advance clock so that we make sure it commits
            cluster.clocks[0].add_fixed_instant_duration(config.commit_maximum_interval);

            let op_id = append_new_operation(&mut cluster, b"hello world")?;
            operations_id.push(op_id);

            // should create proposal, sign it and commit it
            cluster.tick_commit_manager(0)?;
            cluster.tick_commit_manager(0)?;

            // make sure it's committed to chain
            assert!(cluster.chains[0]
                .get_block_by_operation_id(op_id)?
                .is_some());
        }

        // this will cleanup
        cluster.tick_commit_manager(0)?;

        // the first op should have been removed from pending store
        let first_op_id = *operations_id.first().unwrap();
        assert_not_in_pending(&cluster, first_op_id);

        // check if the block, signatures are still in pending
        let block: crate::block::BlockRef = cluster.chains[0]
            .get_block_by_operation_id(first_op_id)?
            .unwrap();
        let block_frame = block.block.get_typed_reader()?;
        let block_group_id = block_frame.get_proposed_operation_id();
        assert_not_in_pending(&cluster, block_group_id);

        // check that SyncState was updated correctly
        let (cleanup_offset, cleanup_depth) =
            cluster.sync_states[0].pending_last_cleanup_block.unwrap();
        assert_eq!(cleanup_depth, block.get_depth()?);
        assert_eq!(cleanup_offset, block.offset());

        // check if individual operations are still in pending
        for operation in block.operations_iter()? {
            let operation_reader = operation.get_typed_reader()?;
            assert_not_in_pending(&cluster, operation_reader.get_operation_id());
        }

        Ok(())
    }

    #[test]
    fn cleanup_dangling_operations() -> Result<(), failure::Error> {
        let mut cluster = TestCluster::new(1);
        cluster.clocks[0].set_fixed_instant(Instant::now());

        cluster.chain_add_genesis_block(0);
        cluster.tick_chain_synchronizer(0)?;

        let config = cluster.commit_managers[0].config;

        let mut operations_id = Vec::new();
        for _i in 0..=config.operations_cleanup_after_block_depth {
            // advance clock so that we make sure it commits
            cluster.clocks[0].add_fixed_instant_duration(config.commit_maximum_interval);

            let op_id = append_new_operation(&mut cluster, b"hello world")?;
            operations_id.push(op_id);

            // should create proposal, sign it and commit it
            cluster.tick_commit_manager(0)?;
            cluster.tick_commit_manager(0)?;

            // make sure it's committed to chain
            assert!(cluster.chains[0]
                .get_block_by_operation_id(op_id)?
                .is_some());
        }

        // clear pending store
        cluster.pending_stores[0].clear();

        // revive old operation
        let first_op_id = *operations_id.first().unwrap();
        let block: crate::block::BlockRef = cluster.chains[0]
            .get_block_by_operation_id(first_op_id)?
            .unwrap();
        let operation = block.get_operation(first_op_id)?.unwrap();
        cluster.pending_stores[0].put_operation(NewOperation::from_frame(operation.to_owned()))?;
        assert_eq!(1, cluster.pending_stores[0].operations_count());

        // this should trigger cleanup of dandling operation
        cluster.tick_commit_manager(0)?;

        assert_eq!(0, cluster.pending_stores[0].operations_count());

        Ok(())
    }

    fn append_new_operation(cluster: &mut TestCluster, data: &[u8]) -> Result<OperationId, Error> {
        let op_id = cluster.consistent_clock(0);

        for node in cluster.nodes.iter() {
            let idx = cluster.get_node_index(node.id());
            let op_builder = OperationBuilder::new_entry(op_id, node.id(), data);
            let operation = op_builder.sign_and_build(node.frame_signer())?;
            cluster.pending_stores[idx].put_operation(operation)?;
        }

        Ok(op_id)
    }

    fn append_block_proposal_from_operations(
        cluster: &mut TestCluster,
        op_ids: Vec<OperationId>,
    ) -> Result<OperationId, Error> {
        let node = &cluster.nodes[0];

        let previous_block = cluster.chains[0].get_last_block()?.unwrap();
        let block_operations = op_ids.iter().map(|op_id| {
            cluster.pending_stores[0]
                .get_operation(*op_id)
                .unwrap()
                .unwrap()
                .frame
        });
        let block_operations = BlockOperations::from_operations(block_operations)?;
        let block_operation_id = cluster.clocks[0].consistent_time(&node);
        let block = BlockOwned::new_with_prev_block(
            &cluster.cells[0],
            &previous_block,
            block_operation_id,
            block_operations,
        )?;
        let block_proposal_frame_builder =
            operation::OperationBuilder::new_block_proposal(block_operation_id, node.id(), &block)?;
        let operation = block_proposal_frame_builder.sign_and_build(node.frame_signer())?;

        cluster.pending_stores[0].put_operation(operation)?;

        Ok(block_operation_id)
    }

    fn get_pending_blocks(cluster: &TestCluster) -> Result<PendingBlocks, Error> {
        PendingBlocks::new(
            &cluster.cells[0],
            &cluster.pending_stores[0],
            &cluster.chains[0],
        )
    }
}