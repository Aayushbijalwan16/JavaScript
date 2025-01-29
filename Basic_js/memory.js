// type of memory allocation in js 
// Stack allocation (use for premitive data types, takes copy of data from memory and allow changes on in copied data)
// Heap allocation (use for non-premitive data types, takes reference of data from memory and allows changes on in referenced data which is main data)

// Stack allocation

let myAppname = "kudo"

let anotherAppname = myAppname
anotherAppname = "sudo"
console.log(myAppname);
console.log(anotherAppname);

// Heap allocation

let userOne = {
    email: "user@example",
    name: "John Doe"
}

let userTwo = userOne

userTwo.email = "user2@example"

console.log(userOne.email);
console.log(userTwo.email);