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
            console.log(letter);
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
    
}