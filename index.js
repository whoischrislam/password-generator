// Characters to use for password generation
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Reference for UI to insert passwords
let password = document.getElementById("password");
const generateBtn = document.getElementById("generatePassword");
const passwordLength = document.getElementById("passwordLength");
const displayPasswordLength = document.getElementById("numPasswordChars");
const passwordArea = document.getElementById("passwords");
const includeSymbolsNumbers = document.getElementById("toggleSymbolsNumbers");
// Array to store passwords
let passwords = [];

// Attach event listener to button
generateBtn.addEventListener("click", generatePassword);

// Attach event listener for click to copy password to clipboard
passwordArea.addEventListener("click", function() {
    // Copy the password to clipboard
    navigator.clipboard.writeText(password.textContent)
  .then(function() {
    // Success: the text was successfully copied
    alert("Text copied to clipboard: " + password.textContent);
  })
  .catch(function(error) {
    // Failure: the text could not be copied
    alert("Failed to copy text to clipboard: ", error);
  });
});

function generatePassword () {
    passwordArea.style.display = "block";
    displayPasswordLength.textContent = passwordLength.value;
    // Check if the user wants to include symbols and numbers
    if (!includeSymbolsNumbers.checked) {
        characters = characters.filter (char => char.match(/[a-zA-Z]/));
    } else if(includeSymbolsNumbers.checked && characters.length < 55) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    }
    
    //Resetting if there is an existing set of passwords
    if (!Array.isArray(passwords) || passwords.length) {
        passwords = [];
    };
    // Loop to create the password based on the input length
    let passwordGen = "";
    for(let i = 0; i < passwordLength.value; i++){
        //Use Math.random() and floor to call a random index in the array
        passwordGen += characters[Math.floor(Math.random() * characters.length)];
    }
    // Push the password into the password array
    passwords.push(passwordGen); 
    password.textContent = passwords[0];
}