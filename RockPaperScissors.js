const selections = ["🪨", "✋", "✂️"];
const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");
const roundResult = document.querySelector(".roundResult");
const yourScoreDisplay = document.querySelector("#yourScoreDisplay");
const compScoreDisplay = document.querySelector("#compScoreDisplay");
let playerScore = 0;
let oppScore = 0;


function playGame(yourChoice) {

    const compChoice = selections[Math.floor(Math.random() * 3)];
    let result = "";
    const playerWin = `You win! ${yourChoice} beats ${compChoice}`
    const compWin = `You lose! ${compChoice} beats ${yourChoice}`;
        if (playerScore < 5 && oppScore < 5){
       if(yourChoice === compChoice)
        {
        result = "It's a tie!";
         } else {
        switch(yourChoice){

            case "🪨":
                result = (compChoice === '✂️') ? `${playerWin}` : `${compWin}`;
                break;

            case "✋":
                result = (compChoice === '🪨') ? `${playerWin}` : `${compWin}`;
                break;

            case "✂️":
                result = (compChoice === '✋') ? `${playerWin}` : `${compWin}`;
                break
                
        }
    }
    
    switch(result){
        case `${playerWin}`:
            playerScore++;
            yourScoreDisplay.textContent = playerScore;
            break;

        case `${compWin}`:
            oppScore++;
            compScoreDisplay.textContent = oppScore;
            break;

    }

    yourScore.textContent = `PLAYER: ${playerScore}`;
    compScore.textContent = `COMPUTER: ${oppScore}`;
    roundResult.textContent = result;
} else {
    if(playerScore === 5){
        roundResult.textContent = 'You Win!';
    } else if(oppScore === 5){
        roundResult.textContent = 'You Lose!';
    } else {
        roundResult.textContent = "It's a Draw!"
    }
}

};


