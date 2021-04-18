const TokenFarm = artifacts.require("TokenFarm");
const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(DaiToken);
    const daiToken = await DaiToken.deployed();

    await deployer.deploy(DappToken);
    const dappToken = await DappToken.deployed();

    await deployer.deploy(TokenFarm, dappToken.address, daiToken.address);
    const tokenFarm = await TokenFarm.deployed();

    await dappToken.transfer(tokenFarm.address, "10000000000000000000000");
    await daiToken.transfer(accounts[1], "10000000000000000000000");
};
