/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.activePhrase = 'null';
        this.phrases = [
            new Phrase ('I am legend'), 
            new Phrase ('Men in black'), 
            new Phrase('Bad boys'),
            new Phrase('Enemy of the state'),
            new Phrase('Independance day')
        ];
    }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
       const phraseIndex = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[phraseIndex];
       
    };

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
       document.querySelector('#overlay').style.display = 'none'; 
       const phrase = this.getRandomPhrase();
       phrase.addPhraseToDisplay();
       this.activePhrase = phrase;
    };
}