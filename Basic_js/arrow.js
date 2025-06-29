// This Function
const user = {
    username: "Aayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,welcome to webiste`); 
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()
// console.log(this);

// Arrow Function

const chai =  () => {
    let username = "Aayush"
    console.log(this);
    
}
chai ()
// Bais Arrow function 
/*const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 4))
*/

// Impilcit return (in this no need use return)
// const add = (num1, num2) => num1 + num2
// const add = (num1, num2) => (num1 + num2) // helpful for returning objects
// console.log(add (5,6)) 

const add = (num1, num2) => ({username: "Aayush"}) // helpful for returning objects
console.log(add(3 ,4));
