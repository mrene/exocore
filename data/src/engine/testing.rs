use tempdir::TempDir;

use exocore_common::node::{LocalNode, Node, NodeId};
use exocore_common::serialization::framed::{
    FrameBuilder, MultihashFrameSigner, OwnedTypedFrame, TypedFrame,
};
use exocore_common::serialization::protos::data_chain_capnp::{block, block_signatures};

use crate::block::{Block, BlockDepth, BlockOffset, BlockOwned};
use crate::chain::directory::{DirectoryChainStore, DirectoryChainStoreConfig as DirectoryConfig};
use crate::chain::ChainStore;
use crate::engine::commit_manager::CommitManager;
use crate::engine::{chain_sync, SyncContext};
use crate::engine::{pending_sync, SyncState};
use crate::operation::{GroupId, NewOperation, Operation, OperationBuilder, OperationId};
use crate::pending::memory::MemoryPendingStore;
use crate::pending::PendingStore;
use exocore_common::cell::FullCell;
use exocore_common::time::Clock;
use std::collections::HashMap;

pub(super) struct TestCluster {
    pub cells: Vec<FullCell>,

    pub nodes: Vec<LocalNode>,
    pub nodes_index: HashMap<NodeId, usize>,

    pub temp_dirs: Vec<TempDir>,

    pub clocks: Vec<Clock>,
    pub chains: Vec<DirectoryChainStore>,
    pub chains_synchronizer: Vec<chain_sync::ChainSynchronizer<DirectoryChainStore>>,

    pub pending_stores: Vec<MemoryPendingStore>,
    pub pending_stores_synchronizer: Vec<pending_sync::PendingSynchronizer<MemoryPendingStore>>,

    pub commit_managers: Vec<CommitManager<MemoryPendingStore, DirectoryChainStore>>,

    pub sync_states: Vec<SyncState>,
}

impl TestCluster {
    pub fn new(count: usize) -> TestCluster {
        let mut cells = Vec::new();

        let mut nodes = Vec::new();
        let mut nodes_index = HashMap::new();

        let mut temp_dirs = Vec::new();
        let mut clocks = Vec::new();
        let mut chains = Vec::new();
        let mut chains_synchronizer = Vec::new();
        let mut pending_stores = Vec::new();
        let mut pending_stores_synchronizer = Vec::new();
        let mut commit_managers = Vec::new();
        let mut sync_states = Vec::new();

        for i in 0..count {
            let local_node = LocalNode::generate();

            let cell = FullCell::generate(local_node.clone());
            cells.push(cell.clone());

            nodes_index.insert(local_node.id().clone(), i);
            nodes.push(local_node.clone());

            let tempdir = TempDir::new("test_cluster").unwrap();

            let clock = Clock::new_mocked();
            clocks.push(clock.clone());

            let chain_config = DirectoryConfig {
                segment_max_size: 100_000,
                segment_over_allocate_size: 101_000,
                ..DirectoryConfig::default()
            };
            chains.push(DirectoryChainStore::create(chain_config, tempdir.as_ref()).unwrap());
            chains_synchronizer.push(chain_sync::ChainSynchronizer::new(
                chain_sync::ChainSyncConfig::default(),
                cell.cell().clone(),
                clock.clone(),
            ));

            pending_stores.push(MemoryPendingStore::new());
            pending_stores_synchronizer.push(pending_sync::PendingSynchronizer::new(
                pending_sync::PendingSyncConfig::default(),
                cell.cell().clone(),
                clock.clone(),
            ));

            commit_managers.push(CommitManager::new(
                crate::engine::commit_manager::CommitManagerConfig::default(),
                cell.cell().clone(),
                clock.clone(),
            ));

            sync_states.push(SyncState::default());

            temp_dirs.push(tempdir);
        }

        // add each node to all other nodes' cell
        for cell in &cells {
            for other_node in &nodes {
                if cell.local_node().id() != other_node.id() {
                    let mut cell_nodes = cell.nodes_mut();
                    cell_nodes.add(other_node.node().clone());
                }
            }
        }

        TestCluster {
            cells,
            nodes,
            nodes_index,

            temp_dirs,
            clocks,
            chains,
            chains_synchronizer,
            pending_stores,
            pending_stores_synchronizer,
            commit_managers,

            sync_states,
        }
    }

    pub fn get_node(&self, node_idx: usize) -> Node {
        self.nodes[node_idx].node().clone()
    }

    pub fn get_node_index(&self, node_id: &NodeId) -> usize {
        self.nodes_index[node_id]
    }

    pub fn chain_generate_dummy(&mut self, node_idx: usize, count: usize, seed: u64) {
        self.chain_generate_dummy_from_offset(node_idx, 0, 0, count, seed);
    }

    pub fn chain_append_dummy(&mut self, node_idx: usize, count: usize, seed: u64) {
        let (next_offset, next_depth) =
            self.chains[node_idx]
                .get_last_block()
                .unwrap()
                .map_or((0, 0), |block| {
                    let block_reader = block.block().get_typed_reader().unwrap();
                    let block_depth = block_reader.get_depth();

                    (block.next_offset(), block_depth + 1)
                });

        self.chain_generate_dummy_from_offset(node_idx, next_offset, next_depth, count, seed);
    }

