# rock-paper-scissors
Rock Paper Scissors project from The Odin Project


I followed problem solving standards for the first time, below is the notes I took before I started coding, there is a planing phase and some pseudocode to divide into subproblems (raw view preferable).

Along the way I found out better ways of getting the same outcome, that had less potential problems.

What I learned from this project:
-Pick a random value from an array
-Use the switch statement with multiple conditions per case
-Use for loops
-Use a main function to exit the script if needed
-Manage variables across different stacks



1- create rock paper and scissors variables and associate them with number 1-3
2- Create a function that generates a random value between 1-3
3- create a function that compares a computer value versus player's value
4- create a loop that keeps track of score and goes through 5 rounds


--- 1 ---
ARRAY values is [rock, paper, scissors]
create computerValue variable
create userValue variable
create userScore variable
create computerScore variable

--- 2 ---
FUNCTION getValue {
    RETURN number between [0 and 2] inclusive
}

--- 3 ---
FUNCTION runGame(userValue) {
    computerValue = getValue()
    switch (userValue)
        case userValue equals computerValue,
            RETURN tie
        case userValue 0 check if computerValue is 2,
            userScore plus one
            RETURN user wins
        case userValue 1 check if computerValue is 0,
            RETURN user wins
            userScore plus one
        case userValue 2 check if computerValue is 1,
            RETURN user wins
            userScore plus one
        otherwise 
        computerScore plus one
        RETURN user loses
}

--- 4 ---
FOR (5 instances) {
    userValue = ask user to input 0, 1 or 2
    outcome = runGame(userValue)
    print userValue and computerValue association in the array
    print outcome
    print userScore / computerScore
}
IF (userScore is bigger than computerScore) {
    print User wins!
ELSE print Computer wins!
}
