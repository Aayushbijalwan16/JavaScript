

const tea = {
    name: 'black tea',
    price: 300,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

Object.defineProperty(tea, 'name',{
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"));
for (let [key, value] of Object.entries(tea)) {
    
    console.log(`${key} : ${value}`);
}
