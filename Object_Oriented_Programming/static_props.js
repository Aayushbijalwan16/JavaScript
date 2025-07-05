class User {
    constructor(username){
        this.username = username
    }

   LoggedIn(){
    console.log(`USERNAME: ${this.username}`);
   }

   static createId(){
    return `123`
   }
}   

   const user1 = new User("Aayush")
//    console.log(user1.createId())


   class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
   }

   const remdmi = new Teacher("redmiy2", "redmi@user.com")
   console.log(remdmi.LoggedIn());