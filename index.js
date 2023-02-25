// Assignment Code
var generateBtn = document.querySelector('#generate');
  var specialChar = ["!","@","#","$","%","^","&","*","(",")","{","}",">","<","?","~"];
  var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbChar = ["1","2","3","4","5","6","7","8","9","0"];
  var length = 0;
  var isSpecialChar = false;
  var isLowerChar = false;
  var isUpperChar = false;
  var isNumbChar = false;
  generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
getPrompts();
  return; 
 /*  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //All Characters
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}<>[]';
  //Length
  var passwordLegth = 128;
  var password = '';


  for (var i = 0; i < passwordLegth; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length); 
    password += chars.substring(randomNumber, randomNumber + 1);    alertbox.innerHTML = "New PassWord Copied: <br> " + password;
    }
    document.getElementById("password").value = password;
    */
  
  passwordText.value = password;
}
function getPrompts(){

  getValidateLength();
  //alert(length);
  //alert(typeof length);
   
  isSpecialChar = confirm("Please select if you would like special characters");
  isLowerChar = confirm("Please select if you would like lowercase character");  
  isUpperChar = confirm("Please select if you would like uppercase character");
  isNumbChar = confirm("Please select if you would like number characters"); 
}
 function getValidateLength() {
  var isValid = false;
  length = parseInt(prompt("Please enter the desired password length. Only numberical values 8-128"));

  if(!isNaN(length) && length >= 8 && length <= 128) {
    isValid = true;
 }
 if(isValid==false) {
  getValidateLength();
 }
}
function getSpecialChar() {
  isSpecialChar = confirm("Please select if you would like special characters"); 
}
function getLowerCase() {
  isLowerChar = confirm("Please select if you would like lowercase character");
}
function getUpperCase() {
  isUpperChar = confirm("Please select if you would like uppercase character");
}
function getNumberChar() {
  isNumbChar = confirm("Please select if you would like number characters"); 
}