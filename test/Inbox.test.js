// contract test code will go here
const assert = require('assert');
const ganache = require("ganache-cli");
//constructor function
const Web3 = require('web3');
//the instance to use
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach(async () => {
    // Get a list of all account 
    //using instance of web3
    accounts = await web3.eth.getAccounts()
       

    // Use one of those accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts)
    });
})






//Basic Mocha template testing code 

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// describe('CarTest',() => {
//     it("Should return stopped", () => {
//         const car = new Car();
//         assert.equal(car.park(), 'stopped')
//     })
// });