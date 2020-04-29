# techdegree-projekt-4

## OOP Game Show App: Phrase Hunter"

* The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
* The player clicks an onscreen keyboard to guess letters in the phrase.
* The letter is disabled on the onscreen keyboard and a player can't select that letter again.
* If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
* If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
* The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

### Step 1/9: Create the Phrase class in the Phrase.js file.
* Create the Phrase class in the Phrase.js file.
* include a constructor that receives a phrase parameter: phrase: This property should be set to the phrase parameter, but converted to all lower case.
* Method in the Phrase Class: addPhraseToDisplay(): adds letter placeholders to the display. Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
* Method in the Phrase Class: checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
* Method in the Phrase Class: showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

* Create the Game class in the Game.js file.
* include a constructor that receives the following properties:
* Property missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
* Property phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
* Property activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
* Method in the Game Class: startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
* Method in the Game Class: getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
* Method in the Game Class: handleInteraction(): It checks to see if the button clicked by the player matches a letter in the phrase:
* * Disable the selected letter’s onscreen keyboard button.
* * If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
* * If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
* Method in the Game Class: removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png imageand increments the missed property. If the player has five missed guesses, then end the game by calling the gameOver() method.
* Method in the Game Class: checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
* Method in the Game Class: gameOver(): displays the original start screen overlay, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
* Method in the Game Class: Resetting the gameboard between games So that clicking the "Start Game" button will successfully load a new game. Remove all li elements from the Phrase ul element. Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes. Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.

* Update the app.js file.
* Create a new instance of the Game class
* Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
* Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. * Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.
