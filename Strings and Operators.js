/*Q1 Javascript Operators Assign two numeric variables a and b Initialise values as 5 and 10 respectively and console log in same order the following:
Create a variable add and assign it the sum of a and b.
Create a variable sub and assign it result of b subtracted from a.
Create a variable mul and assign it the product of a and b.
Create a variable div and assign it the result of of a divided by b.
Create a variable inc and assign it the preincremented value of a.
Create a variable dec and assign it the predecremented value of b.
*/

let a = 5;
let b = 10;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(++a);
console.log(--b);

/*Q2 Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following

Console log the length of string
Extract "AlmaBetter" from string using slice() and console log it
Replace "Javascript" with "Web3.0" in test and console log it
Convert test to upper case using built in function and console log it
Concat "Web3.0 is future" to test and console log it*/

let text = "Learning Javascript with AlmaBetter";
let text1 = "Web3.0 is future";
console.log(text.length);
console.log(text.slice(25));
console.log(text.replace("Javascript", "Web3.0"));
console.log(text.toUpperCase());
console.log(text.concat(text1));