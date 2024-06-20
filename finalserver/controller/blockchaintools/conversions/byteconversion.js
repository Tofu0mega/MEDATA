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
    console.log(str)
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

function displaypatientresult(result) {
    // console.log(result)
    const _id = result.id.toString();
    const _name = hexToWords(result.patientname.toString());
    const _age = result.age.toString();
    const _ethnicity = hexToWords(result.ethnicity.toString());
    const _race=hexToWords(result.race.toString());
    const _allergies = hexToWords(result.allergies.toString());
    const _history = hexToWords(result.history.toString());
    const _complain = hexToWords(result.complain.toString());
    const _diagnosis = hexToWords(result.diagnosis.toString());
    const _medicine_prescribed = hexToWords(result.medicine_prescribed.toString());
    const _assigneddoctor = hexToWords(result.assigneddoctor.toString());
    const _hospital = hexToWords(result.hospital.toString());
    const _notes = hexToWords(result.notes.toString());
    const _imageurl=hexToWords(result.imageurl.toString());
    const _Checkedin=hexToWords(result.Checkedin.toString());

    return {
        _id,
        _name,
        _age,
        _ethnicity,
        _race,        
        _allergies,
        _history,
        _complain,
        _diagnosis,
        _medicine_prescribed,
        _assigneddoctor,
        _hospital,
        _notes,
        _imageurl,
        _Checkedin
    };
}

function displayuserresult(result) {
   
    const _id = result.id.toString();
    const _name = hexToWords(result.Username.toString());
   const _email=hexToWords(result.Email.toString());
   const _passwordhash=hexToWords(result.PasswordHash.toString());
   const _acctype=hexToWords(result.AccType.toString());
    return {
        _id,
        _name,
       _email,
       _passwordhash,
       _acctype,
    };
}
function displayHospitalresult(result) {
    const _id = result.id.toString();
    const _name = hexToWords(result.Hospitalname.toString());
    const   _address=hexToWords(result.Hospitaladdress.toString()) 
    const _hospitaltag=hexToWords(result.Hospitaltag.toString())
    return {
        _id,
        _name,
       _address,
       _hospitaltag
    };
}
function numerictoint(data){
    
    const newint=Number(data)
    return newint
}

//Exporting the functions
module.exports= { byte32cast, hexToWords, displaypatientresult, byte16cast,displayuserresult,displayHospitalresult,numerictoint};
