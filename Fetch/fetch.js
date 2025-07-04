fetch ('https//api.github.com/users/aayushbijalwan16')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))