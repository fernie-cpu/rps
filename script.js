const rpsArray = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    // Alternative approach for getting a random item from array

    const random = Math.floor(Math.random() * rpsArray.length);

    const item = rpsArray[random];

    return item;
}

const playRound = (playerSelection, computerSelection) => {

    if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        return "You lose! Paper beats Rock";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors beats Paper"
    } else if (computerSelection === playerSelection) {
        return "It's a tie."
    }
}

const playerSelection = prompt("Enter your choice:");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);

// const playGame = () => {
//     for (let i = 0; i < 5; i++) {
//         return playRound();
//     }
// }

// console.log(playGame());