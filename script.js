
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userInput = prompt("Enter your choice (rock, paper, or scissors):");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  const userInput = prompt("Choose rock, paper, or scissors:");
  return userInput.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${computerChoice}`);
    return;
  }

  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (beats[humanChoice] === computerChoice) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${computerChoice}`);
      return;
    }

    const beats = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    if (beats[humanChoice] === computerChoice) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`Game over! You win ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`Game over! Computer wins ${computerScore} to ${humanScore}`);
  } else {
    console.log(`Game over! It's a tie, ${humanScore} to ${computerScore}`);
  }
}

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const results = document.querySelector("#results");

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    const message = document.createElement("p");
    message.textContent = `Tie! You both chose ${playerSelection}.`;
    results.appendChild(message);
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const message = document.createElement("p");

  if (winConditions[playerSelection] === computerSelection) {
    message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  results.appendChild(message);
}

// 1. Add event listeners to the buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function () {
  playRound("Rock", computerPlay());
});

paperButton.addEventListener("click", function () {
  playRound("Paper", computerPlay());
});

scissorsButton.addEventListener("click", function () {
  playRound("Scissors", computerPlay());
});