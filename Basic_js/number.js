// Some javaScript number method are
// 1. toString
// 2. toExponential
// 3. toPrecision
// 4. isInteger
// 5. toLocalString

let x=21
let y = 1000000
console.log(x.toString());

console.log(x.toExponential(2));

console.log(x.toPrecision(4));

console.log(Number.isInteger(x));

console.log(y.toLocaleString("en-IN"));


// Some Math object in javascript are
// 1. Math.abs
// 2. Math.round (ceil and floor are used to get top or base value)
// 3. Math.min/max
// 4. Math.sqrt
// 5. Math.sin
// 6. Math.random

console.log(Math.abs(-5));

console.log(Math.round(3.6));

console.log(Math.min(5, 10, 15, 20));

console.log(Math.sqrt(25));

console.log(Math.sin(Math.PI/2));

const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );