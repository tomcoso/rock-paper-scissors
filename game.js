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
            outcome = `You both picked ${userValue.toUpperCase()}\nIt's a tie! Both get a point!`;
            userScore += 1;
            computerScore += 1;
            break;
        case val == 'rock' && computerValue == 'scissors':
            outcome = `You picked ${userValue.toUpperCase()} // Computer picked ${computerValue.toUpperCase()}\nUser wins this round!\nRock beats Scissors.`;
            userScore += 1;
            break;
        case val == 'paper' && computerValue == 'rock':
            outcome = `You picked ${userValue.toUpperCase()} // Computer picked ${computerValue.toUpperCase()}\nUser wins this round!\nPaper beats Rock.`;
            userScore += 1;
            break;
        case val == 'scissors' && computerValue == 'paper':
            outcome = `You picked ${userValue.toUpperCase()} // Computer picked ${computerValue.toUpperCase()}\nUser wins this round!\nScissors beat Paper.`;
            userScore += 1;
            break;
        default : 
            outcome = `You picked ${userValue.toUpperCase()} // Computer picked ${computerValue.toUpperCase()}\nUser loses this round!\n${computerValue.toUpperCase()} beats ${userValue.toUpperCase()}.`;
            computerScore += 1;
            break;
    }
    return outcome;
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
main()