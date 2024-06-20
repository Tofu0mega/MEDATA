// SPDX-LICENSE-iDENTIFIER: gpl-3.0

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract patientdetail {
    struct patientinfo{
        uint id;
        bytes32 patientname;
        uint age;
        bytes32 Race;
        bytes32 Ethnicity;
        bytes32 patientaddress;
        
        bytes32 patienthistory;
        bytes32 patientcomplain;
        bytes32 doctorassigned;


    }
    patientinfo nullinfo;
    mapping(uint256 => patientinfo) internal patients;
    mapping(uint256 => patientinfo) internal returnpatients;
    uint256 public totalpatients;
    
    

    

    function SetPatientInfo(uint _id,bytes32 _name,uint _age,bytes32 _Race, bytes32 _Ethnicity,bytes32 _patientaddress,bytes32 _patienthistory,bytes32 _patientcomplain, bytes32 _doctorassigned) public {
        patients[totalpatients]= patientinfo(_id,_name,_age,_Race,_Ethnicity,_patientaddress,_patienthistory,_patientcomplain,_doctorassigned);
        totalpatients++;
        



    }

    function GetPatientInfo(uint _id) public view returns(patientinfo memory){
        for (uint i = 0; i < totalpatients; i++) {
            if (patients[i].id==_id){
                return patients[i];
            }else {
                return nullinfo;
                
            }
            
        }
        
    }

     function EditPatientInfo(uint _id,bytes32 _name,uint _age,bytes32 _Race, bytes32 _Ethnicity,bytes32 _patientaddress,bytes32 _patienthistory,bytes32 _patientcomplain, bytes32 _doctorassigned) public {
        for (uint i = 0; i < totalpatients; i++) {
            if (patients[i].id==_id){
                patients[i]= patientinfo(_id,_name,_age,_Race,_Ethnicity,_patientaddress,_patienthistory,_patientcomplain,_doctorassigned);
           
            
        }
        return;
    }
    }

}