/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.gameActivity = false;
    this.gameTries = 0;
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

  /*
  * hides the start screen overlay,
  * calls the getRandomPhrase() method,
  * sets the activePhrase property with the chosen phrase.
  * It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
  */
  startGame() {
    this.resetGame();

    // Set the gameActivity to true
    this.gameActivity = true;

    // Hide the Start Overlay with the Start-Game Button:
    const startOverlay = document.getElementById('overlay');
    startOverlay.style.display = 'none';

    // call the getRandomPhrase() method and set the activePhrase property with the chosen phrase
      this.activePhrase = this.getRandomPhrase(this.phrases.length);
      //console.log(this.activePhrase);
      this.activePhrase.addPhraseToDisplay();
  }

  /**
  * this method randomly retrieves one of the phrases stored in the phrases array and returns it.
  * @param   {number} Quantity of Phrases
  * @return  {object} Phrase
  */
  getRandomPhrase(phrasesLength) {
    const randomNumber = Math.floor(Math.random() * phrasesLength);
    return this.phrases[randomNumber];
  }

  /**
   * Disable the selected letter’s onscreen keyboard button.
   * If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and
   * call the removeLife() method.
   * If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
   * call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
   * If the player has won the game, also call the gameOver() method.
   * @param   {object} The clicked Key on the keyboard
  */
  handleInteraction(clickedKey) {
    const actualPhrase = this.activePhrase;
    const clickedLetter = clickedKey.textContent;
    //console.log(clickedKey);
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

   clickedKey.classList.add('animated');
    clickedKey.classList.add('pulse');

  }

/**
* Removes a life from the scoreboard, by replacing one of the mages and increments the missed property.
* If the player has five missed guesses, then end the game by calling the gameOver() method.
*
*/
  removeLife() {
    const heartList = document.getElementById('scoreboard').querySelectorAll('img');
    //console.log('heartList[0].src: ' + heartList[0].src);
    heartList[this.missed].src = 'images/lostHeart.png';
    heartList[this.missed].className = 'animated wobble';
    this.missed += 1;
    if (this.missed === 5) {
      //console.log(this.missed + ' missed, go to gameOver');
      this.gameOver();
    }
  }

/**
* this method checks to see if the player has revealed all of the letters in the active phrase.
* @return  {Boolean} if Player has won or not
*/
  checkForWin() {
    let playerHasWon = false;
    const hideLetters = document.querySelectorAll('.hide');
    if (hideLetters.length === 0) {
      playerHasWon = true;
    }
    return playerHasWon;
  }

/**
* displays the original start screen overlay, updates the overlay h1 element with a friendly win or loss message,
* and replaces the overlay’s start CSS class with either the win or lose CSS class.
* reset Game later when new Game starts because of lazy animated classes
* @param   {Boolean} Player has won or has lost
*/
  gameOver(winOrLoose) {
    // Set the gameActivity to false
    this.gameActivity = false;

    //console.log("gmae over");
    const startOverlay = document.getElementById('overlay');
    const gameOverMessageElement = document.getElementById('game-over-message');
    startOverlay.style.display = 'flex';

    let gameOverMessage = 'loose!!';
    if(winOrLoose === 'win') gameOverMessage = "chacka!!"
    gameOverMessageElement.innerHTML = gameOverMessage;

    this.gameTries += 1;

  }

/**
* Resetting the gameboard between games.
* So that clicking the "Start Game" button will successfully load a new game.
* Remove all li elements from the Phrase ul element.
* Enable all of the onscreen keyboard buttons
* and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
* Reset all of the heart images in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
*/
  resetGame() {
    // Change text with Number of Attemps
    document.getElementById('btn__reset').innerHTML = 'Start Game Again the ' + (this.gameTries + 1) + '. Time';

    // Delete played List
    const element = document.getElementById("phrase").querySelector('ul');
    //console.log("Delete played List:" + element);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    // Reset this.missed and hearts
    const heartList = document.getElementById('scoreboard').querySelectorAll('img');
    this.missed = 0;
    heartList.forEach(element => {
      element.src = 'images/liveHeart.png';
      element.classList.remove('animated');
      element.classList.remove('wobble');
    });

    // reset KeyButtons
    const keyButtonList = document.getElementById("qwerty").querySelectorAll('.key');
    keyButtonList.forEach(element => {
      //console.log('element: ' + element);
      element.className = "key";
      element.disabled = false;
    });
  }
}
