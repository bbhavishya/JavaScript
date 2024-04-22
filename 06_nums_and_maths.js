const score = 400;
// console.log(score);

const balance = new Number(503.78);
console.log(balance);

//NUMBER METHODS

// toExponential : ƒ toExponential()

// toFixed : ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
 
console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(3)); // Returns a string representing a number in fixed-point notation.
console.log(balance.toPrecision(3)); // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

const convertion = 100000
console.log(convertion.toLocaleString('en-IN')); 