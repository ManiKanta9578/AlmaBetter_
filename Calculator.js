let result;

const operator = prompt("Enter an operator(Either +,-,/,* ");
const number1 = parseFloat(prompt('Enter a first number:'));
const number2 = parseFloat(prompt('Enter a Second number:'));
switch(operator){
  case '+':
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case '-':
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case '/':
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;
  case '*':
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  default:
    console.log("Invalid Operator");
    break;
}