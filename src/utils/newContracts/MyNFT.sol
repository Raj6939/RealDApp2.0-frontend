//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    // Add a new parameter in the MyNFT constructor and call it when initializing the base classes.
    constructor(string memory name, string memory symbol) ERC721(name, symbol)  Ownable(msg.sender){}

    function mintNFT(address to, uint tokenId) public
    {
        _mint(to, tokenId);
    }

    function transfer(address from,address to, uint256 _tokenId) public{
        super._transfer(from, to, _tokenId);
    }
}