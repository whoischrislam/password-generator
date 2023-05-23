const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//UI Hit button
//Set reference for UI to insert passwords
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
//Behavior create two passwords
let passwordsToGenerate = 2;
let numChar = 15;
//create array to store passwords
let passwords = [];
function generatePassword () {
    //Resetting if there is an existing set of passwords
    if (!Array.isArray(passwords) || passwords.length) {
        console.log(`Getting rid of ${passwords}`);
        passwords = [];
    };
    console.log("GENERATING...");
    //write a loop based on how many passwords to generate (2)
    for (let i = 0; i < passwordsToGenerate; i++) {
        //write a loop to create 15 characters to store in a string
        let passwordGen = "";
        for(let i = 0; i < numChar; i++){
            //Use Math.random() and floor to call a random index in the array
            passwordGen += characters[Math.floor(Math.random() * characters.length)];
            // console.log(`${passwordGen}`);
        }
        //when loop ends, push the password into the password array   
        passwords.push(passwordGen); 
    };

    password1.textContent = passwords[0];
    password2.textContent = passwords[1];
    //Checking passwords stored in the array
    console.log(passwords);
}
