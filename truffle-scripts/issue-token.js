const TokenFarm = artifacts.require("TokenFarm");

module.exports = async callback => {
    const tokenFarm = await TokenFarm.deployed();
    await tokenFarm.issueToken();
    console.info("Tokens issued");
    callback();
};
