// MAP
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newnums = mynums.map( (num) => {return num + 10} )

console.log(newnums);
// Chaining
const newnum = mynums
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter ( (num) => num >= 40)
console.log(newnum);
