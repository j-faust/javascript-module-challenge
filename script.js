// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var passwordText = document.querySelector("#password");

  let length = window.prompt('Enter Password Length (8 - 128)');


  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt('Only enter numbers between 8 and 128!');
  }
  
  let typesSelected = false;
  let includeUpperCase = false;
  let includeLowerCase = false;
  let includeNumerics = false;
  let includeSpecials = false;
  
  while (!typesSelected) {
    includeUpperCase = window.confirm(
      'Include Upper Case Characters?\n(OK=Yes, Cancel=No)'
    );
  
    includeLowerCase = window.confirm(
      'Include Lower Case Characters?\n(OK=Yes, Cancel=No)'
    );
  
    includeNumerics = window.confirm(
      'Include Numeric Characters?\n(OK=Yes, Cancel=No)'
    );
  
    includeSpecials = window.confirm(
      'Include Special Characters?\n(OK=Yes, Cancel=No)'
    );
  
    typesSelected =
      includeUpperCase || includeLowerCase || includeNumerics || includeSpecials;
  
    if (typesSelected === false) {
      window.alert('At least one character type must be included.');
    }
  }
  
  let len = Number(length);
  
  // console.log(len);
  // console.log(includeUpperCase);
  // console.log(includeLowerCase);
  // console.log(includeNumerics);
  // console.log(includeSpecials);
  
  let password = generatePassword(len, includeUpperCase, includeLowerCase, includeNumerics, includeSpecials);
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(len, includeUpper, includeLower, includeNumeric, includeSpecial) {

  let sourceCharacters = '';

  if (includeUpper) {
    sourceCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (includeLower) {
    sourceCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  if (includeNumeric) {
    sourceCharacters += '01234567890';
  }

  if (includeSpecial) {
    sourceCharacters += '!"#$%&*+,-./:;<=>?@[\]^_`{|}~';
  }

  let returnPassword = '';
  for (let i = 0; i < len; i++) {

    let sourceLength = sourceCharacters.length;
    let charPos = Math.floor(Math.random() * sourceLength);
    console.log(charPos);
    let newChar = sourceCharacters.substring(charPos, charPos + 1);

    console.log(newChar);

  returnPassword += newChar;

  }

  return returnPassword;

}