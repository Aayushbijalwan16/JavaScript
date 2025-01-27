const accountID = 1445 // block-scoped and cannot be re-assigned
let accountEmail = "xyz@gmail.com" // block-scoped and cannot be decleared in the same scope
var accountPassword = "123" //Prefer not to use var beacuse of issue in functional scope or block scope. 
accountCity = "Goa" //also a method to declear varibale but not prefreable
let accountState;

//  accountID = 2 not allowed
accountEmail = "dankdend@gmail.com"
accountPassword = "123"
accountCity = "Uttarkashi"
console.table ([accountID, accountEmail, accountPassword, accountCity, accountState]);