// TODO: WAL stored on disk, rotated
// TODO: Or in memory, with spilling to disk?

use std::path::PathBuf;

use exocore_common::security::signature::Signature;

mod persistence;
pub use self::persistence::Persistence;

pub struct Store<P: Persistence> {
    persistence: P,
}

impl<P: Persistence> Store<P> {
    pub fn new(_bla: usize) -> Store<P> {
        // TODO: Path of wal
        unimplemented!()
    }
}

struct Entry {
    signatures: Vec<Signature>,
}

#[cfg(test)]
mod test {
    #[test]
    fn test_store() {}
}
