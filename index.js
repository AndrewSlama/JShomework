// Assignment Code
var generateBtn = document.querySelector(".alertbox");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //All Characters
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}<>[]';
  //Length
  var passwordLegth = 128;
  var password = '';

  for (password i = 0; i < passwordLegth; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);    alertbox.innerHTML = "New PassWord Copied: <br> " + password;
    }
    document.getElementById("password").value = password;
  }
  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


