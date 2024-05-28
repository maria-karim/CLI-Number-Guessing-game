#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twelcome to codewithMaria -CLI Number Guessing game\n");
const randonNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5)",
    }
]);
//random number which was gererated by typescript & given by user name will be same Or not check it by apply condition of if/else, if it is same its means user Win ,if its not same they will loss the game:>)so we print try again if nmb not match.
if (answer.userGuessedNumber === randonNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else
    console.log("OOps! you guess a wrong number! please try again ");
