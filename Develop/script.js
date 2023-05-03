// Assignment Code
var generateBtn = document.querySelector("#generate");

const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=\\"
}; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordCharacterSet = "";
  
  
  function generatePassword() {
    var length = window.confirm("Enter a number from 8 to 128 characters to determine password length")
    var lowercasePassword = window.confirm("Would you like the password to contain lowercase options?")
    var uppserCasePassword = window.confirm("Would you like any uppercase letters in the password?")
    var symbols = window.confirm("Would you like the password to have symbols?")
    var numbers = window.confirm("Woudl you like the password to contain any numbers?")

    if (lowercasePassword) {
    passwordCharacterSet += keys.lowercase;
    }

    if (upperCasePassword) {
      passwordCharacterSet += keys.uppercase;
      }

    if (symbols) {
        passwordCharacterSet += keys.symbol;
       }

    if (numbers) {
        passwordCharacterSet += keys.number;
        }

    for (let i = 0; i < length; i++) {
    password += passwordCharacterSet[Math.floor(Math.random(passwordCharacterSet.length))]
  }
  return password
  passwordText.value = password;
  console.log(generatePassword)
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
