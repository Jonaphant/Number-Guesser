/*
Created by Jonathan Sou
Number Guessing Game
*/

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesse
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    guess=0,
    guessesLeft = 3,
    winningNum = randomNum(min, max);

// UI elements
const input = document.querySelector("#guess-input"),
      guessBtn = document.querySelector('#guess-btn'),
      game = document.querySelector("#game");
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener("click", function(){  
  
  guess=parseInt(input.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }else if(guess===winningNum){
    gameFinished(true, `Correct! The number ${guess} is the winning number!`);
  }else{
    guessesLeft--;
    input.value= '';
    setMessage(`The guess was not correct. You have ${guessesLeft} guesses left.`, "red");

    if(guessesLeft===0){
      gameFinished(false, `Sorry, game over. The winning number was ${winningNum}.`);
    }
  }
});

game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
})



// Print out the message
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}

// Game over. Show results
function gameFinished(won, msg){
  let color;
  if(won){
    color = "green";
  }else{
    color= "red";
  }

  input.style.borderColor = color;
  input.disabled = true;

  setMessage(msg, color);

  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
}

// Returns random number from 1-10;
function randomNum(min, max){
  return Math.floor(Math.random() * (max-min+1) + min);
  //console.log(Math.floor(Math.random() * (max-min+1) + min));
}
