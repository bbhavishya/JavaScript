// console.log(2 > 1); // true
// console.log(2 < 1); // false
// console.log(2 >= 1); // true
// console.log(2 <= 1); // false
// console.log(2 != 1); // true
// console.log(2 == 1); // false

// type converted from string to number
// console.log("2" > 1)
// console.log("02" > 1)

/* Equality check == and comparisons < > >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true
null > 0 is false */
// null is converted to zero
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0) // true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0) // false