// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract patientdetail {
    struct patientinfo {
        uint id;
        bytes32 patientname;
        uint age;
        bytes32 ethnicity;
        bytes32 race;
        bytes32 allergies;
        bytes32 history;
        bytes32 complain;
        bytes32 diagnosis;
        bytes32 medicine_prescribed;
        bytes32 assigneddoctor;
        bytes32 hospital;
        bytes32 notes;
        bytes32 imageurl;
        bytes32 Checkedin;
    }

    struct PatientData {
        uint id;
        bytes32 patientname;
        uint age;
        bytes32 ethnicity;
        bytes32 race;
        bytes32 allergies;
        bytes32 history;
        bytes32 complain;
        bytes32 diagnosis;
        bytes32 medicine_prescribed;
        bytes32 assigneddoctor;
        bytes32 hospital;
        bytes32 notes;
        bytes32 imageurl;
        bytes32 Checkedin;
    }

    patientinfo nullinfo;
    mapping(uint256 => patientinfo) internal patients;
    mapping(uint256 => patientinfo) internal returnpatients;
    uint256 public totalpatients;

    function SetPatientInfo(PatientData memory data) public {
        patients[totalpatients] = patientinfo(
            data.id,
            data.patientname,
            data.age,
            data.ethnicity,  
            data.race,         
            data.allergies,
            data.history,
            data.complain,
            data.diagnosis,
            data.medicine_prescribed,
            data.assigneddoctor,
            data.hospital,
            data.notes,
            data.imageurl,
            data.Checkedin
        );
        totalpatients++;
    }

    function GetPatientInfo(uint _id) public view returns(patientinfo memory) {
        for (uint i = 0; i < totalpatients; i++) {
            if (patients[i].id == _id) {
                return patients[i];
            }
        }
        return nullinfo;
    }

    function EditPatientInfo(PatientData memory data) public {
        for (uint i = 0; i < totalpatients; i++) {
            if (patients[i].id == data.id) {
                patients[i] = patientinfo(
                    data.id,
                    data.patientname,
                    data.age,
                    data.ethnicity,
                    data.race,
                    data.allergies,
                    data.history,
                    data.complain,
                    data.diagnosis,
                    data.medicine_prescribed,
                    data.assigneddoctor,
                    data.hospital,
                    data.notes,
                    data.imageurl,
                    data.Checkedin
                );
                return;
            }
        }
    }
}
