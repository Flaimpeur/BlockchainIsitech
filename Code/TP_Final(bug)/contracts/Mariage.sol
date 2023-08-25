// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Wedding {
    string public greeting = "Congratulations on your wedding!";
    string public deleteMe = "delete me asap!";

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}