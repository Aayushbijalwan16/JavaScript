// for each loop

const coding = ["js", "ruby", "java", 'python']
coding.forEach( function (item) {
    //console.log(item);
}  )

// using arrow function

coding.forEach( (val) => {
    //console.log(val);
    
} )

const codingg = ["js", "ruby", "java", 'python']
coding.forEach( (item, index, arr) => {
//    console.log(item, index, arr);
}  )

//
const mycoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

mycoding.forEach(  (item) =>
{
    console.log(item.languageName);
    
} )