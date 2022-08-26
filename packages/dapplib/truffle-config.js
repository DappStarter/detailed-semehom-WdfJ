require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind hole hope clip bridge sure'; 
let testAccounts = [
"0xd8bcb831e574d8c47901d07dd001899697e622616c3a68e05b397937cd697a60",
"0x0c2a5adf40bb67496ad6e45b2ad943a365683607ca69bdd2d08d71a876fa3f93",
"0x33532eb2881c0afd447a86d5ea36aad0964a17d4107a3068df1d947811683d95",
"0x1df050e7cfd855b04de596916bc8514182aa1adf7998c361e8c1095651aed7bb",
"0x86c5f4af318e8e176fabde5bd6c263b9f8515e1024de314f1c2da3c37303b8ae",
"0x96829fd6cb18525c444808eca3653d114f9c4b60736b99370f8491aab3b4d315",
"0x1afa1d39b4e94b2cb4495c571d0139ef06a6eb0ed25f0805a714d88abbafff03",
"0xeb9b630dff1cbcd1a259fd7e69f1af8bafac6bfa2bee5d05e324652cd845bfeb",
"0x4e7c6d5704df3342f43e5b136f17d7b49b53a9d0b4629ccc4458944044f62891",
"0xc2d5b70328985fcb231ad9e8216e7c195b580275c59e6bcd51c9942169dd43ff"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

