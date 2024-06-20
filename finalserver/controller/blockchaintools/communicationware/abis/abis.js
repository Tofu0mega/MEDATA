const patient_abi=[
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
						"name": "Race",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "Ethnicity",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "patientaddress",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "patienthistory",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "patientcomplain",
						"type": "bytes32"
					},
					{
						"internalType": "bytes32",
						"name": "doctorassigned",
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
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_Race",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_Ethnicity",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_patientaddress",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_patienthistory",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_patientcomplain",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_doctorassigned",
				"type": "bytes32"
			}
		],
		"name": "SetPatientInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
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
];

module.exports = patient_abi