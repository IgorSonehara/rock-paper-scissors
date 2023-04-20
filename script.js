const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    let choice = computerChoice[Math.floor(Math.random()*computerChoice .length)];
    return choice
}

function playRound(getPlayerChoice, getComputerChoice) {
    let playerSelection = getPlayerChoice;
    let result = -1;    
    const container = document.querySelector('#results');
    const content = document.createElement('div');
    content.classList.add('content');
    
    if (playerSelection == "rock") {
        if (getComputerChoice == "paper") {
            content.textContent = 'You Lose! Paper beats Rock';
            result = 0;
        }
        else if (getComputerChoice == "scissors") {
            content.textContent = 'You Win! Rock beats Scissors';
            result = 1;
        }
        else {
            content.textContent = 'Draw!';
        }
    }
    else if (playerSelection == "paper") {
        if (getComputerChoice == "rock") {
            content.textContent = 'You Win! Paper beats Rock';
            result = 1;
        }
        else if (getComputerChoice == "scissors") {
            content.textContent = 'You Lose! Scissors beats Paper';
            result = 0;
        }
        else {
            content.textContent = 'Draw!';
        }                    
    }
    else {
        if (getComputerChoice == "rock") {
            content.textContent = 'You Lose! Rock beats Scissors';
            result = 0;
        }
        else if (getComputerChoice == "paper") {
            content.textContent = 'You Win! Scissors beats Paper';
            result = 1;
        }
        else {
            content.textContent = 'Draw!';
        }                      
    }
    container.appendChild(content);

    return result;
}

let playerScore = 0;
let computerScore = 0;

function game(playerChoice, computerChoice) {
    let score = playRound(playerChoice, computerChoice);
    if (score == 1) {
        playerScore++;
    }
    else if (score == 0) {
        computerScore++;
    }

    const container = document.querySelector('#live-score');
    const content = document.createElement('div');
    content.classList.add('content');
    
    if (playerScore == 3) {
        content.textContent = 'You Win!!!';
    }
    else if (computerScore == 3) {
        content.textContent = 'Computer Win!!';
    }
    container.appendChild(content);
}

btnRock.addEventListener('click', () => {
    game('rock', getComputerChoice());
});

btnPaper.addEventListener('click', () => {
    game('paper', getComputerChoice());
});

btnScissors.addEventListener('click', () => {
    game('scissors', getComputerChoice());
});