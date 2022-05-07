require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note place home heavy enroll off tongue'; 
let testAccounts = [
"0xf7dca51117a2929ed74dab10220f35c3b5b8b7e54c98c18c09e2cd2e7c23d829",
"0xc330199e36bc03b22e9f6181e77e3ad7ef5457d85392e56fae6c16173b5d349c",
"0x9ab953e6260ac5e7504ce6c1ff38b82ef824963c3a4cacc7a54c2eb38eaf167d",
"0xc6566bac6022ee8b6038ca9527cff87325643f8b32826c2c18beadb7c726498f",
"0x865977f3b27def9b2ac62fcfde0308eb25069e93400fb2af49151e9e210de00e",
"0x69d66a098db71ae64bc61d0aac1e9ebe7766dd13e77e29a58ed7783948f88a19",
"0x535f0c8f536cd736a8a7e0e40af6a9b05fcec47d4fcc1ea2083c5abd5b3cf24f",
"0x59db85c89e2b23a699d0bfbbb15970d82364d9692fe14b15b5567bdb7c4a39e5",
"0x7ed00594706d35688acfa89cd105ce6bcf926fa21462748d4902f956fad4ae7f",
"0x517549ffbe5fa5f1c25e4a298e681a54c9c18309c7642ffd76964b460e355745"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

