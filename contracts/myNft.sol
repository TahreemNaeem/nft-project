// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
contract token is ERC721{
    
    constructor() ERC721("TOKEN","TKN"){

    }
    function mint() public payable {
        uint mintIndex = 1;
        _safeMint(msg.sender,mintIndex);
       // _setTokenURI(mintIndex,_uri);
    }

}