const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_area",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "prop_house_no",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_landamark",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_city",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_state",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "prop_price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_document",
				"type": "string"
			}
		],
		"name": "mint_property",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "transferProperty",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "buyProperty",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "connectMetamask",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_house_no",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_area",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_landmark",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_state",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_document",
				"type": "string"
			}
		],
		"name": "createProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProperties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_area",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "prop_house_no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_landamark",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prop_city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prop_state",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "prop_price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_document",
						"type": "string"
					},
					{
						"internalType": "enum newuser.reqStatus",
						"name": "requestStatus",
						"type": "uint8"
					}
				],
				"internalType": "struct newuser.property[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBalanceOfContract",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNftContract",
		"outputs": [
			{
				"internalType": "contract MyNFT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "getUserProperties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_area",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "prop_house_no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_landamark",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prop_city",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "prop_state",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "prop_price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "prop_document",
						"type": "string"
					},
					{
						"internalType": "enum newuser.reqStatus",
						"name": "requestStatus",
						"type": "uint8"
					}
				],
				"internalType": "struct newuser.property[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nft",
		"outputs": [
			{
				"internalType": "contract MyNFT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "rejectApprovedProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "sellProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "to",
				"type": "address"
			}
		],
		"name": "transferBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_house_no",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_landmark",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_document",
				"type": "string"
			}
		],
		"name": "updateProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const address = '0x73a01d1badE9e21673Bd50eB90013e7A20049eB6';

export {
    abi,
    address
};