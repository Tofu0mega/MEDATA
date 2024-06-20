// SPDX-LICENSE-iDENTIFIER: gpl-3.0

// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Userdetail {
    struct Userinfo{
        uint id;
        bytes32 Username;
        
        bytes32 Email;
        bytes32 PasswordHash;
        bytes32 AccType;
        



    }
    Userinfo nullinfo;
    mapping(uint256 => Userinfo) internal Users;
    mapping(uint256 => Userinfo) internal returnUsers;
    uint256 public totalUsers;
    
    

    

    function SetUserInfo(uint _id,bytes32 _name,bytes32 _Email, bytes32 _PasswordHash,bytes32 _AccType) public {
        Users[totalUsers]= Userinfo(_id,_name,_Email,_PasswordHash,_AccType);
        totalUsers++;
        



    }

    function GetUserInfo(uint _id) public view returns(Userinfo memory){
        for (uint i = 0; i < totalUsers; i++) {
            if (Users[i].id==_id){
                return Users[i];
            }else {
                return nullinfo;
                
            }
            
        }
        
    }

    function EditUserInfo(uint _id,bytes32 _name,bytes32 _Email, bytes32 _PasswordHash,bytes32 _AccType) public {
        for (uint i = 0; i < totalUsers; i++) {
            if (Users[i].id==_id){
                Users[i]= Userinfo(_id,_name,_Email,_PasswordHash,_AccType);
            }
        }
            return;
    }

}