//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyNFT.sol";

contract newuser {

    uint256 private tokenId=0;

    address private contract_owner;
    uint256 private contract_balance;

    // request status
    enum reqStatus {Default,approved}
    
    struct property 
	{
		uint id;
        string prop_area;
		uint prop_house_no;
		string prop_landamark;
        string prop_city;
        string prop_state;
		uint prop_price;
		string prop_document;
        string prop_surveyno;
        string adharNo;
        reqStatus requestStatus;
	}

    event mint_property(uint id,
        string prop_area,
		uint prop_house_no,
		string prop_landamark,
        string prop_city,
        string prop_state,
		uint prop_price,
		string prop_document,
        string prop_surveyno,
        string adharNo);

    event transferProperty(uint id, address from, address to);

    MyNFT public nft;

    // creating userdetails mapping
    mapping(address => MyNFT) private userDetials;

    // creating array of properties
   mapping(uint256 => property) private properties;
    
    // checks whether perticular user has account or not
    mapping(address => uint) private isUserExist;

    //mapping of owners to the properties
	mapping(uint256 => address) private owners;

    // approving properties to perticular address
    mapping(uint256 => address) private property_approved;

    constructor() {
        contract_owner=msg.sender;
        nft = new MyNFT("REALDAPP","RD");
    }

    function connectMetamask(address from) public view returns(bool){
        if(isUserExist[from]==1){
            return true;
        }else {
            return false;
        }
    }

    function createUser() public returns(bool){
        if(isUserExist[msg.sender]==0){
             isUserExist[msg.sender]=1;
            return true;
        }else {
            return false;
        }
    }
    
    function getNftContract() public view returns(MyNFT) {
        return nft;
    }

    function createProperty(uint _house_no, string memory _area, string memory _landmark, string memory _city, string memory _state, uint _price, string memory _document,string memory _adharNo,string memory _prop_surveyno) public returns(uint){
        require(isUserExist[msg.sender]==1);
        tokenId++;
        nft.mintNFT(msg.sender, tokenId);
        properties[tokenId]=property(tokenId, _area, _house_no, _landmark, _city ,_state , _price, _document,  _prop_surveyno, _adharNo, reqStatus.Default);
        owners[tokenId]=msg.sender;
        emit mint_property(tokenId, _area, _house_no, _landmark, _city ,_state , _price, _document, _prop_surveyno, _adharNo);
        return (tokenId-1);
    }

    function sellProperty(address from, address to, uint256 id) public  returns(bool){
        require(isUserExist[to]==1);
        require(isUserExist[from]==1);
        require(owners[id]==msg.sender);
        properties[id].requestStatus=reqStatus.approved;
        property_approved[id]=to;
        return true;
    }

    function rejectApprovedProperty(uint id) public returns(bool){
        require(owners[id]==msg.sender);
        properties[id].requestStatus=reqStatus.Default;
        property_approved[id]=address(0);
        return true;
    }

    function buyProperty(address payable receiver,uint256 id) payable public returns(bool){
        require(isUserExist[receiver]==1);
        require(isUserExist[msg.sender]==1);
        require(property_approved[id]==msg.sender);
        require(properties[id].requestStatus==reqStatus.approved);
        nft.transfer(receiver, msg.sender, id);
        owners[id]=msg.sender;
        emit transferProperty(id, receiver, msg.sender);
        contract_balance+=msg.value;
        receiver.transfer((msg.value)*95/100);
        properties[id].requestStatus=reqStatus.Default;
        property_approved[id]=address(0);
        return true;
    }

    function getUserProperties(address from) public view returns(property[] memory){
        require(isUserExist[from]==1);
        property[] memory props = new property[](tokenId);
        uint256 Id=0;
        uint256  c=0;
        for(Id=1; Id<=tokenId; Id++){
            if(owners[Id]==from){
                props[c]=properties[Id];
                c++;
            }
        }
        return props;
    }

    function getAllProperties() public view returns(property[] memory) {
        property[] memory props = new property[](tokenId+1);
        uint256 c=0;
        for(uint Id=1; Id<=tokenId; Id++)
        {
            props[c]=properties[Id];
            c++;
        }
        return props;
    }

    function updateProperty(uint id, uint _price) public returns(bool){
        require(isUserExist[msg.sender]==1);
        require(owners[id]==msg.sender);
        properties[id].prop_price = _price;
        return true;
    }

    function getBalance(address _user) public view returns(uint) {
        if(isUserExist[_user]==1) {
            return nft.balanceOf(_user);
        }else {
            return 0;
        }
        
    }

    function getBalanceOfContract() public view returns(uint) {
        return contract_balance;
    }

    function transferBalance(address payable to) public returns(bool){
        require(contract_owner==msg.sender);
        to.transfer((contract_balance)/100);
        return true;
    }
}