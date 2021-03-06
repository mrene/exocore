#![allow(non_camel_case_types)]

use std::path::PathBuf;
use std::str::FromStr;
use structopt::StructOpt;

#[derive(StructOpt)]
#[structopt(name = "exocore-cli", about = "Exocore Command Line Interface")]
pub struct ExoOptions {
    #[structopt(long, short, default_value = "info")]
    /// Logging level (off, error, warn, info, debug, trace)
    pub logging_level: String,
    #[structopt(subcommand)]
    pub subcommand: SubCommand,
}

#[derive(StructOpt)]
pub enum SubCommand {
    server(ServerOptions),
    keys(KeysOptions),
    cell(CellOptions),
    config(ConfigOptions),
}

#[derive(StructOpt)]
pub struct ServerOptions {
    #[structopt(long, short = "c", default_value = "config.yaml")]
    pub config: PathBuf,
    #[structopt(subcommand)]
    pub command: ServerCommand,
}

#[derive(StructOpt)]
pub enum ServerCommand {
    start,
}

/// Keys related options
#[derive(StructOpt)]
pub struct KeysOptions {
    #[structopt(long, default_value = "ed25519")]
    /// Algorithm of the keypair to generate (ed25519, rsa)
    pub algorithm: KeyAlgorithm,
    #[structopt(subcommand)]
    pub command: KeysCommand,
}

#[derive(StructOpt)]
pub enum KeysCommand {
    generate,
}

#[derive(StructOpt)]
pub enum KeyAlgorithm {
    Ed25519,
    Rsa,
}

impl FromStr for KeyAlgorithm {
    type Err = anyhow::Error;

    fn from_str(k: &str) -> Result<Self, Self::Err> {
        match k {
            "ed25519" => Ok(KeyAlgorithm::Ed25519),
            _ => Err(anyhow!("Unsupported key type")),
        }
    }
}

/// Cell related options
#[derive(StructOpt)]
pub struct CellOptions {
    /// Path to node configuration.
    #[structopt(long, short = "c", default_value = "config.yaml")]
    pub config: PathBuf,

    #[structopt(long, short)]
    /// Public key of the cell we want to make an action on. If not specified
    /// and the node config only contains 1 cell, this cell will be taken.
    pub public_key: Option<String>,

    #[structopt(subcommand)]
    pub command: CellCommand,
}

#[derive(StructOpt)]
pub enum CellCommand {
    create_genesis_block,
    check_chain,
    export_chain(ChainExportOptions),
    import_chain(ChainImportOptions),
    generate_auth_token(GenerateAuthTokenOptions),
}

#[derive(StructOpt)]
pub struct ChainExportOptions {
    // File in which chain will be exported
    pub file: PathBuf,
}

#[derive(StructOpt)]
pub struct ChainImportOptions {
    // Number of operations per blocks
    #[structopt(long, default_value = "30")]
    pub operations_per_block: usize,

    // Files from which chain will be imported
    pub files: Vec<PathBuf>,
}

#[derive(StructOpt)]
pub struct GenerateAuthTokenOptions {
    // Token expiration duration in days
    #[structopt(long, default_value = "30")]
    pub expiration_days: u16,
}

/// Configs related options
#[derive(StructOpt)]
pub struct ConfigOptions {
    #[structopt(subcommand)]
    pub command: ConfigCommand,
}

#[derive(StructOpt)]
pub enum ConfigCommand {
    /// Validate a configuration
    validate(ValidateOpts),

    /// Convert a configuration to a standalone configuration
    standalone(StandaloneOpts),
}

#[derive(StructOpt)]
pub struct ValidateOpts {
    /// Path to configuration
    pub config: PathBuf,
}

#[derive(StructOpt)]
pub struct StandaloneOpts {
    /// Path to configuration
    pub config: PathBuf,

    #[structopt(default_value = "json")]
    pub format: String,

    #[structopt(long)]
    pub exclude_app_schemas: bool,
}
