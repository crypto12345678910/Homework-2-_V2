const TestChainlink = artifacts.require("TestChainlink")

contract ('TestChainlink', function (accounts) {
  const [ deployer, firstAccount, secondAccount, fake0wner ] = accounts;
  it('retrieve deployed contracts', async function () {
      collectorContract = await Collector.deployed();
      expect(collectorContract.address).to.be.not.equal(ZERO_ADDRESS);
      expect(collectorContract.address).to.match(/0x[0-9a-fA-F]{40}/);
      console.log(await collectorContract.oracleEthUsdPrice())
  });

  it('get price feed', async function () {
      console.log("1 ETH = " + fromWei8Dec(await collectorContract.getLatestPrice()) + " USD")
  })
});