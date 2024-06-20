// SPDX-LICENSE-iDENTIFIER: gpl-3.0

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Hospitaldetail {
    struct Hospitalinfo{
        uint id;
        bytes32 Hospitalname;
       
        bytes32 Hospitaladdress;
        
       
        bytes32 Hospitaltag;


    }
    Hospitalinfo nullinfo;
    mapping(uint256 => Hospitalinfo) internal Hospitals;
    mapping(uint256 => Hospitalinfo) internal returnHospitals;
    uint256 public totalHospitals;
    
    

    

    function SetHospitalInfo(uint _id,bytes32 _name,bytes32 _Hospitaladdress, bytes32 _Hospitaltag) public {
        Hospitals[totalHospitals]= Hospitalinfo(_id,_name,_Hospitaladdress,_Hospitaltag);
        totalHospitals++;
        



    }

    function GetHospitalInfo(uint _id) public view returns(Hospitalinfo memory){
        for (uint i = 0; i < totalHospitals; i++) {
            if (Hospitals[i].id==_id){
                return Hospitals[i];
            }else {
                return nullinfo;
                
            }
            
        }
        
    }

     function EditHospitalInfo(uint _id,bytes32 _name,bytes32 _Hospitaladdress, bytes32 _Hospitaltag) public {
        for (uint i = 0; i < totalHospitals; i++) {
            if (Hospitals[i].id==_id){
                Hospitals[i]= Hospitalinfo(_id,_name,_Hospitaladdress,_Hospitaltag);
           
            
        }
        return;
    }
    }

}