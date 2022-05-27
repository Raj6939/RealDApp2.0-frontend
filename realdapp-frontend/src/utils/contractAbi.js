const abi = [
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
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
			},
			{
				"internalType": "string",
				"name": "_adharNo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_prop_surveyno",
				"type": "string"
			}
		],
		"name": "createProperty",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "prop_surveyno",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "adharNo",
				"type": "string"
			}
		],
		"name": "mint_property",
		"type": "event"
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
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
				"internalType": "uint256",
				"name": "id",
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
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
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
						"internalType": "string",
						"name": "prop_surveyno",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "adharNo",
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
						"internalType": "string",
						"name": "prop_surveyno",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "adharNo",
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
	}
]

const address = '0x7D35fe5d97916226b4dBc7e41B70872E3fE96e4f';

export {
    abi,
    address
};