'use strict';

const playBTn = document.getElementById('play');
const resetBTn = document.getElementById('reset');
const selectOptions = document.querySelector('.js_options');
const textValue = document.querySelector('.js_text');
const player = document.querySelector('.js_jugador');
const computer = document.querySelector('.js_computadora');
const playTimes = document.querySelector('.js_reset');

let numRamdom = 0;
let contPlayer = 0;
let contComputer = 0;
let reset = 0;

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

function transformRandom() {
  if (numRamdom < 3) {
    return 'rock';
  } else if (numRamdom >= 6) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playGame(comp) {
  if (selectOptions.value === 'choice') {
    feedbackOptions('Escoge una opción.');
  } else if (selectOptions.value === 'rock') {
    if (comp === 'scissors') {
      feedbackOptions('Has ganado');
      contPlayer++;
      reset++;
    } else if (comp === 'rock') {
      feedbackOptions('Has empatado');
      reset++;
    } else {
      feedbackOptions('Has perdido');
      contComputer++;
      reset++;
    }
  } else if (selectOptions.value === 'scissors') {
    if (comp === 'scissors') {
      feedbackOptions('Has empatado');
      reset++;
    } else if (comp === 'rock') {
      feedbackOptions('Has perdido');
      contComputer++;
      reset++;
    } else {
      feedbackOptions('Has ganado');
      contPlayer++;
      reset++;
    }
  } else if (selectOptions.value === 'paper') {
    if (comp === 'scissors') {
      feedbackOptions('Has perdido');
      contComputer++;
      reset++;
    } else if (comp === 'rock') {
      feedbackOptions('Has ganado');
      contPlayer++;
      reset++;
    } else {
      feedbackOptions('Has empatado');
      reset++;
    }
  }
  /*else if (selectOptions.value === comp) {
    feedbackOptions('Has empatado');
    reset++;
  } else if (
    (selectOptions.value === 'rock' && comp === 'scissors') ||
    (selectOptions.value === 'paper' && comp === 'rock') ||
    (selectOptions.value === 'scissors' && comp === 'paper')
  ) {
    feedbackOptions('Has ganado');
    contPlayer++;
    reset++;
  } else if (
    (selectOptions.value === 'rock' && comp === 'paper') ||
    (selectOptions.value === 'paper' && comp === 'scissors') ||
    (selectOptions.value === 'scissors' && comp === 'rock')
  ) {
    feedbackOptions('Has perdido');
    contComputer++;
    reset++;
  }*/
}

function feedbackOptions(feedback) {
  textValue.innerHTML = feedback;
}
function updatePage() {
  player.innerHTML = `Jugardor: ${contPlayer}`;
  computer.innerHTML = `Computadora: ${contComputer}`;
  playTimes.innerHTML = `Veces jugadas: ${reset} `;
}

function resetNumber() {
  if (reset > 9) {
    resetButtons();
  }
}
function resetButtons() {
  resetBTn.classList.toggle('hidden');
  playBTn.classList.toggle('hidden');
}

function resetVariables() {
  contPlayer = 0;
  contComputer = 0;
  reset = 0;
  numRamdom = getRandom(10);
}

function handleClickButton(event) {
  event.preventDefault();
  numRamdom = getRandom(10);
  let compPlayer = transformRandom();
  playGame(compPlayer);
  updatePage();
  resetNumber();
}

function resetGame(event) {
  event.preventDefault();
  resetVariables();
  updatePage();
  feedbackOptions('Vamos a jugar');
  selectOptions.value = 'choice';
  resetButtons();
}
//HELPERS
function listenEvents() {
  playBTn.addEventListener('click', handleClickButton);
  resetBTn.addEventListener('click', resetGame);
}

listenEvents();
