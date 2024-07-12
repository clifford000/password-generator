

function generatePassword(passwordLength, includeLowerCase,includeNumbers , includeUpperCase, includeSymbols){
    
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = 1234567890;
    const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

    let allowedChars = '';
    let password = '';

    if (includeLowerCase == true){
        allowedChars+=lowercaseChars
    }

    allowedChars += includeLowerCase ? lowercaseChars : '';
    allowedChars += includeUpperCase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    for(let i = 0; i < passwordLength; i++){
       const randomIndex = Math.floor(Math.random() * allowedChars.length)
       password += allowedChars.charAt(randomIndex)
    }
    console.log(`Generated Password ${password}`);
    document.getElementById("display").innerHTML = password



}


