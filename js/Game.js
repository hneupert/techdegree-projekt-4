/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
 * Create all Phrases
 * @return {array}  Array of Phrases.
 */
createPhrases() {
      const phrases = [];
      phrases.push(new Phrase('Gewinnen Sie einen Preis'));
      phrases.push(new Phrase('Der Mars scheint heute besonders helle'));
      phrases.push(new Phrase('Wieviel Uhr ist es'));
      phrases.push(new Phrase('Ist es wirklich schon so spaet'));
      phrases.push(new Phrase('Gleich ist das Spiel vorbei'));
      return phrases;
  }

  startGame() {

    // Hide the Start Overlay with the Start-Game Button:
    const startOverlay = document.getElementById('overlay');
    startOverlay.style.display = 'none';

    // call the getRandomPhrase() method and set the activePhrase property with the chosen phrase
      this.activePhrase = this.getRandomPhrase(this.phrases.length);
      console.log(this.activePhrase);
      this.activePhrase.addPhraseToDisplay();
  }

  /**
  * this method randomly retrieves one of the phrases stored in the phrases array and returns it.
  * @param   {number} Quantity of Phrases
  * @return  {object} Phrase
  */
  getRandomPhrase(phraselength) {
    const randomNumber = Math.floor(Math.random() * phraselength);
    return this.phrases[randomNumber];
  }

/*
* Disable the selected letter’s onscreen keyboard button.
* If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and
* call the removeLife() method.
* If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
* call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
* If the player has won the game, also call the gameOver() method.
*/
  handleInteraction(clickedKey) {
    const actualPhrase = this.activePhrase;
    const clickedLetter = clickedKey.textContent;

    // Disable the selected letter’s onscreen keyboard button.
    clickedKey.setAttribute('disabled', true);

    // Check if key matches in phrase
    const keyMatchesPhrase = actualPhrase.checkLetter(clickedLetter);
    if(keyMatchesPhrase) {
      clickedKey.classList.add('chosen');
      const hasWon = this.checkForWin();
      if(hasWon) this.gameOver('win');
    } else {
      clickedKey.classList.add('wrong');
      this.removeLife();
    }

  }

  removeLife() {
    const heartList = document.getElementById('scoreboard').querySelectorAll('img');
    console.log('heartList[0].src: ' + heartList[0].src);
    heartList[this.missed].src = 'images/lostHeart.png';
    this.missed += 1;
    if (this.missed === 5) {
      console.log(this.missed + ' missed, go to gameOver');
      this.gameOver();
    }
  }

  checkForWin() {
    let playerHasWon = false;
    const hideLetters = document.querySelectorAll('.hide');
    if (hideLetters.length === 0) {
      playerHasWon = true;
    }

    return playerHasWon;
  }

  gameOver(winOrLoose) {
    console.log("gmae over");
    const startOverlay = document.getElementById('overlay');
    const gameOverMessageElement = document.getElementById('game-over-message');
    startOverlay.style.display = 'flex';

    let gameOverMessage = 'loose!!';
    if(winOrLoose === 'win') gameOverMessage = "chacka!!"

    gameOverMessageElement.innerHTML = gameOverMessage;

    this.resetGame();
  }

  resetGame() {

    // reset KeyButtons
    const keyButtonList = document.getElementById("qwerty").querySelectorAll('.key');
    keyButtonList.forEach(element => {
      element.classList.remove("wrong");
      element.classList.remove("chosen");
      element.disabled = false;
    });

    // Delete played List
    const element = document.getElementById("phrase").querySelector('ul');
    console.log("Delete played List:" + element);
    while (element.firstChild) {
      console.log(element);
      element.removeChild(element.firstChild);
    }

    // Reset this.missed and hearts
    const heartList = document.getElementById('scoreboard').querySelectorAll('img');
    this.missed = 0;
    heartList.forEach(element => {
      element.src = 'images/liveHeart.png';
    });

  }
}
