pragma solidity ^0.5.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract StandardERC20Token is ERC20, ERC20Detailed {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        address initialHolder,
        uint256 amount
    ) public ERC20Detailed(name, symbol, decimals) {
        _mint(initialHolder, amount);
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
}
