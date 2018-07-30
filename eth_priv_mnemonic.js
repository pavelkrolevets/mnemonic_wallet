const bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey')
// install previous version: npm install ethereumjs-wallet@0.6.0


const mnemonic = bip39.generateMnemonic();//generates random 12 words mnemonic phrase
const hard_mnemonic = "barely general market place stumble arena mirror mercy fitness various grab approve";
const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(hard_mnemonic));
const path = "m/44'/60'/0'/0/0";
const wallet = hdwallet.derivePath(path).getWallet();
const pub_key = `0x${wallet.getPublicKey().toString('hex')}`;
const priv_key = `0x${wallet.getPrivateKey().toString('hex')}`;
const address = `0x${wallet.getAddress().toString('hex')}`;

console.log(`Mnemonic: ${mnemonic}`);
console.log(`Public: ${pub_key}`);
console.log(`Private: ${priv_key}`);
console.log(`Address: ${address}`);