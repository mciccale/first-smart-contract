// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.3;

contract Greeting {
    uint256 greetings;

    function greet () public {
        greetings += 1;
    }

    function getGreetings () public view returns(uint256) {
        return greetings;
    }
}
