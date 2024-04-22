const name = "Bhavishya"
const age = 21;

// Strng interpolation - concatenating with more readability
console.log(`Hello My name is ${name} and I am ${age} years old`)

const gameName = new String("Bhavi Suresh");

console.log(gameName);

console.log(gameName[0]);

console.log(gameName.__proto__); // prototype of an object - a blueprint that defines which properties and methods an object will inherit.

console.log(gameName.length);

//STRING METHODS

console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 5)
console.log(newString); // substring

const anotherString = gameName.slice(-6)
console.log(anotherString); // slicing - where negative values can be used

const game = "   Bhavi   "
console.log(game);
console.log(game.trim());

console.log(gameName.split(' ')); //splits the string into parts

const url = "https://climatechange.chicago.gov/climate-change-science/future-climate-change#:~:text=Future%20changes%20are%20expected%20to,larger%20future%20changes%20will%20be"

console.log(url.replace(/%20/g, '-')); //  global flag (/g)

console.log(url.includes("arts"));

