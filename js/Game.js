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
            new Phrase('Hitch'),
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
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        const unguessedLetters = document.querySelectorAll('.hide');
        console.log(unguessedLetters);
        if (unguessedLetters.length !== 0) {
            return false;
        } else  if (unguessedLetters.length === 0 && this.missed !== 5){
            return true;
        }   
 }
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        const lives = document.querySelectorAll('.tries');
        this.missed += 1;
        let loseLife = lives[this.missed - 1];
        let image = loseLife.firstElementChild;
        image.src = 'images/lostHeart.png';
    }
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(win) {
        const gameOverMessage = document.getElementById('game-over-message');
        if(win) {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'win';
            gameOverMessage.innerHTML = 'You win! Play again?'
        } else {
            gameOverMessage.parentElement.style.display = '';
            gameOverMessage.parentElement.className = 'lose';
            gameOverMessage.innerHTML = 'You lose! Play again?'
    
        }


    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button) {
//First conditional disables button after clicking
        if(button !== undefined) {
            button.disabled = true;
            console.log('boom');
        }
        if(this.activePhrase.checkLetter(button.innerHTML)){
            this.activePhrase.showMatchedLetter(button.innerHTML); 
            button.classList.add('chosen'); 
        } else {
             button.classList.add('wrong');
            this.removeLife();
         }
        
    };
}