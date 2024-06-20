const { Web3 } = require('web3');


const web3 = new Web3('http://localhost:7545');


const abi =[
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
;

// Contract address (Replace it with your actual deployed contract address)
const address = '0x50B0436758F3fe2CCA71C3777094e4C0DDDb24Ee';


const contract =new web3.eth.Contract(abi, address);

function byte32cast(str) {
    // Create a buffer from the string
    const buffer = Buffer.from(str);

    // If the string length is less than 32 bytes, pad it with zeros
    if (buffer.length < 32) {
        const paddingLength = 32 - buffer.length;
        const paddingBuffer = Buffer.alloc(paddingLength, 0);
        return '0x'+Buffer.concat([buffer, paddingBuffer]).toString('hex');
    } else if (buffer.length > 32) {
        // If the string length is greater than 32 bytes, truncate it
        return '0x'+buffer.slice(0, 32).toString('hex');
    } else {
        // If the string length is already 32 bytes, return the buffer as it is
        return '0x'+buffer.toString('hex');
    }
}
function byte16cast(str) {
    // Create a buffer from the string
    const buffer = Buffer.from(str);

    // If the string length is less than 32 bytes, pad it with zeros
    if (buffer.length < 16) {
        const paddingLength = 16 - buffer.length;
        const paddingBuffer = Buffer.alloc(paddingLength, 0);
        return '0x'+Buffer.concat([buffer, paddingBuffer]).toString('hex');
    } else if (buffer.length > 16) {
        // If the string length is greater than 32 bytes, truncate it
        return '0x'+buffer.slice(0, 16).toString('hex');
    } else {
        // If the string length is already 32 bytes, return the buffer as it is
        return '0x'+buffer.toString('hex');
    }
}

async function addRecord(id,name,age,address,history,complain,doctorassigned) {
    const accounts = await web3.eth.getAccounts();
	
	
	const _name=byte32cast(name)
	const _address=byte32cast(address)
	const _history=byte32cast(history)
	const _complain=byte32cast(complain)
	const _doctorassigned=byte32cast(doctorassigned)
	
	




    // Replace 'John Doe', 30, '123 Main St' with actual data
    contract.methods.SetPatientInfo(id,_name,age,_address,_history,_complain,_doctorassigned).send({from: accounts[0],gas: 30000000})
        .then(function(result) {
            console.log('Person added!',result);
        })
        .catch(function(error) {
            console.log('Error adding person:', error);
        });
}

function hexToWords(hexString) {
    // Remove "0x" prefix if present
    hexString = hexString.replace(/^0x/, '');

    // Split the hex string into pairs of characters
    const hexPairs = hexString.match(/.{1,2}/g) || [];

    // Convert each pair to decimal and then to ASCII characters
    const words = hexPairs.map(hexPair => {
        // Convert pair to decimal
        const decimalValue = parseInt(hexPair, 16);
        // Handle padded zeros
        if (decimalValue === 0) {
            return '';
        }
        // Convert decimal value to ASCII character
        return String.fromCharCode(decimalValue);
    });

    // Join the words together
    return words.join('');
}
function displayresult(result){
	const _id=result.id.toString()
	const _name=hexToWords(result.patientname.toString())
	const _age=result.age.toString()
	const _address=hexToWords(result.patientaddress.toString())
	const _history=hexToWords(result.patienthistory.toString())
	const _complain=hexToWords(result.patientcomplain.toString())
	const _doctorassigned=hexToWords(result.doctorassigned.toString())
	return{
		_id,_name,_age,_address,_history,_complain,_doctorassigned
	}
	
}




// Example usage
//addRecord(7,"Sankalpa",16,"Bhaisaipati","No History","Chest Pain","Dr Sharad");
contract.methods.GetPatientInfo(7).call().then(function(result){
	final=displayresult(result)
	console.log(final)
})

