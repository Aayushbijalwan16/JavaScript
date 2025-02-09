//Functions in JS
// Functions is a resuable block of code designed to perform specifi tasks.

// syntax
// function name (para1, para2){
//    return(para1 + para2);
//   }
// name(arg1 ,  arg2)
function sum(x, y) { 
    return(x + y); 
}
const result = sum(5, 3)
console.log("Result:", result);
 

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    else {
        console.log(`Welcome ${username}!`);
    }
}

console.log(loginUserMessage("Aayush"));
console.log(loginUserMessage());


//Providing default value in parameter
function loginUsersMessage(username = "New USer"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    else {
        console.log(`Welcome ${username}`);
    }
}

console.log(loginUsersMessage("Aayush"));
console.log(loginUsersMessage());


// Rest Operator

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

// object using with function
const user = {
    username: "Aayush",
    email: "aayush@gmail.com",
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and email is ${anyobject.email}`);
} 

    handleObject(user);