// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../helpers/ERC20.sol";
import "../helpers/ERC20Burnable.sol";
import "../helpers/ERC20Decimals.sol";
import "../helpers/ERC20Mintable.sol";
import "../helpers/TokenRecover.sol";
import "../helpers/TokenHelper.sol";

contract BaseToken_U is ERC20Decimals, ERC20Mintable, ERC20Burnable, TokenRecover, TokenHelper {
    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initial
    )
        ERC20(_name, _symbol)
        ERC20Decimals(_decimals)
        TokenHelper("BaseToken_U")
    {
        _mint(_msgSender(), _initial);
    }

    function decimals() public view virtual override(ERC20, ERC20Decimals) returns (uint8) {
        return super.decimals();
    }

    function _mint(address account, uint256 amount) internal override onlyOwner {
        super._mint(account, amount);
    }

    function _finishMinting() internal override onlyOwner {
        super._finishMinting();
    }
}