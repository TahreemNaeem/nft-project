// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TOKEN is ERC20 {
    constructor(uint256 initialSupply) ERC20("BEP20Test", "BPT") {
        _mint(msg.sender, initialSupply);
    }
}