pragma solidity ^0.8.0;

contract TokenHelper {
    string public tokenName;

    constructor(string memory _tokenName) {
        tokenName = _tokenName;
    }

    function getTokenName() public view returns (string memory) {
        return tokenName;
    }
}
