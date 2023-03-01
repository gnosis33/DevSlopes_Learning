const readlineSync = require("readline-sync");
function calculator(  operation, firstNumber, secondNumber) {
  if (operation === "/") {
    return firstNumber / secondNumber;
  } else if (operation === "*") {
    return firstNumber * secondNumber;
  } else if (operation === "-") {
    return firstNumber - secondNumber;
  } else if (operation === "+") {
    return firstNumber + secondNumber;
  } else if (operation === "%") {
    return firstNumber % secondNumber;
  } else if (operation === "^") {
    return firstNumber ** secondNumber;
  } else {
    return "That is not a valid operation";
  };
};


let calc = true;
while (calc === true) {
  const firstNumber = readlineSync.questionInt("Please enter the first number: ");
  let operation = "";
  let loop = true;
  while (loop === true) {
    operation = readlineSync.question("What operation would you like to perform? (/, *, -, +, %, ^): ");
    if (operation !== "/" && operation !== "*" && operation !== "-" && operation !== "+" && operation !== "%") {
      console.log("That is not a valid operation");
      loop = true;
    } else {
      loop = false;
    };
  };
  const secondNumber = readlineSync.questionInt("Please enter the second number: ");
  calculator(operation, firstNumber, secondNumber);
  console.log("The result is: " + calculator(operation, firstNumber, secondNumber));
  const keepGoing = readlineSync.question("Would you like to continue? (y/n): ");
  if (keepGoing === "y") {
    calc = true;
  }
  else if(keepGoing === "n") {
    calc = false;
    console.log("Thank you for using the calculator!");
  }
  else {
    console.log("That is not a valid answer, exiting calculator.");
  }
};