#! /usr/bin/env node

import inquirer from "inquirer";

const range = await inquirer.prompt([
  {
    name: "min",
    type: "number",
    message:
      "Please Enter min-range for computer to randomly select number from ?",
  },
  {
    name: "max",
    type: "number",
    message:
      "Please Enter max-range for computer to randomly select number from ?",
  },
]);

const randomNumber = Math.floor(
  Math.random() * (range.max - range.min + 1) + range.min
);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: `Enter any number between ${range.min}-${range.max}: `,
  },
]);

if (
  answer.userGuessedNumber > range.max ||
  answer.userGuessedNumber < range.min
) {
  console.log(
    "Your guessed is outside the range you defined. Please try again!"
  );
  console.log(`Computer randomly selectetd: ${randomNumber}`);
} else if (randomNumber === answer.userGuessedNumber) {
  console.log("Congratulations! You guessed Right");
} else if (
  randomNumber === answer.userGuessedNumber + 1 ||
  randomNumber === answer.userGuessedNumber - 1
) {
  console.log("Ooh you were so close..");
  console.log(`Computer randomly selectetd: ${randomNumber}`);
} else {
  console.log("Sorry! You guessed Wrong");
  console.log(`Computer randomly selectetd: ${randomNumber}`);
}
