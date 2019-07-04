/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* global Game */

const game = new Game();

document.getElementById("btn__reset").addEventListener("click", () => {
  game.startGame();
});

document.getElementById("qwerty").addEventListener("click", e => {
  game.handleInteractionClick(e.target);
});

document.addEventListener("keyup", e => {
  game.handleInteractionKeyboard(e.key);
});
