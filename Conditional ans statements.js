/*  Q1
Display Large IntegerMedium
Write a JavaScript program that accept two integers and display the larger.

Example 1:
Input:
var num1 = 5 var num2 = 10

Output:
The larger of 5 and 10 is 10.

Explanation:
The larger integer out of 5 and 10 is 10, hence the output.
*/

var num1 = 5;
var num2 = 10;
if(num1>num2){
    console.log(`The larger of ${num1} and ${num2} is ${num1}`);
}
else{
    console.log(`The larger of ${num1} and ${num2} is ${num2}`);
}

/* Q2
Even or OddMedium
Write a JavaScript program that checks if input number is even or odd by using “%” operator in JavaScript.

Example 1:
Input:
var num3 = 17.5 var num4 = 42

Output:
17.5 is odd 42 is even

Explanation:
Out of the inputed numbers 17.5 and 42 as 17.5 is odd and 42 is even, hence the output.
*/

var num3 = 17.5;
var num4 = 42;
if(num3%2===0){
    console.log(num3+' is even');
}
else{
    console.log(num3+' is Odd');
}
if(num4%2===0){
    console.log(num4+' is even');
}
else{
    console.log(num4+' is Odd');
}