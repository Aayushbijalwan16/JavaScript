const randomnum = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessfield');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;   // Number of guesses

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        ValidateGuess(guess);
    });
}

function ValidateGuess(guess) {     // use for validating input
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a number more than 1');
    } else if(guess > 100){
      alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
          displayGuess(guess)
          displayMessage(`Game Over. Random number was ${randomnum}`);
          endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
  if(guess == randomnum){
    displayMessage('You guess it right');
    endGame();
  }  else if (guess < randomnum){
    displayMessage('Number is Tooo low');
  }  else if (guess > randomnum){
    displayMessage('Number is Tooo high');
  }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}  `;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame(false);
    newGame();
}
function newGame() {
    document.querySelector('#newGame')
    newGamebutton.addEventListener('Click', function(e){
        randomnum = (parseInt(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
    playGame = true;
    }
)}