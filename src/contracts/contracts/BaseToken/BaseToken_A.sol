// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../helpers/ERC20.sol";
import "../helpers/ERC20Decimals.sol";
import "../helpers/ERC20Ownable.sol";
import "../helpers/TokenRecover.sol";
import "../helpers/TokenHelper.sol";

contract BaseToken_A is
    ERC20,
    ERC20Decimals,
    ERC20Ownable,
    TokenRecover,
    TokenHelper
{
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _cap
    )
        ERC20(_name, _symbol)
        ERC20Decimals(_decimals)
        TokenHelper("BaseToken_A"){
        ERC20._mint(_msgSender(), _cap);
    }

    function Airdrop(address[] calldata _recipients, uint256[] calldata _values) external {
        require(_recipients.length > 0, "need at least one recipient");
        require(
            _recipients.length == _values.length,
            "recipients.len != values.len"
        );
        for (uint256 j = 0; j < _recipients.length; j++) {
            transfer(_recipients[j], _values[j]);
        }
    }

    function decimals() public view virtual override(ERC20, ERC20Decimals) returns (uint8) {
        return super.decimals();
    }
}
