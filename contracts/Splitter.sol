pragma solidity ^0.4.18;
import "./Ownable.sol";

contract Splitter is Ownable {
    address public bobAddress;
    address public carolAddress;
    uint aliceContribution;

    function splitFunds(uint _aliceContribution)
    public
    payable
    returns(bool success)
    {
        if (msg.sender != owner || msg.value == 0 || paymentSent()) {
            revert();
        }
        aliceContribution = _aliceContribution;
        uint halfThePot = aliceContribution / 2;
        bobAddress.transfer(halfThePot);
        carolAddress.transfer(halfThePot);
        return true;
    }

    function paymentSent()
    public
    constant
    returns(bool allPaid)
    {
        return (aliceContribution == this.balance);
    }

}
