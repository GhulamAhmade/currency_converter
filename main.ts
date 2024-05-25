#! /usr/bin/env node

import inquirer from "inquirer"
const currency: any = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  IND: 83.12,
  PKR: 278.2,
  CAD: 1.37,
  JPY: 157.01,
};
let user_answere = await inquirer.prompt([
  {
    name: "From",
    message: "Enter from currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR", "CAD", "JPY"],
  },
  {
    name: "To",
    message: "Enter to currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "IND", "PKR", "CAD", "JPY"],
  },
  {
    name: "Amount",
    message: "Enter your amount currency",
    type: "number",
    choices: ["USD", "EUR", "GBP", "IND", "PKR", "CAD", "JPY"],
  },
]);

let fromacount = currency[user_answere.From];
let toamount = currency[user_answere.To];
let amount = user_answere.Amount;
//formula of converter.
let baseamount = amount / fromacount;
let convertedamount = baseamount * toamount;

console.log("Converted Amount = " + convertedamount.toFixed(2));