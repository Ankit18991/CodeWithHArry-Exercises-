let minimum_limit = 1;
let maximum_limit = 100;

const prompt = require('prompt-sync')();


// Menu
console.log("\n\t\t\t PRESS 1 FOR ADDITION");
console.log("\n\t\t\t PRESS 2 FOR SUBTRACTION");
console.log("\n\t\t\t PRESS 3 FOR MULTIPLICATION");
console.log("\n\t\t\t PRESS 4 FOR DIVISION");
console.log("\n\t\t\t PRESS 0 TO EXIT");

while(true){
    let choice = prompt("Enter Your Choice: "); 
    let random_no = minimum_limit + (maximum_limit - minimum_limit) * Math.random();

    let prompt1 = prompt("\n\t\t\t ENTER THE FIRST NUMBER: ");
    let prompt2 = prompt("\n\t\t\t ENTER THE SECOND NUMBER: ");
    
    console.log("\n\t\t\t The random number = " + random_no);

    if(choice == 1 && random_no <= 10){
        console.log("\n\t\t\t" + prompt1 + " + " + prompt2 + " = " + (prompt1 - prompt2));
    } else if (choice == 1) {
        console.log("\n\t\t\t" + prompt1 + " + " + prompt2 + " = " + (parseFloat(prompt1) + parseFloat(prompt2)));
    }

    else if (choice == 2 && random_no <= 10){
        console.log("\n\t\t\t" + prompt1 + " - " + prompt2 + " = " + (prompt1 / prompt2));
    }   else if (choice == 2){
        console.log("\n\t\t\t" + prompt1 + " - " + prompt2 + " = " + (prompt1 - prompt2));
    } 

    else if (choice == 3 && random_no <=10){
        console.log("\n\t\t\t" + prompt1 + " X " + prompt2 + " = " + (parseFloat(prompt1) + parseFloat(prompt2)));
    } else if (choice == 3){
        console.log("\n\t\t\t" + prompt1 + " X " + prompt2 + " = " + (prompt1 * prompt2));
    }

    else if (choice == 4 && random_no <= 10){
        console.log("\n\t\t\t" + prompt1 + " / " + prompt2 + " = " + (prompt1 ** prompt2));
    }  else if (choice == 4){
        console.log("\n\t\t\t" + prompt1 + " / " + prompt2 + " = " + (prompt1 / prompt2));
    }

    let choice2 = prompt("\n\t\t\t PRESS 1 TO PERFORM OPERATION AGAIN AND ANY ITHER BUTTON TO EXIT: ");
    if(!(choice2 == 1)){
        break;
    }

}



