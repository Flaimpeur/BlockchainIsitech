// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Wedding {
    string public greeting = "Congratulations on your wedding!";

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
