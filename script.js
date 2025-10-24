// Base 
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "paper";
  else return "scissors";
}

// Logica
let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById("results");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    checkWinner();
  });
});

function playRound(humanChoice, computerChoice) {
  let resultText = "";

  if (humanChoice === computerChoice) {
    resultText = `It's a tie! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText = `You lose this round! ${computerChoice} beats ${humanChoice}.`;
  }

  updateResults(resultText);
}

function updateResults(text) {
  resultsDiv.innerHTML = `
    <p>${text}</p>
    <p>Player: ${humanScore} | Computer: ${computerScore}</p>
  `;
}

function checkWinner() {
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore > computerScore ? "🏆 You win the game!" : "💀 You lose the game!";
    resultsDiv.innerHTML += `<p><strong>${winner}</strong></p>`;
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach((button) => (button.disabled = true));
}
