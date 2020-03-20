#[derive(Debug, Fail)]
pub enum Error {
    #[fail(display = "Configuration IO error: {}", _0)]
    ConfigIO(std::io::Error),

    #[fail(display = "Configuration deserialization error: {}", _0)]
    ConfigDeserialization(serde_yaml::Error),

    #[fail(display = "Configuration error: {}", _0)]
    Config(String),

    #[fail(display = "Key error: {}", _0)]
    Key(crate::crypto::keys::Error),

    #[fail(display = "{}", _0)]
    Other(String),
}