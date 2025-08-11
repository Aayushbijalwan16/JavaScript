
// new keyword inside the object
function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);    
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

// prototype

// let myName = "Aayush"

// console.log(myName.length);

let myCars = ["hundai", "suzuki", "mahindra"]

let carModel = {
    hundai: "verna",
    suzuki: "cias",
    mahindra: "XUV700",
    
    getHundaiCar: function(){
        console.log(`${this.hundai} is car of Hundai company`);
    }
}

Object.prototype.aayush = function (){
    console.log(`Aayush is present in all objects`);
    
}
carModel.aayush()
myCars.aayush()

//prototype inheritance
const user ={
    name: "aayush",
    email: "aayush@example.com",
}
const teacher ={
     makeVideo: true
}
const teachingSupport = {
    isavailable: false
}
const TASupport ={
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
}
teacher.__proto__ = user
// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)


let username2 = "JSwithAayush       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);   
}
username2.trueLength()