const prompt = require('prompt-sync')();
const choice = prompt("\n\t\t\t Do You Want to Create A Business Name" + "\n\t\t\t Type 'yes' to Proceed \n");
var choice2;

if (choice == "yes"){
    do{
        let lower_limit = 1;
        let upper_limit = 3;
        let random1 = parseInt(lower_limit + Math.random() * upper_limit);
        let random2 = parseInt(lower_limit + Math.random() * upper_limit);
        let random3 = parseInt(lower_limit + Math.random() * upper_limit);

        // random is in between 1 to 100( but is floating point number)
        let adjectives = {
            1: "Crazy",2: "Amazing", 3: "Fire"
        };

        let shop_Name = {
            1: "Engine", 2: "Foods", 3 : "Garments"
        };

        let random_word ={
            1: "Bros", 2: "Limited", 3:"Hub"
        };

        const the_business_Name = adjectives[random1] + " " +  shop_Name[random2] + " " + random_word[random3];
        console.log("\n\t\t\t The Random Name for Your Business: " + the_business_Name);
        choice2 = prompt("\n\t\t\t Do You Want Another Name For Your Business?" + "[Press 1 to continue]: ");
    } while(choice2 == 1);

    console.log("\n\t\t\t Hope You Got What You Wanted to Begin With Yoyur Business :)");
}