const values = ['rock', 'paper', 'scissors'];
let userValue = null;
let computerValue = null;
let userScore = 0;
let computerScore = 0;
let outcome = null;

function getValue() {
    return values[Math.floor(Math.random()*3)];
}

function runGame(val) {
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
}

function main() {
    for (i=0 ; i < 5 ; i++) {
    userValue = (prompt('Select Rock, Paper, or Scissors to play!')).toLowerCase();

    if (userValue != 'rock' && userValue != 'paper' && userValue != 'scissors') {
        console.log('Bad input, start over!');
        return;
    }

    console.log(runGame(userValue));
    console.log(`Scores  U: ${userScore}  //  C: ${computerScore}`)
    }
    if (userScore > computerScore) {
        console.log('User wins the game!')
    } else if (userScore < computerScore) {
        console.log('Bad luck! Computer wins this time!')
    } else {console.log("It's a tie! What a day!")}
}
//main()

const scoretext = document.querySelector('#scoretext');
const htmlPlayerScore = document.querySelector('#playerscore');
const htmlComputerScore = document.querySelector('#computerscore');
const buttons = document.querySelectorAll('.playerselection');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        runGame(button.id);
        htmlPlayerScore.innerText = userScore;
        htmlComputerScore.innerText = computerScore;
    })
})


