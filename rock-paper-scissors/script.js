let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function playRound(playerChoice) {
    computerSelection = getComputerChoice();
    playerSelection = playerChoice.toLowerCase();
    result = "tie"
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result = "lose"
        } else if (computerSelection == "scissors") {
            result = "win"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            result = "lose"
        } else if (computerSelection == "rock") {
            result = "win"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "lose"
        } else if (computerSelection == "paper") {
            result = "win"
        }
    }
    updateScores(result);
    updateRoundStatus(playerSelection, computerSelection, result);
}

function updateScores(result) {
    if (result == "lose") {
        computerScore++;
    } else if (result == "win") {
        playerScore++;
    }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
}

function updateRoundStatus(playerSelection, computerSelection, result) {
    roundMessage = `You played ${playerSelection}, computer played ${computerSelection}.`
    document.getElementById("roundResult").innerHTML = `${roundMessage} You ${result}!`;

    roundNumber++;
    if (roundNumber > 5) {
        endGame();
    } else {
        document.getElementById("roundNumber").innerHTML = roundNumber;
    }
}

function endGame() {
    if (playerScore > computerScore) {
        document.getElementById("finalResult").innerHTML = "You won the game!";
    } else if (playerScore < computerScore) {
        document.getElementById("finalResult").innerHTML = "You lost the game!";
    } else {
        document.getElementById("finalResult").innerHTML = "It's a tie!";
    }
    document.getElementById("end").style.display = "block";
    document.getElementById("game").style.display = "none";
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("roundNumber").innerHTML = roundNumber;
    document.getElementById("roundResult").innerHTML = "";
    document.getElementById("finalResult").innerHTML = "";
    document.getElementById("end").style.display = "none";
    document.getElementById("game").style.display = "block";
}