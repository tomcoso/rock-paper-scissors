const values = ['Rock', 'Paper', 'Scissors'];
let userValue = null;
let computerValue = null;
let userScore = 0;
let computerScore = 0;
let outcome = null;

function getValue() {
    return Math.floor(Math.random()*3)
}
console.log(getValue());

function runGame(val) {
    computerValue = getValue();
    switch (val) {
        case 0 :
            if (computerValue == 2) {
                outcome = `User wins this round!\n${values[userValue]} beats ${values[computerValue]}.`;
                userScore += 1;
                break;
            }
        case 1 :
            if (computerValue == 0) {
                outcome = `User wins this round!\n${values[userValue]} beats ${values[computerValue]}.`;
                userScore += 1;
                break;
            }
        case 2 :
            if (computerValue == 1) {
                outcome = `User wins this round!\n${values[userValue]} beats ${values[computerValue]}.`;
                userScore += 1;
                break;
            }
        default : 
            outcome = `User loses this round!\n${values[computerValue]} beats ${values[userValue]}.`;
            computerScore += 1;
    }
    return outcome;
}

for (i=0 ; i < 5 ; i++) {
    userValue = parseInt(prompt('Select one to play:\n0 for Rock\n1 for Paper\n2 for Scissors'));
    console.log(`You picked ${values[userValue]}`);
    console.log(runGame(userValue));
    console.log(`Scores\nUser ${userScore}\nComputer ${computerScore}`)
}
if (userScore > computerScore) {
    console.log('User wins the game!')
} else if (userScore < computerScore) {
    console.log('Bad luck! Computer wins this time!')
} else {console.log("It's a tie! What a day!")}