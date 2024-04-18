let playerScore = 0;
let computerScore = 0;
let result;

const getComputerChoice = () => {
    const rpsArray = ['rock', 'paper', 'scissors'];
    // Alternative approach for getting a random item from array

    const random = Math.floor(Math.random() * rpsArray.length);

    const item = rpsArray[random];

    return item;
}

const playRound = (playerSelection, computerSelection) => {

    if (computerSelection === "rock" && playerSelection === "paper") {
        result =  "You win! Paper beats Rock";
        playerScore++;
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        result = "You win! Scissors beats Paper";
        playerScore++;
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        result = "You win! Rock beats Scissors";
        playerScore++;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        result = "You lose! Paper beats Rock";
        computerScore++;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        result = "You lose! Scissors beats Paper"
        computerScore++;
    } else if (computerSelection === playerSelection) {
        result =  "It's a tie.";
    } 
    console.log(result);
    console.log(playerScore);
    console.log(computerScore);
}

// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
const winGame = () => {
    if (playerScore === 5) {
        return "You win! " + result;
    } else if (computerScore === 5) {
        return "Computer wins!";
    }
}

console.log(winGame())


const playGame = () => {
    for (let i = 0; i < 5; i += 1) {
        let playerSelection = prompt("Enter your choice:").toLowerCase();
        let computerSelection = getComputerChoice();
        if (playerScore <= 5 || computerScore <= 5) {
            playRound(playerSelection, computerSelection);
        } 
    }
 }

console.log(playGame());