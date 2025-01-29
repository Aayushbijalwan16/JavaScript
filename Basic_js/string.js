// String is a sequence of characters
// Create string usinng object

let s = new String("JavaScript is pro lang.");
console.log(s);

// Multi line string
let s1 = `this is a 
multi line  
string`;
            console.log(s1);

// operations in string
// 1. Length 
   
let s2 = "JavaScript";
let len = s2.length;

console.log("String length is " + len);

// 2. String concatination

let s3 = "Hello";
let s4 = " JavaScript";
let res = s3 + s4;
console.log(res);

// 3. String replace

let s5 = 'Lean HTML and JavaScript';
let rpl = s5.replace('and', 'CSS');
console.log(rpl);

//4. Escacpe Character

const s6 = "\'JavaScript\' is pro lang";
const s7 = "\"JavaScript\" is pro lang";
const s8 = "\\JavaScript\\ is pro lang";

console.log(s6);
console.log(s7);
console.log(s8);

//5. Break long String (using \ or + )
 const s9 = "'JavaScript' \ is pro lang";
            console.log(s9);

//6. Find SubString

let s10 = "JavaScript is pro lang";
let subStr = s10.substring(5, 13);
console.log(subStr);

//7. Trim whitespace

let s11 = "  JavaScript is pro lang  ";
let trimmedStr = s11.trim();
console.log(trimmedStr);

//8. Convert to uppercase 

    let s12 = "JavaScript";
    let upperStr = s12.toUpperCase();
    console.log(upperStr);

//9. Convert to lowercase
let s13 = "JavaScript";
    let lowerStr = s13.toLowerCase();
    console.log(lowerStr);