const { log } = require("node:console");

// Object.create this is create using constructor
const tinderUSer = new Object()   // Singleton object
// const tinderUser = {} // Non-Singleton object

tinderUSer.id = "123"
tinderUSer.name ="Aayush"
tinderUSer.isLoggedIn = false


const regularUSer = {
    email: "bot@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Aayush",
            lastname: "Kumar"
        }
    }
}

console.log(regularUSer.fullname.userfullname.firstname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} // spread object
console.log(obj3);

const users =[
    {
        id: "123",
        name: "Aayush",
        isLoggedIn: true
    },
    {
        id: "123",
        name: "Aayush",
        isLoggedIn: true
    },
    {
        id: "123",
        name: "Aayush",
        isLoggedIn: true
    },
    {
        id: "123",
        name: "Aayush",
        isLoggedIn: true
    },
]

users[1].email
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));
console.log(tinderUSer.hasOwnProperty('isLoggedIn'));




// object literals
const mySym = Symbol("key1")  // using symbol data type

const JsUser = {
    name: "Aayush",
    [mySym]: "mykey1",
    age : 18,
    email : "aayush@gmail.com",
    isLoggedIn : true,
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "aayush@chatgpt.com"
console.log(JsUser["email"]);

// Object.freeze()
// Object.freeze(JsUser)

JsUser.email = "aayush@hackerone.com"

console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(JsUser.greetingTwo());