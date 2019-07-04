/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;

    this.phraseSection = document.getElementById("phrase");
  }

  /**
   * Creates letter placeholder html when the game starts.
   */
  addPhraseToDisplay() {
    const wordListHtml = document.createElement("ul");

    for (const letter of this.phrase) {
      const letterHtml = document.createElement("li");

      if (letter === " ") {
        letterHtml.classList.add("space");
      } else {
        letterHtml.classList.add("letter");
        letterHtml.classList.add("hide");
        letterHtml.classList.add(letter);
      }
      letterHtml.textContent = letter;

      wordListHtml.appendChild(letterHtml);
    }

    this.phraseSection.replaceChild(
      wordListHtml,
      this.phraseSection.firstElementChild
    );
  }

  /**
   * Checks if passed letter is in phrase.
   *
   * @param {string} letter - The letter to check.
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays a letter on screen after match is found.
   *
   * @param {string} letter - The letter to display.
   */
  showMatchedLetter(letter) {
    const letterBtns = this.phraseSection.querySelectorAll(".letter." + letter);
    letterBtns.forEach(el => {
      el.classList.remove("hide");
      el.classList.add("show");
    });
  }
}
