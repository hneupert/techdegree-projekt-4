/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
 constructor(phrase) {
   this.phrase = phrase.toLowerCase();
 }

 /**
 *  this adds letter placeholders to the display when the game starts.
 * @param   {number} Quantity of Phrases
 * @return  {object} Phrase
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

 checkLetter(clickedLetter) {
    console.log('clickedLetter: ' + clickedLetter);
    let letterMatchesPhrase = false;

    console.log(this.phrase);
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

 showMatchedLetter(letterToShow) {
   console.log("letterToShow: " + letterToShow);
   const letterElementList = document.getElementById('phrase').querySelectorAll('.hide');
   letterElementList.forEach(element => {
     //console.log(element.textContent);
     if (element.textContent === letterToShow) {
       element.classList.remove('hide');
       element.classList.add('show');
     }
   });
 }
}
