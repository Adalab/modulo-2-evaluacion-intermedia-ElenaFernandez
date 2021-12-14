"use strict";

const playBTn = document.querySelector(".js_button");
const selectOptions = document.querySelector(".js_options");
const textValue = document.querySelector(".js_text");
const player = document.querySelector(".js_jugador");
const computer = document.querySelector(".js_computadora");

function getRandom(max) {
  return Math.ceil(Math.random() * max);
}

const numRamdom = getRandom(10);
console.log(getRandom(10));

function playGame() {
  if (numRamdom < 3) {
    return "rock";
  } else if (numRamdom >= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}
function returnOptions(){
    
}

function textAppear() {
  if (selectOptions.value === "choice") {
    textValue.innerHTML = "Escoge una opción.";
  }
}

function handleClickButton(event) {
  event.preventDefault();
  let compPlayer = playGame();
  textAppear();
}

playBTn.addEventListener("click", handleClickButton);
