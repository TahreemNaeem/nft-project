/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

 const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
   plugins: ["truffle-plugin-verify"],
   api_keys: {
     bscscan: 'HR2G63K69KZVEZRMZH1F1NIATBG44EZRKM',
     etherscan:'THQMQFXPGHMMUJENQ9PMKQ56WHAI34EG3E',
   },
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },

    // Another network with more advanced options...
    // advanced: {
      // port: 8777,             // Custom port
      // network_id: 1342,       // Custom network
      // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
      // from: <address>,        // Account to send txs from (default: accounts[0])
      // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },
      // Skip dry run before migrations? (default: false

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
       provider: () => new HDWalletProvider("0d658f57c3f2cdbb18b02897290e8e1946c0f39fa845b22be9afeb2639472041", `https://ropsten.infura.io/v3/6b69fb35bd9748e7b274005809b7de87`),
       network_id: 3,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,   // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
 bsc: {
      networkCheckTimeout: 10000,  
      provider: () => new HDWalletProvider("a78c0052b3e80af7fc6d839332638d6f42a38b8e79a96a26a473fc0e909a0dc5", `https://data-seed-prebsc-1-s1.binance.org:8545/`),
      network_id: 97,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true ,
      }, 
  rinkeby: {
    networkCheckTimeout: 100000,  
        provider: function() { 
         return new HDWalletProvider("0d658f57c3f2cdbb18b02897290e8e1946c0f39fa845b22be9afeb2639472041", `wss://rinkeby.infura.io/ws/v3/e55d9ffc7f1840299eb40fb05b3c47a9`);
        },
        timeoutBlocks: 200,
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
  }

    // Useful for private networks
    // private: {
      // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
      // network_id: 2111,   // This network is yours, in the cloud.
      // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
     version: "0.8.16",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
        enabled: false,
         runs: 200
       },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
