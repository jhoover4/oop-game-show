/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* global Game */

const game = new Game();

document.getElementById("btn__reset").addEventListener("click", () => {
  game.startGame();
});

document.getElementById("qwerty").addEventListener("click", e => {
  const clickedElement = e.target;

  if (
    clickedElement.classList.contains("key") &&
    !clickedElement.classList.contains("chosen")
  ) {
    game.handleInteractionClick(clickedElement);
  }
});

document.addEventListener("keyup", e => {
  game.handleInteractionKeyboard(e.key);
});
