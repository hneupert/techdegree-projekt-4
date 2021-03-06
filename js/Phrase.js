/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 */

class Phrase {
 constructor(phrase) {
   this.phrase = phrase.toLowerCase();
 }

 /**
 *  this adds letter placeholders to the display when the game starts.
 *  CSS class for letters and the space CSS class for spaces
 */
 addPhraseToDisplay() {
   const stringLength = this.phrase.length;
   const PhraseContainer = document.getElementById("phrase").querySelector('ul');

   for (let i = 0; i < stringLength; i++) {
     const listElement = document.createElement('li');
     listElement.textContent = this.phrase[i];
     if(this.phrase.charAt(i) === ' ') {
       listElement.className = 'space';
     } else {
        listElement.className = 'hide letter ' + this.phrase[i];
        listElement.a
     }
     PhraseContainer.appendChild(listElement);
   }
 }

/**
 * checks to see if the letter selected by the player matches a letter in the phrase.
 * @param {Element} clickedLetter - The letter, selected by the player
 * @return  {Boolean} Returns true or false depending on a match
 */
 checkLetter(clickedLetter) {
    //console.log('clickedLetter: ' + clickedLetter);
    let letterMatchesPhrase = false;

    //console.log(this.phrase);
    const phraseCharArray = this.phrase.split('');
    phraseCharArray.forEach(element => {
      //console.log('element: ' + element);
      if(element === clickedLetter) {
        this.showMatchedLetter(clickedLetter);
        letterMatchesPhrase = true;
      }
    })

   return letterMatchesPhrase;
 }

/**
* reveals the letter(s) on the board that matches the player's selection.
* To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter
* and replace each selected element's hide CSS class with the show CSS class.
* @param {Element} letterToShow - The letter to reveal
*/
 showMatchedLetter(letterToShow) {
   //console.log("letterToShow: " + letterToShow);
   const letterElementList = document.getElementById('phrase').querySelectorAll('.hide');
   letterElementList.forEach(element => {
     //console.log(element.textContent);
     if (element.textContent === letterToShow) {
       element.classList.remove('hide');
       element.classList.add('show');

       element.classList.add('animated');
       element.classList.add('pulse');
     }
   });
 }
}
