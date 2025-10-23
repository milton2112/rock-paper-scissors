// Funciones de ayuda
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("Elegí: rock, paper o scissors");
  return choice.toLowerCase();
}

// Acá está todo el juego
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("Empate, ambos eligieron " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`Ganaste esta ronda! ${humanChoice} vence a ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`Perdiste esta ronda! ${computerChoice} vence a ${humanChoice}`);
    }

    console.log(`Puntaje: Humano ${humanScore} - CPU ${computerScore}`);
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Ronda ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("🏁 Final del partido!");
  if (humanScore > computerScore) {
    console.log("🔥 Ganaste el juego! Sos campeón!");
  } else if (computerScore > humanScore) {
    console.log("😤 Perdiste! La próxima levantamos!");
  } else {
    console.log("😅 Empate, como un clásico trabado!");
  }
}

// Arranca el juego
playGame();