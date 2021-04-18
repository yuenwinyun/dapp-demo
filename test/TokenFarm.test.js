const TokenFarm = artifacts.require("TokenFarm");
const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

require("chai").use(require("chai-as-promised")).should();

function convertToken(n) {
    return web3.utils.toWei(n, "ether");
}

contract("TokenFarm", ([owner, investor]) => {
    let daiToken, dappToken, tokenFarm;

    before(async () => {
        daiToken = await DaiToken.new();
        dappToken = await DappToken.new();
        tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address);

        // transfer tokens to tokenFarm
        await dappToken.transfer(tokenFarm.address, convertToken("100000"));

        // send tokens to investor
        await daiToken.transfer(investor, convertToken("100"), { from: owner });
    });

    describe("test DaiToken", async () => {
        it("DaiToken has a name", async () => {
            const name = await daiToken.name();
            assert.equal(name, "Mock DAI Token");
        });
    });

    describe("test DappToken", async () => {
        it("DappToken has a name", async () => {
            const name = await dappToken.name();
            assert.equal(name, "DApp Token");
        });

        it("contract has tokens", async () => {
            const balance = await dappToken.balanceOf(tokenFarm.address);
            assert.equal(balance.toString(), convertToken("100000"));
        });
    });

    describe("Framing tokens", () => {
        it("investor tokens", async () => {
            let result = await daiToken.balanceOf(investor);
            assert.equal(result.toString(), convertToken("100"));

            await daiToken.approve(tokenFarm.address, convertToken("100"), { from: investor });
            await tokenFarm.stakeTokens(convertToken("100"), { from: investor });

            result = await daiToken.balanceOf(investor);
            assert.equal(result.toString(), convertToken("0"));

            await tokenFarm.issueToken({ from: owner }).should.be.rejected;
        });
    });
});
