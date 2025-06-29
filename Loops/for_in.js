// For in loop
// Object

const myObject ={
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array

const program = ['js', 'cpp', 'java', 'ruby']
for (const key in program) {
    console.log(program[key]);
    
}

// Map is not irrateable