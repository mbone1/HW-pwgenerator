// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() { //predefined function to write the password
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
    var special = "!@#$%^&*()_+"; //created a variable for possible symbols to include in password
    var numbers = "0123456789"; //creates a variable of possible number combinations
    var lowercase = "abcdefghijklmnopqrstuvwxyz"; //creates a variable to list all letters in lowercase
    var uppercase = lowercase.toUpperCase(); //creates a variable for uppercase letters, takes all of the lowercase letters from lowerCase var, and converts them to upper case
    var options = {}; //creates an empty object called options, this will later be populated with user choices
    options.length = parseInt( //prompts user for length of password, stores it in options object, parse int converts into integer
        prompt("How long would you like your password to be?") //user prompt for length of password
    );
    if (options.length < 8 || options.length > 128 || isNaN(options.length)) { //if user enters less than 8, more than 128, or doesn't enter a number
        alert("Incorrect Password Length, please choose between 8 and 128"); //alerts user of incorrect value
         return "Invalid Parameters"; //spits out invalid parameters in the generate password box
    }
    options.special = confirm("Would you like to use special characters?"); //prompts user to see if they'd like special characters, stored in var special under options object
    options.numbers = confirm("Would you  like to use numeric characters?"); //prompts user to see if they'd like numeric characters, stored in var numbers under options object
    options.uppercase = confirm("Would you like to use uppercase characters?"); //prompts user to see if they'd like uppercase letters, stored in var uppercase under options object
    options.lowercase = confirm("Would you like to use lowercase characters?"); //prompts user to see if they'd like lowercase letters, stored in var lowercase under options object
    var password = ""; //defines an 'empty' variable, this will be where password is stored
    for (var i = 0; i < options.length; i++) { //for loop... first defines i as 0. then, if i is less than options.length (options user has defined and .length), runs a loop, adds 1 at each interval to get to the point that user has defined length
        if (options.special) { //if user wants special characters, will add a special character in password, then move to next. otherwise will skip
            password += getRandomValue(special); //adds special characters, uses the function defined below to randomize which one is selected in string
        }
        if (options.numbers) { //if user wants numbers, will add a number in password, then move to next. otherwise will skip
            password += getRandomValue(numbers); //adds numbers, uses the function defined below to randomize which one is selected in string
        }
        if (options.uppercase) { //if user wants uppercase letters, will add an uppercase letter in password, then move to next. otherwise will skip
            password += getRandomValue(uppercase);//adds uppercase letters, uses the function defined below to randomize which one is selected in string
        }
        if (options.lowercase) { //if user wants lowercase letters, will add an uppercase letter in password, then move to next. otherwise will skip
            password += getRandomValue(lowercase);//adds lowercase letters, uses the function defined below to randomize which one is selected in string
        }
    }
    return password.substring(0, options.length); //chops password down to what user defined. says give me part of string, starting at 0 and ending at what user defined as length
}
function getRandomValue(str) { //used in the for loop up above to randomize which item is pulled
    return str[Math.floor(Math.random() * str.length)]; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);