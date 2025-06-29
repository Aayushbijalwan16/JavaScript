// reduce method

const mynum = [1, 2, 3]

// const newnum = mynum.reduce(function (acc, cval){
//     console.log(`acc: ${acc} and cval: ${cval}`);
    
//     return acc + cval
// }, 0)
// using arrow function
const newnum = mynum.reduce( (acc, cval) => acc+cval, 0 )
console.log(newnum);
