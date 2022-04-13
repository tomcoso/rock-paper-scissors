const values = ['rock', 'paper', 'scissors'];
let userValue = null;
let computerValue = null;
let userScore = 0;
let computerScore = 0;
let outcome = null;
let terminate = null;

function getValue() {
    return values[Math.floor(Math.random()*3)];
}

// Because removeEventListener wouldn't work with anonymous functions
function checkWinner() {
    if (userScore === 5) {
        scoretext.innerText = 'Game over!'
        header.innerText = 'Player Wins!'
        terminate = 1;
        return;
    }else if(computerScore === 5) {
        scoretext.innerText = 'Game over!'
        header.innerText = 'Computer wins!'
        terminate = 1;
        return;
    }
}

function runGame(val) {
    if (terminate) { 
        return;
    }
    computerValue = getValue();
    switch (true) {
        case val == computerValue:
            outcome = 'Tie!';
            break;
        case val == 'rock' && computerValue == 'scissors':
            outcome = 'Player Wins';
            userScore += 1;
            break;
        case val == 'paper' && computerValue == 'rock':
            outcome = 'Player Wins';
            userScore += 1;
            break;
        case val == 'scissors' && computerValue == 'paper':
            outcome = 'Player Wins';
            userScore += 1;
            break;
        default : 
            outcome = 'Computer Wins';
            computerScore += 1;
            break;
    }
    scoretext.innerText = outcome;
    htmlPlayerScore.innerText = userScore;
    htmlComputerScore.innerText = computerScore;
    playerSelection.innerText = val.toUpperCase();
    computerSelection.innerText = computerValue.toUpperCase();
    checkWinner();
}

const scoretext = document.querySelector('#scoretext');
const htmlPlayerScore = document.querySelector('#playerscore');
const htmlComputerScore = document.querySelector('#computerscore');
const buttons = document.querySelectorAll('.playerselection');
const playerSelection = document.querySelector('#player');
const computerSelection = document.querySelector('#computer');
const restartBtn = document.querySelector('#restart');
const header = document.querySelector('#header');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        runGame(button.id);
    })
})

restartBtn.addEventListener('click', () => {location.reload()});