#! /usr/bin/env node
import inquirer  from "inquirer";

console.log("\n\tWellcome to CodeWithSakina - CLT Number Guessing Game\n");

const randomeNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message: "Enter your guess number(Number Limit from 1 to 5):",
},
]);
if (answer.userGuessNumber === randomeNumber){
    console.log("Congratulations! You Guess a correct number");
}
else{
    console.log("Sorry, you guess a wrong number");
}