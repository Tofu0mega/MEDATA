const { Web3 } = require('web3');

const { byte32cast, hexToWords, displaypatientresult, byte16cast,numerictoint } = require("../conversions/byteconversion.js");





const {patient_abi }=require( "./abis/abis.js");
const web3 = new Web3('http://localhost:7545');

const abi=[
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "patientname",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "ethnicity",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "race",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "allergies",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "history",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "complain",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "diagnosis",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "medicine_prescribed",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "assigneddoctor",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "hospital",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "notes",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "imageurl",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Checkedin",
						"type": "bytes32"
					}
				],
				"internalType": "struct patientdetail.PatientData",
				"name": "data",
				"type": "tuple"
			}
		],
		"name": "EditPatientInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "patientname",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "ethnicity",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "race",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "allergies",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "history",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "complain",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "diagnosis",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "medicine_prescribed",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "assigneddoctor",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "hospital",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "notes",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "imageurl",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Checkedin",
						"type": "bytes32"
					}
				],
				"internalType": "struct patientdetail.PatientData",
				"name": "data",
				"type": "tuple"
			}
		],
		"name": "SetPatientInfo",
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
		"name": "GetPatientInfo",
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
						"name": "patientname",
						"type": "bytes32"
					},
					{
						"internalType": "uint256",
						"name": "age",
						"type": "uint256"
					},
					{
						"internalType": "bytes32",
						"name": "ethnicity",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "race",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "allergies",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "history",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "complain",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "diagnosis",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "medicine_prescribed",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "assigneddoctor",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "hospital",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "notes",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "imageurl",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Checkedin",
						"type": "bytes32"
					}
				],
				"internalType": "struct patientdetail.patientinfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalpatients",
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
const address = '0xfA2d201B677a8F1Ad1Cee6A26935C68cedc39cf0';
const contract =new web3.eth.Contract(abi, address);


async function addRecord(patientObj) {
	
	const accounts = await web3.eth.getAccounts();
	
	const newPatient = {
		id: parseInt(patientObj.id),
		patientname: byte32cast(patientObj.name),
		age: parseInt(patientObj.age),
		ethnicity: byte32cast(patientObj.ethnicity),
		race:byte32cast(patientObj.race),
		allergies: byte32cast(patientObj.allergies),
		history: byte32cast(patientObj.historys),
		complain: byte32cast(patientObj.complain),
		diagnosis: byte32cast(patientObj.diagnosis),
		medicine_prescribed: byte32cast(patientObj.medicine),
		assigneddoctor: byte32cast(patientObj.assignedDoctor),
		hospital: byte32cast(patientObj.hospital),
		notes: byte32cast(patientObj.additionalNotes),
		imageurl : byte32cast(patientObj.imageurl),
		Checkedin: byte32cast(patientObj.Checkedin)
	};
	// console.log(newPatient)
	

	
	




    // Replace 'John Doe', 30, '123 Main St' with actual data
    contract.methods.SetPatientInfo(newPatient).send({from: accounts[0],gas: 30000000})
        .then(function(result) {
            console.log('Person added!');
        })
        .catch(function(error) {
            console.log('Error adding person:', error);
        });
}




async function getrecordbyid(_id) {
    const result = await  contract.methods.GetPatientInfo(_id).call();
    const final = displaypatientresult(result);
   
    return final;
}

async function gettotalpatients(){
	const result= numerictoint(await contract.methods.totalpatients().call());
	return result
}

async function uploadImage(banner) {
    try {
        const result = await cloudinary.v2.uploader.upload(banner, {
            folder: 'MEDATA/UserReports',
        });
        return result.secure_url;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to upload image');
    }
}




module.exports={getrecordbyid,addRecord,gettotalpatients}