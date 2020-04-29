/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const qwerty = document.querySelector('#qwerty');
 const keyList = qwerty.querySelectorAll('.key');
 const game = new Game();

 /**
  * A click event listener to the "Start Game" button
  * which creates a new Game object and starts the game by
  * calling the startGame() method.
  */
 document.getElementById('btn__reset').addEventListener('click', function(){

    // Start the Game: Create a new instance of the Game class
    game.startGame();
 });

/**
* Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls
* the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid
* having to add an event listener to each individual keyboard button. Clicking the space between and
* round the onscreen keyboard buttons should not result in the handleInteraction() method being called.
*/
qwerty.addEventListener('click', function(clickedElement) {
   if (clickedElement.target.className === 'key') {
     game.handleInteraction(clickedElement.target);
   }
});

// Let players use their physical computer keyboard to enter guesses when the game is active:
  document.addEventListener('keyup', (e) => {
    // If the gameActivity true( false = gameOver or bevor startbutton is clicked)
    if(game.gameActivity) {
      keyList.forEach(element => {
        if (element.textContent == e.key && !element.disabled) {
            game.handleInteraction(element);
            return false;
        }
      });
    } else {
      // if space or enter is pressed, start the Game
      if (e.key === ' ' || e.keyCode === 13) {
        // Start the Game: Create a new instance of the Game class
        game.startGame();
      }
    }
  });
