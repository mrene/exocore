use futures::channel::{mpsc, oneshot};
use futures::future::Shared;
use futures::{FutureExt, StreamExt};

///
/// Manages a set of handles so that their lifetime is managed along their parent's lifetime.
///
/// This management happens in 3 ways:
///    1) Handle can be notified when parent is ready.
///    2) Handle can be notified when parent has been dropped.
///    3) Parent can be notified when all its handles have been dropped.
///
pub struct HandleSet {
    handle_dropped_sender: mpsc::Sender<()>,
    handle_dropped_receiver: mpsc::Receiver<()>,
    set_started_sender: oneshot::Sender<()>,
    set_started_receiver: Shared<oneshot::Receiver<()>>,
    set_dropped_sender: oneshot::Sender<()>,
    set_dropped_receiver: Shared<oneshot::Receiver<()>>,
}

impl HandleSet {
    pub fn new() -> HandleSet {
        let (handle_dropped_sender, handle_dropped_receiver) = mpsc::channel(1);
        let (set_dropped_sender, set_dropped_receiver) = oneshot::channel();
        let (set_started_sender, set_started_receiver) = oneshot::channel();

        HandleSet {
            handle_dropped_sender,
            handle_dropped_receiver,
            set_started_sender,
            set_started_receiver: set_started_receiver.shared(),
            set_dropped_sender,
            set_dropped_receiver: set_dropped_receiver.shared(),
        }
    }

    pub fn get_handle(&self) -> Handle {
        Handle {
            set_started_receiver: self.set_started_receiver.clone(),
            set_dropped_receiver: self.set_dropped_receiver.clone(),
            _handle_dropped_sender: self.handle_dropped_sender.clone(),
        }
    }

    pub async fn on_handles_dropped(self) {
        let (set_started_sender, mut handle_dropped_receiver, _set_dropped_sender) = {
            let HandleSet {
                handle_dropped_sender,
                handle_dropped_receiver,
                set_started_sender,
                set_dropped_sender,
                ..
            } = self;

            drop(handle_dropped_sender);

            (
                set_started_sender,
                handle_dropped_receiver,
                set_dropped_sender,
            )
        };

        let _ = set_started_sender.send(());

        handle_dropped_receiver.next().await;
    }
}

impl Default for HandleSet {
    fn default() -> Self {
        HandleSet::new()
    }
}

pub struct Handle {
    set_started_receiver: Shared<oneshot::Receiver<()>>,
    set_dropped_receiver: Shared<oneshot::Receiver<()>>,
    _handle_dropped_sender: mpsc::Sender<()>,
}

impl Handle {
    pub fn set_is_started(&self) -> bool {
        self.set_started_receiver.peek().is_some()
    }

    pub async fn on_set_started(&self) {
        let receiver = self.set_started_receiver.clone();
        let _ = receiver.await;
    }

    pub async fn on_set_dropped(&mut self) {
        let receiver = self.set_dropped_receiver.clone();
        let _ = receiver.await;
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::utils::futures::AsyncRuntimeExt;
    use futures::executor::block_on;
    use tokio;

    #[test]
    fn on_all_handles_dropped() -> Result<(), failure::Error> {
        let mut rt = tokio::runtime::Runtime::new()?;
        let set = HandleSet::new();

        let handle = set.get_handle();

        let (sender, receiver) = oneshot::channel();
        rt.spawn_async(async move {
            set.on_handles_dropped().await;
            let _ = sender.send(());
        });

        drop(handle);

        let _ = block_on(receiver);

        Ok(())
    }

    #[test]
    fn set_started() -> Result<(), failure::Error> {
        let mut rt = tokio::runtime::Runtime::new()?;
        let set = HandleSet::new();

        let handle = set.get_handle();
        assert!(!handle.set_is_started());

        rt.spawn_async(async move {
            set.on_handles_dropped().await;
        });

        block_on(handle.on_set_started());

        assert!(handle.set_is_started());

        Ok(())
    }

    #[test]
    fn set_dropped() -> Result<(), failure::Error> {
        let set = HandleSet::new();

        let mut handle = set.get_handle();

        drop(set);

        block_on(handle.on_set_dropped());

        Ok(())
    }
}