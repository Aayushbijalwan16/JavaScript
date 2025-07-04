const { log, error } = require("console");
const { promises } = require("dns");
const { resolve } = require("path");

const promiseOne = new Promise((resolve, reject) => {
  // Do an async task like DB Task, cryptography, n/w
  setTimeout(() => {
    console.log("Async is compelete");
    resolve()
  }, 1000)
}) 

promiseOne.then(() => {
    console.log("Promise Consumed");
})

// Optmised 
new Promise((resolve, reject) => {
   setTimeout(() => {
    console.log("Async task 2");
    resolve()
   }, 1000)
}).then(() => {
    console.log("Async 2 resloved");
    
})
// Promise for data consumption
const promiseTwo = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve({username: 'Chai', email: "chai@example.com"})
    }, 1000)
})

promiseTwo.then((user) => {
  console.log(user);
  
})

//

const promiseThree = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error =  true
        if(!error){
            resolve({username: "Aayush", password: "123" })
        } else {
            reject('error: Something went wrong')
        }
    },1000)
})

promiseThree.then((user) => {
  console.log(user);
  return user.username
})
.then((username) => {
  console.log(username); 
})
.catch((error) => {
  console.log(error);
}).finally(() => console.log("The promise is resolve either rejected")
)

const promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {
       let error =  true
        if(!error){
            resolve({username: "Javascript", password: "123" })
        } else {
            reject('error: Js went wrong')
        }
    },1000)
}) 
async function consumePromiseFour(){
    try{
        const response = await promiseFour
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumePromiseFour()

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers()