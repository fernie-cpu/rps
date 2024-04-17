/*
As I forgot to commit due to several attemps on this, I'll leave the changes as a comment, for this time:
- create variable to set initial score
- edit playRound to increment score value

- create a winGame function to return the winner
- edit playGame function to create the for loop that should work :(
*/

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];
    // Alternative approach for getting a random item from array

    const random = Math.floor(Math.random() * rpsArray.length);

    const item = rpsArray[random];

    return item;
}

const playRound = (playerSelection, computerSelection) => {

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore += 1;
        return "You win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore += 1;
        return "You win! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore += 1;
        return "You win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore += 1;
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore += 1;
        return "You lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore += 1;
        return "You lose! Scissors beats Paper"
    } else if (computerSelection === playerSelection) {
        return "It's a tie."
    }
    
}

// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
const winGame = () => {
    if (playerScore === 5) {
        return "You win!"
    } else if (computerScore === 5) {
        return "Computer wins!"
    }
}


const playGame = () => {
    let playerSelection = prompt("Enter your choice:").toLowerCase();
    let computerSelection = getComputerChoice();
    for (let i = 0; i < 5; i++) {
        if (playerScore < 5 || computerScore < 5) {
            return playRound(playerSelection, computerSelection);
        } else {
            return winGame();
        }
    }
    console.log(winGame());
 }

console.log(playGame());