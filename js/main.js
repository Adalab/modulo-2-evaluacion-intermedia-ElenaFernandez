"use strict";

const playBTn = document.querySelector(".js_button");
const selectOptions = document.querySelector(".js_options");
const textValue = document.querySelector(".js_text");
const player = document.querySelector(".js_jugador");
const computer = document.querySelector(".js_computadora");

let contPlayer = 0;
let contComputer = 0;

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

let numRamdom = getRandom(10);
console.log(numRamdom);

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
  } else if (
    (selectOptions.value === "rock" && comp === "scissors") ||
    (selectOptions.value === "paper" && comp === "rock") ||
    (selectOptions.value === "scissors" && comp === "paper")
  ) {
    textValue.innerHTML = "Has ganado";
    contPlayer++;
  } else if (
    (selectOptions.value === "rock" && comp === "paper") ||
    (selectOptions.value === "paper" && comp === "scissors") ||
    (selectOptions.value === "scissors" && comp === "rock")
  ) {
    textValue.innerHTML = "Has perdido";
    contComputer++;
  }
}
function updatePage(){
    player.innerHTML = `Jugardor: ${contPlayer}`;
    computer.innerHTML = `Computadora: ${contComputer}`;
}

function handleClickButton(event) {
  event.preventDefault();
  let compPlayer = transformRandom();
  playGame(compPlayer);
  updatePage();
  resetNumber();
}

playBTn.addEventListener("click", handleClickButton);
