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
// Write password to the #password input. Button activated on click, calls final password.
function writePassword() {
  getPrompts();
var  choiceArr = buildChoiceArr();

if (choiceArr.length === 0) {
  alert("You must choose 1 text field, lets begin again");
  length = 0;
  writePassword();
};
var  password = buildPassword(choiceArr);
alert(password);
document.getElementById("password").value = password;
}
//Final password building
function buildPassword(completeArr) {
  var passwordFinal = '';
  for (var i = 0; i < length; i++) {
   passwordFinal += completeArr[Math.floor(Math.random() * completeArr.length)];
  };

  return passwordFinal;
};
//Builds character base for passwords final
function buildChoiceArr() {
  var charPoolr = [];
  if (isSpecialChar) {
    charPoolr = charPoolr.concat(specialChar);
  };
  if (isLowerChar) {
    charPoolr = charPoolr.concat(lowerChar);
  };
  if (isUpperChar) {
    charPoolr = charPoolr.concat(upperChar);
  };
  if (isNumbChar) {
    charPoolr = charPoolr.concat(numbChar);
  };
  //alert(charPoolr);
  return charPoolr;
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
//Validation of string and values length
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