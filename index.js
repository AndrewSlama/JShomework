// Assignment Code
var generateBtn = document.querySelector('#generate');
  var specialChar = ["! ","@","#","$","%","^","&","*","(",")","{","}",">","<","?","~"];
  var letterChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbChar = ["1","2","3","4","5","6","7","8","9","0"];

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
  var length = prompt("Please enter the desired password length. Only numberical values 8-128");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


