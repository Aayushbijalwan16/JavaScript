// For loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    //console.log(element);
    
}
// loop inside the loop 
for (let i = 0; i <=10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner loop value ${j} and ineer loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
        
    }
}

// break (it will stop the loop when condition is satisfied)and continue (it will continously run the loop even if the condition is satisfied)
for (let i = 1; i <= 20; i++) {
    if (i == 5 ){
        console.log(`detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5 ){
        console.log(`detected 5`);
        continue
    }
    console.log(`Value of i is ${i}`);
}