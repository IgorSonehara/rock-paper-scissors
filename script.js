function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let choice = computerChoice[Math.floor(Math.random()*computerChoice .length)];
    return choice
}

function getPlayerChoice() {
    let play = prompt("Rock, Paper or Scissors?:");

    return play;
}

function playRound(getPlayerChoice, getComputerChoice) {
    let playerSelection = getPlayerChoice.toLowerCase();
    let result = -1;

    if (playerSelection == "rock") {
        if (getComputerChoice == "paper") {
            console.log("You Lose! Paper beats Rock");
            result = 0;
        }
        else if (getComputerChoice == "scissors") {
            console.log("You Win! Rock beats Scissors");
            result = 1;
        }
        else {
            console.log("Draw!");
        }
    }
    else if (playerSelection == "paper") {
        if (getComputerChoice == "rock") {
            console.log("You Win! Paper beats Rock");
            result = 1;
        }
        else if (getComputerChoice == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            result = 0;
        }
        else {
            console.log("Draw!");
        }                    
    }
    else {
        if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            result = 0;
        }
        else if (computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
            result = 1;
        }
        else {
            console.log("Draw!");
        }                      
    }

    return result;
}

function game() {
    let score = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (var i = 0; i < 5; i++) {
        score = 0;
        score = playRound(getPlayerChoice(), getComputerChoice())
        if (score == 1) {
            playerScore++;
        }
        else if (score == 0) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You Win!!!");
    }
    else if (computerScore > playerScore) {
        console.log("You Lose!!!");
    }
    else {
        console.log("Draw!!!");
    }
}

game();