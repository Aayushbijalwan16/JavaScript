// Call :- passes the current executation context to other function
function SetUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    SetUsername.call(this, username)
    
    this.email = email
    this.password = password
} 

const aayush = new createUser("aayush", "aayush@example.com", "123")
console.log(aayush);