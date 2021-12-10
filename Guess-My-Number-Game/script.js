'use strict';

const message = document.querySelector('.message');
let number = document.querySelector('.number');
const body = document.querySelector('body');
const scoreRecorder = document.querySelector('.score');

//Creating random numbers between 1 and 20
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let secretNum = getRandomInt(1, 20);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if there is no number

  if (!guess) {
    message.textContent = '🚫Please, insert a valid number!🚫';
    message.style.color = 'red';
    //if the player got right
  } else if (guess == secretNum) {
    number.textContent = secretNum;
    message.textContent = '✅You got right✅';
    body.style.backgroundColor = 'green';
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    //if the player got higher number
  } else if (guess > secretNum) {
    if (score > 1) {
      message.textContent = '📈Too high📈';
      score--;
      scoreRecorder.textContent = score;
      message.style.color = 'yellow';
    } else {
      message.textContent = 'You lost the game';
      scoreRecorder.textContent = 0;
    }
    //if the player got lower number
  } else if (guess < secretNum) {
    if (score > 1) {
      message.textContent = '📉Too low📉';
      score--;
      scoreRecorder.textContent = score;
      message.style.color = 'yellow';
    }
    //if the player loses the game
    else {
      message.textContent = '❌You lost the game❌';
      scoreRecorder.textContent = 0;
      body.style.backgroundColor = 'red';
    }
  }
});

//restart the game by reloading the page
const again = document.querySelector('.again');
again.addEventListener('click', function () {
  document.location.reload(true);
});
