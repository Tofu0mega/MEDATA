// controllers/user.js

const { addUser, getUserbyId, gettotalusers } = require("./blockchaintools/communicationware/users.js");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt=require('jsonwebtoken')

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

// Function to hash a password
function hashPassword(password, maxLength = 32) {
    const salt = '10'; // Use '10' as the fixed salt value
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    let hashedPassword = hash.digest('hex');

    // Truncate to desired length
    if (hashedPassword.length > maxLength) {
        hashedPassword = hashedPassword.slice(0, maxLength);
    }
    
    return hashedPassword;
}
exports.addUserRecord = async (req, res) => {
    // Number of salt rounds for bcrypt hashing
    
    hashedcode= hashPassword(req.body.password)
    
    try {
        currentusers=await gettotalusers()
        const kid=currentusers+1;
        const User = {
            id:kid,
            name:req.body.firstName+" "+req.body.lastName,
            Email:req.body.email,
            PasswordHash:hashedcode,
            AccountType:req.body.userType


        };
        
        await addUser(User.id, User.name, User.Email, User.PasswordHash, User.AccountType);
        res.status(201).send({ message: 'User record added successfully', id: User.id });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while adding the user record' });
    }
};

exports.getUserRecordById = async (req, res) => {
    try {
        decodedtoken=decodeJWT(req.headers.token)
        console.log(decodedtoken)
        
        
        const record = await getUserbyId(decodedtoken.id);
        console.log(record)
        res.status(200).send(record);
    } catch (error) {
       
        res.status(500).send({ error: 'An error occurred while fetching the user record' });
    }
};

exports.checkLogin = async (req, res) => {
    try {
        console.log(req.body)
        const saltRounds = 10; 
        const Email=req.body.email

        const PasswordHash= hashPassword(req.body.password)
        const loopval = await gettotalusers();
      

        for (let i = 1; i <= loopval; i++) {
            const tempuser = await getUserbyId(i);
           
            if (tempuser._email == Email && tempuser._passwordhash == PasswordHash) {
                const token=jwt.sign({id:tempuser._id,email:tempuser._email,name:tempuser._name,accounttype:tempuser._acctype},"123456789",{expiresIn:'30d'})
                console.log(token)
                return res.status(200).send({ success: true, token: token  });
            }
        }
        res.status(401).send({ success: false});
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: 'An error occurred while checking login' });
    }
};

exports.getUserByName = async (req, res) => {
    try {
        const _name = req.params.name || '';
        const loopval = await gettotalusers();
        const returnobject = [];

        for (let i = 1; i <= loopval; i++) {
            const tempuser = await getUserbyId(i);

            if (tempuser._name.includes(_name)) {
                returnobject.push(tempuser);
            }
        }

        res.status(200).send(returnobject);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while fetching users by name' });
    }
};

