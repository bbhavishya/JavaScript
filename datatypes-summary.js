// Datatypes
//1.  Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //int
const scoreValue = 99.7 // float

const isLoggedIn = false // boolean
const outsideTemp = null // null

let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId) // false


//2.  Reference (Non primitive)

// Arrays, Object, Functions - return type is object

const plants = ["rose", "aloe", "hibiscus"];

let myObj = {
    name : "Bhavishya",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof plants) // object
console.log(typeof myObj) // object
console.log(typeof myFunction) // function

//Memoery storage
// Stack is used in Primitive datatypes (a copy is made)
// Heap is used in Reference types (changes the original value - reference)

let youtuberName = "Nick and Carrie"

let anotherName = youtuberName

anotherName = "Iamnick"
console.log(youtuberName);
console.log(anotherName)


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhavi@google.com"

console.log(userOne.email);
console.log(userTwo.email);