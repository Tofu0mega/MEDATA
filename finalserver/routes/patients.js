// routes/patient.js

const express = require('express');
const router = express.Router();
const patientController = require('../controller/patients.js');

router.post('/addreport', patientController.addPatientRecord);
router.get('/id/:id', patientController.getPatientRecordById);
router.get('/getrecord', patientController.getallrecords);
// router.get('/doctor/:doctor', patientController.getAllPatientRecordsByDoctor);

module.exports = router;
