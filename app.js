'use strict';


 
let number = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').
value); 
console.log(guess, typeof guess); 

if (!guess) {
// document.querySelector('.message').textContent = 'No Number';
displayMessage('No Number');


} else if (guess === number) {
    displayMessage('Correct number');
//    document.querySelector('.message').textContent = 'Correct number';
   document.querySelector('.number').textContent = number;


   // css backgroundcolor Correct Number
   document.querySelector('body').style.backgroundColor = '#60b347';

   // set highScore
   if(score > highScore) {
       highScore = score;
       document.querySelector('.highscore').textContent = highScore;
   }

    // css number width size 
   document.querySelector('.number').style.width = '30rem';

// When Guess in wrong
}   else if(guess !== number) {
    if (score > 1) {
        displayMessage(guess > number ?'To High': 'To Low');
        // document.querySelector('.message').textContent = guess > number ?'To High': 'To Low' ;
        score--;
        document.querySelector('.score').textContent = score;

        // when guess is to high
         } else {
            displayMessage('You Lost the game');
        // document.querySelector('.message').textContent = 'You Lost the game';
        document.querySelector('.score').textContent = 0;
        }




}




});

document.querySelector('.again').addEventListener('click', function() {
score = 20;
number = Math.trunc(Math.random()* 20) + 1;

})
//button reload full page
function refreshPage(){
    window.location.reload();
} 










 