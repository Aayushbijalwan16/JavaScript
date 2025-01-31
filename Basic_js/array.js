// array is a object enables storing a collection of multiple items undeer a single variable name
// arrays are resizeable andcan contain mix of different data types.
// array are not associative array and indexed from zero
// copy operation in array are shallow copy(copy whose properties shares are same reference as those of the source object) and deep copy(copy whose do not share same reference of those of the source object).

const { log } = require("console");

const myArr = [15,20,25,30,35]

const myHero =new Array ("shakitman", "baalveer", "power ranger")

console.log(myArr[3]);

console.log(myHero[1]);

// Array Methods
// 1. push() - adds one or more elements to the end of an array and returns

myArr.push(40,45)

console.log(myArr);

// 2. pop() - removes the last element from an array and returns that element

let popped = myArr.pop()

console.log(myArr);

console.log(popped);

// 3. unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
myArr.unshift(10)

console.log(myArr);
// 4. shift() - removes the first element from an array and returns that element

let shifted = myArr.shift()

console.log(myArr);

console.log("Shifted element is : ", shifted);

// 5. includes(): detremine wether an array include a certain value aming its entries

console.log(myArr.includes(25));

// 6. indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present

console.log(myArr.indexOf(25));

// 7. join(): creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

const newArr = myArr.join('-');

console.log(newArr);

// 8. slice(): extracts a section of an array and returns a new array. we need to provide index of element for extraction.

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);


// 9. splice(): adds/removes items to/from an array and returns the removed item(s). we need to provide index of element for add or remove element.

const myn2 = myArr.splice(1, 3)

console.log("C", myArr);

console.log(myn2);

// 10. concat(): use to merge two or more arrays
const indCar = ["XUV700", "Verna", "Cias", "Thar", "Fortuner"]
const indCar2 = ['Audi', 'Mercedes', 'BMW', "Mastang"]

// const indCar3 = indCar.concat(indCar2)
const car = [...indCar, ...indCar2]  // spread operator
// console.log(indCar3);
console.log(car);

// 11. flat(): create a new array with all sub-array elements concatenated intoit recursively upto the specified depth
const myArr2 = [1, 2, [3, 4, [5, 6, 7 ]]]

console.log(myArr2.flat(Infinity));

//12. from(): use to create an array from array like object

console.log(Array.isArray("Aayush")); // to check inout data is array or not.

console.log(Array.from("Aayush"));

//13. of(): use to create a new array from set of element

let score1 = 50
let score2 = 70
let score3 = 80

console.log(Array.of(score1, score2, score3));