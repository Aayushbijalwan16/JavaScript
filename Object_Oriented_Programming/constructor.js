function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    return this
}

const userOne = new User("Aayush", 12, true)
const userTwo = new User("JavaScript", 11, false)
console.log(userOne);
console.log(userTwo);

