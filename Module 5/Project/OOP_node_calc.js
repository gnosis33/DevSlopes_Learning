const readlineSync = require("readline-sync");

class Calculator {
  constructor(operation, firstNumber, secondNumber) {
    this.operation = operation;
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }

  calculate() {
    if (this.operation === "/") {
      return this.firstNumber / this.secondNumber;
    } else if (this.operation === "*") {
      return this.firstNumber * this.secondNumber;
    } else if (this.operation === "-") {
      return this.firstNumber - this.secondNumber;
    } else if (this.operation === "+") {
      return this.firstNumber + this.secondNumber;
    } else if (this.operation === "%") {
      return this.firstNumber % this.secondNumber;
    } else if (this.operation === "^") {
      return this.firstNumber ** this.secondNumber;
    } else if (this.operation === "nthRoot") {
      return this.firstNumber ** (1/this.secondNumber);
    } else {
      return "That is not a valid operation";
    }
  }
}

let run = true;

while (run === true) {
  const input = readlineSync.question("Please enter an operation [/, *, -, +, %, ^, nthRoot] (e.g. '5 * 3' or '6 / 6' or 3 nthRoot 8): ");
  const [firstNumber, operation, secondNumber] = input.split(" ");
  if (!operation || isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Invalid input");
  } else {
    let calc = new Calculator(operation, Number(firstNumber), Number(secondNumber));
    console.log("The result is: " + calc.calculate());
    const keepGoing = readlineSync.question("Would you like to continue? (y/n): ");
    if (keepGoing === "y") {
      run = true;
    } else if (keepGoing === "n") {
      run = false;
      console.log("Thank you for using the calculator!");
    } else {
      console.log("That is not a valid answer, exiting calculator.");
      run = false;
    };
  };
};
