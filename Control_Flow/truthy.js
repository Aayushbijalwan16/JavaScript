//truthy values 
// "0", 'false', " ", [], {}, funtion(){}
//falsy value 
// false , 0, -0, Bigint 0n, "", null, undefined, NaN

const userEmail = "" // Falsy 
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Didn't get any Email");
}
const usersEmail = []  // truthy
if (usersEmail) {
    console.log("Got user email");
} else {
    console.log("Didn't get any Email");
}