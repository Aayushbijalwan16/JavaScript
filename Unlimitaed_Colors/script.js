// genrate random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++ ){
      color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

console.log ();
let intervalId;
const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000);
    }
  function changeBackgroundColor() {
    document.body.style.backgroundColor = randomColor();
    }
}; 
document.querySelector('#start').addEventListener('click', startChangingColor);


const stopChangingColor = () => {
    
        clearInterval(intervalId);
        intervalId = null;
    }
document.querySelector('#stop').addEventListener('click', stopChangingColor);