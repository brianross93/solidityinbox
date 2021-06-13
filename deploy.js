// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'below carbon flee black theory winter bring bonus stove today tribe luggage',
    'https://rinkeby.infura.io/v3/4536950fcada4d6db0541b7dd3e906f2'
);
//web3 instance
const web3 = new Web3(provider);

const deploy = async () => {
 
const accounts = await web3.eth.getAccounts();
console.log("Attempting to deploy from account", accounts[0]) 
const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({ data: bytecode, arguments: ["Hi there"] })
.send({gas: '1000000', from: accounts[0]});
console.log('Contract deployed to', result.options.address)

};
deploy();