/*

const string = 'Hello hello hello';
// performing a replacement
const result = string.replace(/hello/,'World!');
console.log(result);

// performing global replacement
const result1 = string.replace(/hello/g,'World!');
console.log(result1);

// performing case-insensitive replacement
const result2 = string.replace(/hello/i,'World!');
console.log(result2);

// performing global case-insensitive replacement
const result3 = string.replace(/hello/gi,'World!');
console.log(result3);

*/

//Email validation

// const input = prompt('Enter your email');
// const pattern = /\S+@[a-z]+.\S+/;
// const result = pattern.test(input);
// console.log(result);

/*

Example 1:
Input:
is_hexcolor("#444");

Output:
true

Explanation:
A hex color contains the alphabets from (A-F) and number from (0-9) and is of length 3 or 6. Since, the string satisfies these parameters, hence we get true as output.

*/

function is_hexcolor(str){
    regex = /^#[A-Z]/
}