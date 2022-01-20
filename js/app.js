/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const button = document.getElementById('btn__reset');
const keyBoard = document.querySelectorAll('.keyrow');
button.addEventListener('click', e => {
    game = new Game();
    game.startGame();

})
keyBoard.forEach(key => {
    key.addEventListener('click', e => {
        console.log('boom');

    });
});






