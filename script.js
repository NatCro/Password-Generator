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

function chooseUpper(upperLetter) {
  var upperLetter = confirm("would you like uppercase letters in your password?");
  if (upperLetter == true) {
    finalPassword.push(...upperCasedCharacters);
    alert("Uppercase letters will be added to the password");
  } else {
    alert("uppercase letters will not be added");
  }
}


// Funtion that adds lower case letters into the var finalPassword

function chooseLower(lowerLetter) {
  var lowerLetter = confirm("would you like lowercase letters in your password?");
  if (lowerLetter == true) {
    finalPassword.push(...lowerCasedCharacters);
    alert("Lowercase letters will be added to the password");
  } else {
    alert("lowercase letters will not be added");
  }
}


// Funtion that adds lower case letters into the var finalPassword

function chooseSpecial(specialLetter) {
  var specialLetter = confirm("would you like Special characters in your password?");
  if (specialLetter == true) {
    finalPassword.push(...specialCharacters);
    alert("Special characters will be added to the password");
  } else {
    alert("Special characters will not be added");
  }
}

// Funtion that adds number letters into the var finalPassword

function chooseNumber(numberChar) {
  var numberChar = confirm("would you like numbers in your password?");
  if (numberChar == true) {
    finalPassword.push(...numericCharacters);
    alert("Numbers will be added to the password");
  } else {
    alert("Numbers will not be added");
  }
}

//function to shuffle the array

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}


chooseUpper()

chooseLower()

chooseSpecial()

chooseNumber()

shuffle(finalPassword)

console.log(finalPassword)

console.log(digitLength)

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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