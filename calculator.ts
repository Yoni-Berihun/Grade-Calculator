import promptsync = require('prompt-sync');

console.log("This is a Simple Calculator");
console.log("======== Powered By: Yoni =========");

const prompt = promptsync();

while (true) {
    const firstInput = prompt("Enter the first operand / number (or type 'off' to exit): ");
    if (firstInput.toLowerCase() === 'off') break;

    const secondInput = prompt("Enter the second operand / number: ");
    if (secondInput.toLowerCase() === 'off') break;

    const firstNumber = Number(firstInput);``
    const secondNumber = Number(secondInput);
    const operator = prompt("Please insert the operator (+, -, *, /): ");

    const add = (a: number, b: number) => a + b;
    const sub = (a: number, b: number) => a - b;
    const mul = (a: number, b: number) => a * b;
    const div = (a: number, b: number) => a / b;

    switch (operator) {
        case '+':
            console.log("Your result is: " + add(firstNumber, secondNumber));
            break;
        case '-':
            console.log("Your result is: " + sub(firstNumber, secondNumber));
            break;
        case '*':
            console.log("Your result is: " + mul(firstNumber, secondNumber));
            break;
        case '/':
            if (secondNumber !== 0) {
                console.log("Your result is: " + div(firstNumber, secondNumber));
            } else {
                console.log("Error: Cannot divide by zero.");
            }
            break;
        default:
            console.log("You entered an invalid operator.");
    }
}

console.log("Calculator exited. Goodbye!");
