// factorial of the number using loops 
const prompt = require('prompt-sync')();
var num = prompt("Enter the number: ");

let factorial = () => {
    if (num < 0){
        console.log("\n Please Enter A non-Negative Integer");
        return -1;
    }

    else if(num == 0 || num == 1){
        return 1;
    }

    else if (num > 0){
        let resultant = 1;
        for (let iter = num ; iter > 0 ; iter--){
            resultant = iter * resultant;
        }

        return resultant;
    }
};

console.log("The value of the facrtorial = " + factorial());

// factorial Of the number using the reduce method of the arrays:-
let new_Array = [];

var e;

for(let iter = parseFloat(num) ; iter > 0 ; iter--){
    new_Array.push(iter);
}

// console.log(new_Array); --> To display the array Obviously
let factorial_using_reduce = new_Array.reduce((element1, element2) =>{
    return (element1 * element2);
});

console.log("\n The factorial of the nnumber using the reduce method = " + factorial_using_reduce);

