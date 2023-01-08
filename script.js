// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var finalPassword = []

var digitLength = getPasswordOptions()

// Function to prompt user for password options

function getPasswordOptions() {
  x = prompt("choose a length for your password between 10-64")
  x = parseInt(x);

  if (x >= 10 && x <= 64) {

    alert(x + " has been selected for the length");
  } else {

    alert("Error: please enter a number between 10-64.");
  } 
  return x
}


// Funtion that adds upper case letters into the var finalPassword

function chooseUpper() {
  var upperLetter = confirm("would you like uppercase letters in your password?");
  if (upperLetter == true) {
    finalPassword.push(...upperCasedCharacters);
    alert("Uppercase letters will be added to the password");
  } else {
    alert("uppercase letters will not be added");
  }
  return upperLetter
}


// Funtion that adds lower case letters into the var finalPassword

function chooseLower() {
  var lowerLetter = confirm("would you like lowercase letters in your password?");
  if (lowerLetter == true) {
    finalPassword.push(...lowerCasedCharacters);
    alert("Lowercase letters will be added to the password");
  } else {
    alert("lowercase letters will not be added");
  }
  return lowerLetter
}


// Funtion that adds lower case letters into the var finalPassword

function chooseSpecial() {
  var specialLetter = confirm("would you like Special characters in your password?");
  if (specialLetter == true) {
    finalPassword.push(...specialCharacters);
    alert("Special characters will be added to the password");
  } else {
    alert("Special characters will not be added");
  }
  return specialLetter
}

// Funtion that adds number letters into the var finalPassword

function chooseNumber() {
  var numberChar = confirm("would you like numbers in your password?");
  if (numberChar == true) {
    finalPassword.push(...numericCharacters);
    alert("Numbers will be added to the password");
  } else {
    alert("Numbers will not be added");
  }
  return numberChar
}

//function to shuffle the array

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


var upper 

var lower 

var special

var number 

var userPassword 

// running the script
function generatePassword() {

 upper = chooseUpper();

 lower = chooseLower();

 special = chooseSpecial();

 number = chooseNumber();

shuffle(finalPassword);

getRandom(finalPassword);

 userPassword = pendingPassword(digitLength);

checkParameters(upper, upperCasedCharacters);

checkParameters(lower, lowerCasedCharacters);

checkParameters(special, specialCharacters);

checkParameters(number, numericCharacters);

return userPassword;
}


// make the array print to the length of the selected code using a random number generator

// Function for getting a random element from an array
function getRandom(arr) {
  x = arr[Math.floor(Math.random() * arr.length)];
  return x
}

// using the above function x amount of times depending on what the user has selected
// Function to generate password with user input

function pendingPassword(n) {
  var userPassword = [];
  for (let i = 0; i < n; i++) {
  y = getRandom(finalPassword);
   userPassword.push(y);  
  }
 console.log(userPassword.join(""))
 return userPassword
}

function checkParameters(check, characters) {
 
  if (check == true) {
    for (let i = 0; i < characters.length; i++) { 
      if (userPassword.includes(characters[i] == false)){
        return pendingPassword(digitLength)
      } 
    }
  }
}





// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);