const { log } = require("console");

function one (){
    const username = "Aayush"   //Global scope

    function two (){     // Block scope
        const website = "youtube"
       console.log(username);
    }
    //  console.log(website);

     two()
}

one()

if (true) {
    const username = "Aayush"
    if (username === "Aayush") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);
