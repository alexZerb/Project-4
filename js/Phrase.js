/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const ul = document.querySelector('#phrase').firstElementChild;
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach(letter => {
            const li = document.createElement('li');
            li.innerHTML = letter;
            if(letter === ' ') {
                ul.appendChild(li);
                li.classList.add('space');
                li.textContent = letter;
           } else {
                ul.appendChild(li);   
                li.classList.add('hide');
                li.classList.add('letter');
                li.textContent = `${letter}`;
           }
       })
        
    };
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        const ul = document.getElementById('phrase');
        const lis = ul.getElementsByTagName('li');
        for(let i = 0; i < lis.length; i++){
            if(lis[i].textContent === letter){
                lis[i].classList.add('show');
                lis[i].classList.remove('hide');
            }
        }        
     }
}