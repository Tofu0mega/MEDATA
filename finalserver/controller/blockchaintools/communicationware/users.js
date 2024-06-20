const { Web3 } = require('web3');

const { byte32cast, hexToWords, displayuserresult, byte16cast,numerictoint } = require("../conversions/byteconversion.js");

const {patient_abi }=require( "./abis/abis.js");
const web3 = new Web3('http://localhost:7545');

const abi=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_name",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Email",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_PasswordHash",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_AccType",
				"type": "bytes32"
			}
		],
		"name": "EditUserInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "GetUserInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "Username",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Email",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "PasswordHash",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "AccType",
						"type": "bytes32"
					}
				],
				"internalType": "struct Userdetail.Userinfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_name",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Email",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_PasswordHash",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_AccType",
				"type": "bytes32"
			}
		],
		"name": "SetUserInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Contract address (Replace it with your actual deployed contract address)
const address = '0x1302885039eb9Fe742FE18b563DCa498DF3bDc71';
const contract =new web3.eth.Contract(abi, address);


async function addUser(id,name,Email,PasswordHash,acctype) {
    const accounts = await web3.eth.getAccounts();
	
	
	const _name=byte32cast(name)
    const _Email=byte32cast(Email)
    const _PasswordHash=byte32cast(PasswordHash)
    const _acctype=byte32cast(acctype)
	




    // Replace 'John Doe', 30, '123 Main St' with actual data
    contract.methods.SetUserInfo(id,_name,_Email,_PasswordHash,_acctype).send({from: accounts[0],gas: 30000000})
        .then(function(result) {
            console.log('Person added!',result);
        })
        .catch(function(error) {
            console.log('Error adding person:', error);
        });
}





async function getUserbyId(_id){
	const result=await	contract.methods.GetUserInfo(_id).call()
	final=displayuserresult(result)
	return final

}

async function gettotalusers(){
	const result=numerictoint(await contract.methods.totalUsers().call());
	
	return result
}

module.exports={addUser,getUserbyId,gettotalusers}