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

const generateBtn = document.querySelector('#generate'); // This targets the button with an ID of "generate"

const passwordText = document.querySelector('#password'); // This is linked to the element where the generated password will display


// Function to prompt user for password options
function getPasswordOptions() {
  let lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
let uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
let num = confirm("Do you want your password to contain numbers?");
let specialChar = confirm("Do you want your password to contain special characters?");
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  // Prompt user for password options
let passwordLength = prompt("Choose a password length of at least 10 characters and no more than 64 characters.");
}

// Get references to the #generate element
generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Prevent the screen from refreshing when whe button is clicked
event.preventDefault();

// Clear previous password from screen
password.value === "";
var randomString = "";

// Prompt user for character types
let lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
let uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
let num = confirm("Do you want your password to contain numbers?");
let specialChar = confirm("Do you want your password to contain special characters?");

// Check if password length is within the specified range
while (passwordLength < 10 || passwordLength > 64) {
  alert("Your password is not between 10 characters and 64 characters. Please try again.");
  passwordLength = prompt("Choose a password length of at least 10 characters and no more than 64 characters.");
  }

  // Check that at least one character type is selected
while (!lowercaseLett && !uppercaseLett && !num && !specialChar) {
  alert("You must select at least one character type for your password.");
  lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  num = confirm("Do you want your password to contain numbers?");
  specialChar = confirm("Do you want your password to contain special characters?");
  }

  // Generate the password
let password = "";
let optionsVariable = "";

if (lowercaseLett) {
optionsVariable += lowerCasedCharacters;
}

if (uppercaseLett) {
optionsVariable += upperCasedCharacters;
}

if (num) {
optionsVariable += numericCharacters;
}

if (specialChar) {
optionsVariable += specialCharacters;
}

for (let i = 0; i < passwordLength; i++) {
password += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
}

return password;
