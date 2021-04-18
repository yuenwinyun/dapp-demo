pragma solidity ^0.5.0;

import "./DaiToken.sol";
import "./DappToken.sol";

contract TokenFarm {
    string public name = "TokenFarm";
    address public owner;
    DappToken public dappToken;
    DaiToken public daiToken;
    mapping(address => uint) public stackingBalance;
    mapping(address => bool) public hasStacked;
    mapping(address => bool) public isStaking;
    address[] public stakers;

    constructor(DappToken _dappToken, DaiToken _daiToken) public {
        dappToken = _dappToken;
        daiToken = _daiToken;
        owner = msg.sender;
    }

    function stakeTokens(uint _amount) public {
        require(_amount > 0, "amount cannot less than 0");

        daiToken.transferFrom(msg.sender, address(this), _amount);
        stackingBalance[msg.sender] += _amount;
        if (!hasStacked[msg.sender]) {
            stakers.push(msg.sender);
            hasStacked[msg.sender] = true;
            isStaking[msg.sender] = true;
        }
    }

    function issueToken() public {
        require(msg.sender == owner, "caller must be the owner");

        for (uint i = 0; i < stakers.length; i++) {
            address recipient = stakers[i];
            uint balance = stackingBalance[recipient];
            if (balance > 0) {
                dappToken.transfer(recipient, balance);
            }
        }
    }

    function unstakeTokens() public {
        uint balance = stackingBalance[msg.sender];
        require(balance > 0, "stacking balance should more than 0");

        daiToken.transfer(msg.sender, balance);
        stackingBalance[msg.sender] = 0;
        isStaking[msg.sender] = false;
    }
}
