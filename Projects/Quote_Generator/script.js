const api_url = "http://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")
 async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    
}
getQuote(api_url);

// use for crating direct share as post button
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML , "Tweet window", "width=600, height=300");
}