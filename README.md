# HW-pwgenerator

This application generates a randomly generated password for a user. The user specifies the length and what types of characters that they would like the password to contain.

How it works : First the user clicks the "Generate Password" button. The user goes thru a series of prompts to determine how long the password is and what the password will contain. Behind the scenes, first the variables for all of the possible characters for the password first. Next, an object to store the values that the user defines will be stored. The user walks thru a series of prompts and the answers are stored within the object. Their are failsafes in place, if the user enters an invalid character or number outside the range of acceptable values, the user receives an alert and a "invalid parameters" string is then input into where the password would normally go.

To generate the password, a for loop is ran, it runs for however long the user defines. A separate function is made to randomize which characters are selected within the list of possible characters which have been defined in variables. The program is stepped thru that many times for each variable, which ends, this ends with 4X as many strings as necessary. To fix this, the string is cut off at using the value of length that has been defined by the user.

Finally, the password is input into the card for copy/pasting.


