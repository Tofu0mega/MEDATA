// controllers/patient.js
const jwt = require('jsonwebtoken');
const { getrecordbyid, addRecord, gettotalpatients } = require("./blockchaintools/communicationware/patients.js");
const { uploadImage } = require("./blockchaintools/communicationware/imguploader.js");

function decodeJWT(token) {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }
  
  const encodedPayload = parts[1];
  const decodedPayload = Buffer.from(encodedPayload, 'base64').toString('utf8');
  const payload = JSON.parse(decodedPayload);
  
  return payload;
}
exports.addPatientRecord = async (req, res) => {
    try {
        console.log(req.headers.image)
        
        var id = await gettotalpatients();
        id = id + 1;
        
        const Record = req.body;
       
        Record.id=id;
        Record.Checkedin= new Date().toISOString();
        Record.imageurl="BlandText"
        // Record.imageurl=await uploadImage(req.headers.image)
        // console.log(Record)
        
       

        await addRecord(Record);
        res.status(201).send({ message: 'Patient record added successfully', id });
    } catch (error) {
        // console.log(error)
        res.status(500).send({ error: 'An error occurred while adding the patient record' });
    }
};

exports.getPatientRecordById = async (req, res) => {
    try {
        const record = await getrecordbyid(req.params.id);
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching the patient record' });
    }
};


exports.getallrecords= async(req,res)=>{
    try {
        decodedtoken=decodeJWT(req.headers.token)
        console.log(decodedtoken)
        if(decodedtoken.accounttype=='citizen'){
            report= await getAllPatientRecords(decodedtoken.name.slice(0,decodedtoken.name.indexOf(' ')))
        }else{
             report=await getAllPatientRecordsByDoctor(decodedtoken.name.slice(0,decodedtoken.name.indexOf(' ')))
        }
        console.log(report)
        res.status(200).send(report)
        


    }catch(error){
        res.status(500).send({ error: 'An error occurred while fetching the patient record' });

    }
}




const getAllPatientRecords = async (name) => {
    try {
        const givenname = name || '';
       
        const loopval = await gettotalpatients();
        const report = [];

        for (let i = 1; i < loopval + 1; i++) {
            const tempobj = await getrecordbyid(i);
            

            if (tempobj._name.includes(givenname)) {
                report.push(tempobj);
            }
        }
        // console.log(report)

        return report;
    } catch (error) {
        console.log(error)
        
    }
};

const getAllPatientRecordsByDoctor = async (name) => {
    try {
        
        const givenname = name || '';
        
        const loopval = await gettotalpatients();
        const returnobject = [];

        for (let i = 1; i < loopval + 2; i++) {
            const tempobj = await getrecordbyid(i);
            
            if (tempobj._assigneddoctor.includes(givenname)) {
                returnobject.push(tempobj);
            }
        }

        return returnobject
    } catch (error) {
       console.log(error)
    }
};
