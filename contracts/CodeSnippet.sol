// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract CodeSnippet {
    struct Developer {
        address developerId;
        string author;
        string code;
    }
    uint developerCount = 0;
    mapping(address=>Developer[]) developer;

    function addCodeSnippet(address _developerId, string memory _author, string memory _code) public {
        developerCount ++;
        developer[_developerId].push(
            Developer(
                _developerId, 
                _author, 
                _code
            )
        );
    }

    function display(address _developerId) public view returns(Developer[] memory){
      require(_developerId == msg.sender, "You don't have access View Code");
      return developer[_developerId];
    }

}
