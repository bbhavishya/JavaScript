// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2002, 10, 9);
// console.log(myCreatedDate.toDateString());

let myDate1 = new Date(2005, 8, 30, 14, 30);
// console.log(myDate1.toLocaleTimeString());

let myDateM = new Date("01-14-2024");
// console.log(myDateM.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDateM.getTime());
// console.log(Date.now()); // milliseconds
// console.log(Date.now()/1000); // milliseconds to seconds
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.getMonth() + 1); // +1 is added because, it takes month index from 0
// console.log(`Today's date is ${newDate.getDate()}`);

console.log(newDate.toLocaleString('default', {
    weekday : "narrow"
}))