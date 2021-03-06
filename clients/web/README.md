# Web client

## Dependencies
* Install Rust's WASM target
    * `rustup target add wasm32-unknown-unknown`
    
* Install Clang
    * On Ubuntu: 
        * `apt install clang`
    * On MacOS: 
        * Unfortunately, clang installed by Xcode isn't recent enough to compile to WASM. Follow instructions on 
          [this page](https://00f.net/2019/04/07/compiling-to-webassembly-with-llvm-and-clang/)
          to install LLVM 9 from HomeBrew.
            * `brew install llvm`
            * Use LLVM from HomeBrew:
                * Bash `export PATH=/usr/local/opt/llvm/bin:$PATH`
                * Fish `set -g fish_user_paths "/usr/local/opt/llvm/bin" $fish_user_paths`

* Install Node & Yarn
    * [Install Node](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)
    * Install yarn: `npm install -g yarn`

## Building
* Build:
    * `./tools/build.sh`

* Launch the [sample project](../../examples/web):
    * `cd ../../examples/web && yarn install && yarn start`
    * Navigate to [http://localhost:8080](http://localhost:8080)

* Generate a node configuration and copy it to the app:

  `exo config standalone path/to/web/node/config.yaml --exclude-app-schemas json`


## Known issues
* Connection can only be via localhost or https since WebCrypto used in libp2p's secio implementation only works over secure code.
  * See https://stackoverflow.com/questions/46670556/how-to-enable-crypto-subtle-for-unsecure-origins-in-chrome and
        https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto
