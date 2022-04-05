function runGame(val) {
    computerValue = getValue();
    if (val == computerValue) {
        outcome = "It's a tie! Both get a point!";
        userScore += 1;
        computerScore += 1;

    } else if (val == 'rock' && computerValue == 'scissors') {
        outcome = 'User wins this round!\nRock beats Scissors.';
        userScore += 1;

    } else if (val == 'paper' && computerValue == 'paper') {
        outcome = 'User wins this round!\nPaper beats Rock.';
        userScore += 1;

    } else if (val == 'scissors' && computerValue == 'rock') {
        outcome = 'User wins this round!\nScissors beat Paper.';
        userScore += 1;
        
    }else {
        outcome = `User loses this round!\n${computerValue.toUpperCase()} beats ${userValue.toUpperCase()}.`;
        computerScore += 1;}
}