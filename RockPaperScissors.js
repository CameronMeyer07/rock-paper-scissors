//Get input from computer

function getComputerChoice(){

    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0){
        console.log('rock');
    } else if (computerChoice == 1){
        console.log('paper');
    } else {
        console.log('scissor');
    }
}
getComputerChoice()

//Get input from player
//Compare the results
//Declare the winner 
//Repeat the game for 5 rounds
//After best of 5 rounds anounce overall winner