    pub fn chain_generate_dummy_from_offset(
        &mut self,
        node_idx: usize,
        from_offset: BlockOffset,
        from_depth: BlockDepth,
        count: usize,
        seed: u64,
    ) {
        let mut next_offset = from_offset;

        for i in 0..count {
            let previous_block = if i != 0 {
                Some(
                    self.chains[node_idx]
                        .get_block_from_next_offset(next_offset)
                        .unwrap(),
                )
            } else {
                None
            };

            let prev_block_msg = previous_block.map(|b| b.block);
            let operations_data = vec![0u8; 123];
            let signatures = create_dummy_block_sigs(operations_data.len() as u32);
            let block_frame = create_dummy_block(
                next_offset,
                from_depth + i as u64,
                operations_data.len() as u32,
                signatures.frame_size() as u16,
                prev_block_msg,
                seed,
            );
            let block = BlockOwned::new(next_offset, block_frame, operations_data, signatures);
            next_offset = self.chains[node_idx].write_block(&block).unwrap();
        }
    }

    pub fn pending_generate_dummy(
        &mut self,
        node_idx: usize,
        generator_node_idx: usize,
        count: usize,
    ) -> Vec<OperationId> {
        let generator_node = &self.nodes[generator_node_idx];
        let mut operations_id = Vec::new();
        for operation in dummy_pending_ops_generator(generator_node, count) {
            operations_id.push(operation.get_id().unwrap());
            self.pending_stores[node_idx]
                .put_operation(operation)
                .unwrap();
        }
        operations_id
    }

    pub fn chain_add_genesis_block(&mut self, node_idx: usize) {
        let block = BlockOwned::new_genesis(&self.cells[node_idx]).unwrap();
        self.chains[node_idx].write_block(&block).unwrap();
    }

    pub fn tick_pending_synchronizer(
        &mut self,
        node_idx: usize,
    ) -> Result<SyncContext, crate::engine::Error> {
        let mut sync_context = SyncContext::new(self.sync_states[node_idx]);
        self.pending_stores_synchronizer[node_idx]
            .tick(&mut sync_context, &self.pending_stores[node_idx])?;
        self.sync_states[node_idx] = sync_context.sync_state;

        Ok(sync_context)
    }

    pub fn tick_chain_synchronizer(
        &mut self,
        node_idx: usize,
    ) -> Result<SyncContext, crate::engine::Error> {
        let mut sync_context = SyncContext::new(self.sync_states[node_idx]);
        self.chains_synchronizer[node_idx].tick(&mut sync_context, &self.chains[node_idx])?;
        self.sync_states[node_idx] = sync_context.sync_state;

        Ok(sync_context)
    }

    pub fn tick_commit_manager(
        &mut self,
        node_idx: usize,
    ) -> Result<SyncContext, crate::engine::Error> {
        let mut sync_context = SyncContext::new(self.sync_states[node_idx]);
        self.commit_managers[node_idx].tick(
            &mut sync_context,
            &mut self.pending_stores_synchronizer[node_idx],
            &mut self.pending_stores[node_idx],
            &mut self.chains[node_idx],
        )?;
        self.sync_states[node_idx] = sync_context.sync_state;

        Ok(sync_context)
    }

    pub fn consistent_clock(&self, node_idx: usize) -> u64 {
        self.clocks[node_idx].consistent_time(&self.nodes[node_idx])
    }
}

pub fn create_dummy_block<B: TypedFrame<block::Owned>>(
    offset: u64,
    depth: u64,
    operations_size: u32,
    signatures_size: u16,
    previous_block: Option<B>,
    seed: u64,
) -> OwnedTypedFrame<block::Owned> {
    let mut msg_builder = FrameBuilder::<block::Owned>::new();

    {
        let mut block_builder: block::Builder = msg_builder.get_builder_typed();
        block_builder.set_offset(offset);
        block_builder.set_depth(depth);
        block_builder.set_operations_size(operations_size);
        block_builder.set_signatures_size(signatures_size);
        block_builder.set_proposed_node_id(&format!("seed={}", seed));

        if let Some(previous_block) = previous_block {
            let previous_block_reader: block::Reader = previous_block.get_typed_reader().unwrap();
            block_builder.set_previous_offset(previous_block_reader.get_offset());
            block_builder.set_previous_hash(previous_block.signature_data().unwrap());
        }
    }

    let signer = MultihashFrameSigner::new_sha3256();
    msg_builder.as_owned_framed(signer).unwrap()
}

pub fn create_dummy_block_sigs(operations_size: u32) -> OwnedTypedFrame<block_signatures::Owned> {
    let mut msg_builder = FrameBuilder::<block_signatures::Owned>::new();
    let mut block_builder = msg_builder.get_builder_typed();
    block_builder.set_operations_size(operations_size);

    let signer = MultihashFrameSigner::new_sha3256();
    msg_builder.as_owned_framed(signer).unwrap()
}

pub fn dummy_pending_ops_generator(
    local_node: &LocalNode,
    count: usize,
) -> impl Iterator<Item = NewOperation> {
    let local_node = local_node.clone();
    (1..=count).map(move |i| {
        let (group_id, operation_id) = ((i % 10 + 1) as u64, i as u64);
        create_dummy_new_entry_op(&local_node, operation_id, group_id)
    })
}

pub fn create_dummy_new_entry_op(
    local_node: &LocalNode,
    operation_id: OperationId,
    group_id: GroupId,
) -> NewOperation {
    let mut builder = OperationBuilder::new_entry(operation_id, local_node.id(), b"bob");
    let mut frame_builder = builder.frame_builder.get_builder_typed();
    frame_builder.set_group_id(group_id);

    let frame_signer = MultihashFrameSigner::new_sha3256();
    builder.sign_and_build(frame_signer).unwrap()
}