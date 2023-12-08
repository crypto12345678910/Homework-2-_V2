const TestChainlink = artifacts.require("TestChainlink");
module.exports = async(deployer, network, accounts) => {
    await deployer.deploy(TestChainlink, "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e");
    const testchainlink = await TestChainlink.deployed();
    console.log("Deployed wallet is @: " + testchainlink.address);
}

const { BN, constants, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');
const { web3 } = require('@openzeppelin/test-helpers/src/setup');
const { ZERO_ADDRESS } = constants;
const { expect } = require('chai');
const Collector = artifacts.require('TestChainlink');
const fromWei = (x) => web3.utils.fromWei(x.toString());
const toWei = (x) => web3.utils.toWei(x.toString());
const fromWei8Dec = (x) => x / Math.pow(10, 8);
const toWei8Dec = (x) => x * Math.pow(10, 8);
const fromWei2Dec = (x) => x / Math.pow(10, 2);
const toWei2Dec = (x) => x * Math.pow(10, 2);

contract ('TestChainlink test', function (accounts) {
    const [ deployer, firstAccount, secondAccount, fake0wner ] = accounts;
    it('retrieve deployed contracts', async function () {
        testchainlinkContract = await TestChainlink.deployed();
        expect(testchainlinkContract.address).to.be.not.equal(ZERO_ADDRESS);
        expect(testchainlinkContract.address).to.match(/0x[0-9a-fA-F]{40}/);
        console.log(await testchainlinkContract.oracleEthUsdPrice())
    });

    it('get price feed', async function () {
        console.log("1 ETH = " + fromWei8Dec(await testchainlinkContract.getLatestPrice()) + " USD")
       })
});