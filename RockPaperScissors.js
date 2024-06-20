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

// Function to play game

function playRound(humanChoice, computerChoice){
        let humanWin = `You win! ${humanChoice} beats ${computerChoice}!`;
        let computerWin = `You lose! ${computerChoice} beats ${humanChoice}!`;

        if (humanChoice == computerChoice){
        console.log("It's a draw!");
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(humanWin);
        return 'humanWin';
        } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log(computerWin);
        return 'computerWin'
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(humanWin);
        return 'humanWin';
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log(computerWin);
        return 'computerWin';
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log(computerWin);
        return 'computerWin';
        } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log(humanWin); 
        return 'humanWin';
    }
} 

function playGame(){

// Score variables

let humanScore = 0;
let computerScore = 0;

let humanWin = `You win! ${getHumanChoice} beats ${getComputerChoice}!`;
let computerWin = `You lose! ${getComputerChoice} beats ${getHumanChoice}!`;

for (let i=0; i<5; i++){
    let resultRound = playRound(getHumanChoice(), getComputerChoice());
       if (resultRound === 'humanWin'){
        humanScore+= 1;
        console.log(`human:${humanScore} computer:${computerScore}`);
    } else if (resultRound === 'computerWin'){
        computerScore+= 1;
        console.log(`human:${humanScore} computer:${computerScore}`);
    } else {
        console.log(`human:${humanScore} computer:${computerScore}`)
    }
}
    if(humanScore > computerScore){
        alert (`You win! Scores human:${humanScore} computer:${computerScore}`);
    } else if(humanScore < computerScore){
        alert (`You lose! Scores human:${humanScore} computer:${computerScore}`);
    } else {
        alert (`It's a draw! Scores human:${humanScore} computer:${computerScore}`)
    }
}
playGame(); 
   
// Recurring rounds for game
// End game