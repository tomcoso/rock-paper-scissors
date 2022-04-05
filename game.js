values = ['Rock', 'Paper', 'Scissors'];
let userValue = null;
let computerValue = null;
let userScore = 0;
let computerScore = 0;
let outcome = null;

function getValue() {
    return Math.floor(Math.random()*3)
}
console.log(getValue());

function runGame(userValue) {
    computerValue = getValue();
    switch (userValue) {
        case 0 :
            if (computerValue == 2) {
                outcome = 'User wins this round!';
                userScore =+ 1;
                break;
            }
        case 1 :
            if (computerValue == 0) {
                outcome = 'User wins this round!';
                userScore =+ 1;
                break;
            }
        case 2 :
            if (computerValue == 1) {
                outcome = 'User wins this round!';
                userScore =+ 1;
                break;
            }
        default : 
            outcome = 'User loses this round!';
            computerScore += 1;
    }
    return outcome;
}

