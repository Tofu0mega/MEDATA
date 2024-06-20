const { Web3 } = require('web3');

const { byte32cast, hexToWords, displayHospitalresult, byte16cast ,numerictoint} = require("../conversions/byteconversion.js");




const {hospital_abi }=require( "./abis/abis.js");
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
				"name": "_Hospitaladdress",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Hospitaltag",
				"type": "bytes32"
			}
		],
		"name": "EditHospitalInfo",
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
		"name": "GetHospitalInfo",
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
						"name": "Hospitalname",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Hospitaladdress",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Hospitaltag",
						"type": "bytes32"
					}
				],
				"internalType": "struct Hospitaldetail.Hospitalinfo",
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
				"name": "_Hospitaladdress",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Hospitaltag",
				"type": "bytes32"
			}
		],
		"name": "SetHospitalInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalHospitals",
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
const address = '0x6D10a0aFaB34f1cB796C78C0273adE0305e5D760';
const contract =new web3.eth.Contract(abi, address);


async function addHospital(id,name,Hospitaladdress,Hospitaltag) {
    const accounts = await web3.eth.getAccounts();
	
	
	const _name=byte32cast(name)
	const _address=byte32cast(Hospitaladdress)
	const _hospitaltag=byte32cast(Hospitaltag)
	
 
	
	




    // Replace 'John Doe', 30, '123 Main St' with actual data
    contract.methods.SetHospitalInfo(id,_name,_address,_hospitaltag).send({from: accounts[0],gas: 30000000})
        .then(function(result) {
            console.log('Person added!',result);
        })
        .catch(function(error) {
            console.log('Error adding person:', error);
        });
}




async function getHospitalbyid(_id) {
    const result = await contract.methods.GetHospitalInfo(_id).call();
    const final = displayHospitalresult(result);
   
    return final;
}

async function gettotalhospitals(){
	const result=numerictoint(await contract.methods.totalHospitals().call());
	
	return result
}


module.exports={getHospitalbyid,addHospital,gettotalhospitals}