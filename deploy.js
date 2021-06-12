// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'below carbon flee black theory winter bring bonus stove today tribe luggage',
    'https://rinkeby.infura.io/v3/4536950fcada4d6db0541b7dd3e906f2'
);
const web3 = new Web3(provider);