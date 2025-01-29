// Date in JS is use to represent specific moment in time. Date is a object in JavaScript.

let myDate = new Date()
console.log('Showing date : ' + myDate);
console.log('Showing date using toString : ' + myDate.toString());
console.log('Showing date using toLocaleString : ' + myDate.toLocaleString());
console.log('Showing date using toISOString : ' + myDate.toISOString());
console.log('Showing date using toJSON : ' + myDate.toJSON());
console.log('Showing date using toDateString : ' + myDate.toDateString());

// to declear specific date
let myCreatedDate = new Date(2024, 3 ,20)
console.log('Declearing specific date using toDateString : ' + myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2024, 3, 20, 15 , 3)
console.log('Declearing date and time using toLocaleString : ' + myCreatedDate1.toLocaleString());

// Timestamp

let myTimeStamp = Date.now()

console.log('Current time is Showing date' + myTimeStamp);