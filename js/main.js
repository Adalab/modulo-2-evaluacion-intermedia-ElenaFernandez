"use strict";

const playBTn = document.getElementById("play");
const resetBTn = document.getElementById("reset");
const selectOptions = document.querySelector(".js_options");
const textValue = document.querySelector(".js_text");
const player = document.querySelector(".js_jugador");
const computer = document.querySelector(".js_computadora");

let contPlayer = 0;
let contComputer = 0;
let reset = 0;

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

let numRamdom = getRandom(10);


function transformRandom() {
  if (numRamdom < 3) {
    return "rock";
  } else if (numRamdom >= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(comp) {
  if (selectOptions.value === "choice") {
    textValue.innerHTML = "Escoge una opción.";
  } else if (selectOptions.value === comp) {
    textValue.innerHTML = "Has empatado";
    reset++;
  } else if (
    (selectOptions.value === "rock" && comp === "scissors") ||
    (selectOptions.value === "paper" && comp === "rock") ||
    (selectOptions.value === "scissors" && comp === "paper")
  ) {
    textValue.innerHTML = "Has ganado";
    contPlayer++;
    reset++;
  } else if (
    (selectOptions.value === "rock" && comp === "paper") ||
    (selectOptions.value === "paper" && comp === "scissors") ||
    (selectOptions.value === "scissors" && comp === "rock")
  ) {
    textValue.innerHTML = "Has perdido";
    contComputer++;
    reset++;
  }
}
function updatePage() {
  player.innerHTML = `Jugardor: ${contPlayer}`;
  computer.innerHTML = `Computadora: ${contComputer}`;
}

function resetNumber() {
  if (reset > 9) {
    resetButtons();
  }
}
function resetButtons() {
  resetBTn.classList.toggle("hidden");
  playBTn.classList.toggle("hidden");
}

function resetVariables() {
  contPlayer = 0;
  contComputer = 0;
  reset = 0;
  numRamdom = getRandom(10);
}

function handleClickButton(event) {
  event.preventDefault();
  let compPlayer = transformRandom();
  playGame(compPlayer);
  updatePage();
  resetNumber();
}

function resetGame(event) {
  event.preventDefault();
  resetVariables();
  updatePage();
  textValue.innerHTML = "";
  selectOptions.value = "choice";
  resetButtons();
}

playBTn.addEventListener("click", handleClickButton);
resetBTn.addEventListener("click", resetGame);
