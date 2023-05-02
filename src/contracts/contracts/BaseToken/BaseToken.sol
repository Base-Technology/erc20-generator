// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../helpers/ERC20.sol";
import "../helpers/ERC20Capped.sol";
import "../helpers/ERC20Burnable.sol";
import "../helpers/ERC20Decimals.sol";
import "../helpers/ERC20Mintable.sol";
import "../helpers/ERC20Ownable.sol";
import "../helpers/TokenRecover.sol";
import "../helpers/TokenHelper.sol";

contract BaseToken is
    ERC20Decimals,
    ERC20Capped,
    ERC20Mintable,
    ERC20Burnable,
    ERC20Ownable,
    TokenRecover,
    TokenHelper
{
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _cap,
        uint256 _initial
    )
        ERC20(_name, _symbol)
        ERC20Decimals(_decimals)
        ERC20Capped(_cap)
        TokenHelper("BaseToken")
    {
        require(_initial <= _cap, "ERC20Capped: cap exceeded");
        ERC20._mint(_msgSender(), _initial);
    }

    function decimals() public view virtual override(ERC20, ERC20Decimals) returns (uint8) {
        return super.decimals();
    }

    function _mint(address account, uint256 amount) internal override(ERC20, ERC20Capped) onlyOwner {
        super._mint(account, amount);
    }

    function _finishMinting() internal override onlyOwner {
        super._finishMinting();
    }
}