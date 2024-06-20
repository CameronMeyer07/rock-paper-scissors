// Computer input function

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
        if (choice === 0){
        return "rock";
    } else if (choice === 1){
        return "scissors";
    } else {
        return "paper";
    }
}
// User input function

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors?", "");
    choice = choice.toLowerCase();
    return choice;
}
// Score variables

let humanScore = 0;
let computerScore = 0;

// Function to play game

function playRound(humanChoice, computerChoice){
    let humanWin = `You win! ${humanChoice} beats ${computerChoice}!`;
    let computerWin = `You lose! ${computerChoice} beats ${humanChoice}!`;

    if (humanChoice == computerChoice){
        console.log("It's a draw!");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(humanWin);
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log(computerWin);
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(humanWin);
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log(computerWin);
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log(computerWin);
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log(humanWin);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Recurring rounds for game
// End game