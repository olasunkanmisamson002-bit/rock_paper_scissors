
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