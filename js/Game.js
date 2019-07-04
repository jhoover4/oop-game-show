/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* global Phrase */

class Game {
  constructor() {
    this.imgPath = "./images";
    this.maxLives = 5;
    this.phrases = ["foo", "bar", "cat", "two words", "Three word guess"];

    this._resetGame();
  }

  /**
   * Hides the start screen overlay and sets the chosen phrase.
   */
  startGame() {
    const startOverlay = document.getElementById("overlay");
    startOverlay.style.display = "none";

    this.activePhrase = new Phrase(this._getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Handles the display keyboard button clicks.
   *
   * @param {HTMLButtonElement} button - The clicked button element.
   */
  handleInteractionClick(clickedBtn) {
    const letterVal = clickedBtn.textContent;

    this._handleInteraction(letterVal);
  }

  /**
   * Handles user keyboard presses.
   *
   * @param {string} letterVal
   */
  handleInteractionKeyboard(pressedKey) {
    if (pressedKey.match(/^[a-zA-Z]{1}$/)) {
      this._handleInteraction(pressedKey);
    }
  }

  /**
   * Handles interaction with game.
   *
   * @param {string} letterVal
   * @private
   */
  _handleInteraction(letterVal) {
    if (this.activePhrase.checkLetter(letterVal)) {
      this.activePhrase.showMatchedLetter(letterVal);
      if (this._checkForWin()) {
        this._gameOver(true);
      }
    } else {
      this._removeLife();

      if (this.missed === this.maxLives) {
        this._gameOver(false);
      }
    }
  }

  /**
   * Randomly retrieves one of the phrases stored in the phrases array and returns it.
   *
   * @returns {string}
   * @private
   */
  _getRandomPhrase() {
    const phraseLength = this.phrases.length;
    return this.phrases[Math.floor(Math.random() * phraseLength)];
  }

  /**
   * Removes a life from the scoreboard and replaces a heart image with a "lost" heart.
   *
   * @private
   */
  _removeLife() {
    const lives = document.querySelectorAll(".tries img");

    lives[this.missed].src = `${this.imgPath}/lostHeart.png`;
    this.missed++;
  }

  /**
   * Checks to see if the player has revealed all of the letters in the active phrase.
   *
   * @return {boolean} True if game has been won, false if game wasn't won.
   * @private
   */
  _checkForWin() {
    return document.querySelectorAll(".letter.hide").length === 0;
  }

  /**
   * Displays the original start screen overlay, and updates with a friendly win or loss message.
   *
   * @param {boolean} gameWon - Whether or not the user won the game.
   * @private
   */
  _gameOver(gameWon) {
    const startOverlay = document.getElementById("overlay");
    let gameOverMessage = "";

    if (gameWon) {
      startOverlay.className = "win";
      gameOverMessage = "Great job!";
    } else {
      startOverlay.className = "lose";
      gameOverMessage = "Sorry, better luck next time!";
    }
    startOverlay.style.display = "flex";

    document.getElementById("game-over-message").textContent = gameOverMessage;

    this._resetGame();
  }

  /**
   * Reset all relevant object properties and reset heart images.
   *
   * @private
   */
  _resetGame() {
    this.activePhrase = null;
    this.missed = 0;
    this.gameWon = false;

    this._resetLives();
  }

  /**
   * Replace all game heart images with "live" hearts.
   *
   * @private
   */
  _resetLives() {
    const lives = document.querySelectorAll(".tries img");

    for (const lifeHtml of lives) {
      lifeHtml.src = `${this.imgPath}/liveHeart.png`;
    }
  }
}
