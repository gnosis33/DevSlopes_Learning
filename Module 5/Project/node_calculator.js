const readlineSync = require("readline-sync");

function calculator(operation, firstNumber, secondNumber) {
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
  } else if (operation === "nthRoot") {
    return firstNumber ** (1/secondNumber);
  } else {
    return "That is not a valid operation";
  };
};

let calc = true;

while (calc === true) {
  const input = readlineSync.question("Please enter an operation [/, *, -, +, %, ^, nthRoot] (e.g. '5 * 3' or '6 / 6' or 3 nthRoot 8): ");
  const [firstNumber, operation, secondNumber] = input.split(" ");
  if (!operation || isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Invalid input");
  } else {
    console.log("The result is: " + calculator(operation, Number(firstNumber), Number(secondNumber)));
    const keepGoing = readlineSync.question("Would you like to continue? (y/n): ");
    if (keepGoing === "y") {
      calc = true;
    } else if (keepGoing === "n") {
      calc = false;
      console.log("Thank you for using the calculator!");
    } else {
      console.log("That is not a valid answer, exiting calculator.");
      calc = false;
    };
  };
};


