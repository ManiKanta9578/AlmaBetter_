var l = require('lodash');
var numbers = [1,2,3,4,5,6];
let newArray = l.concat(numbers,[7,8,9]);
console.log(newArray);

//fill method
newArray = l.fill(numbers,99,[star=0],[end=4]);
console.log(newArray);


//Join Method
newArray = l.join(numbers,'-');
console.log(newArray);

//Reverse Method
newArray = l.reverse(numbers);

//Includes
let list = [1,2,3,4,5];
let result = l.includes(list,4)
console.log(result);

//sum
let num = [9,7,5,3];
let final  = l.min(num);
console.log(final);