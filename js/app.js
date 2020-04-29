/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const game = new Game();

 //addEventListener('click'
 //addEventListener('click'

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
document.querySelector('#qwerty').addEventListener('click', function(clickedElement) {
   if (clickedElement.target.className === 'key') {
     game.handleInteraction(clickedElement.target);
   }
});
