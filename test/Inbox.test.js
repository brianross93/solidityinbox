// contract test code will go here
const assert = require('assert');
const ganache = require("'ganache-cli");
//constructor function
const Web3 = require('web3');
//the instance to use
const web3 = new Web3(ganache.provider());

