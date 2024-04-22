// const score = 400;
// // console.log(score);

// const balance = new Number(503.78);
// console.log(balance);

//NUMBER METHODS

// toExponential : ƒ toExponential()

// toFixed : ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
 
// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(3)); // Returns a string representing a number in fixed-point notation.
// console.log(balance.toPrecision(3)); // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// const convertion = 100000
// console.log(convertion.toLocaleString('en-IN')); 


// Math 

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.ceil(4.5)); //5
console.log(Math.min(3, 4, 6, 9)); // 3
console.log(Math.max(3, 4, 6, 9)); // 9

//Random

console.log(Math.random()); // Gives random values from 0 - 1
console.log((Math.random()*10) + 1); // gives random values from 1 to 10
console.log(Math.floor(Math.random()*10000+1)); // gives floor values 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min); // max - min because we want values between max and min, added 1, so that it wont, give 0. answers, floor to get the floor value and + min, so that the value is greater than the minimum value provided.
