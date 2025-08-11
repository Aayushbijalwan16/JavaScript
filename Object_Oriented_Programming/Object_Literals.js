// Object Literals

const { log } = require("console");

const user = {
    username: "Aayush",
    loginCount: 8,
    siggnedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
    }
}
console.log(user.username);
console.log(user.getUserDetails());
