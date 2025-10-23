// Funciones base
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

// función para pedir elección del usuario, con validación
function getHumanChoice(roundNumber) {
  let choice = prompt(`Ronda ${roundNumber}/5: Elegí rock, paper o scissors`);
  if (!choice) return null;
  choice = choice.toLowerCase();

  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert("❌ Elección inválida. Escribí: rock, paper o scissors");
    return getHumanChoice(roundNumber); // vuelve a pedir si se escribió mal
  }

  return choice;
}

// Acá está el juego
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  function playRound(humanChoice, computerChoice) {
    console.log(`Humano: ${humanChoice} | CPU: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("🤝 Empate, ambos eligieron " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`✅ Ganaste esta ronda! ${humanChoice} vence a ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`❌ Perdiste esta ronda! ${computerChoice} vence a ${humanChoice}`);
    }

    console.log(`📊 Puntaje: Humano ${humanScore} - CPU ${computerScore}`);
    console.log("--------------------------");
  }

  function playNextRound() {
    if (round > 5) {
      console.log("🏁 Final del partido!");
      if (humanScore > computerScore) {
        console.log("🔥 Ganaste el juego! Sos campeón!");
      } else if (computerScore > humanScore) {
        console.log("😤 Perdiste! La próxima levantamos!");
      } else {
        console.log("😅 Empate, como un clásico trabado!");
      }
      return;
    }

    const humanSelection = getHumanChoice(round);
    if (humanSelection === null) {
      console.log("🚪 Juego cancelado por el jugador.");
      return;
    }

    const computerSelection = getComputerChoice();
    console.log(`--- Ronda ${round} ---`);
    playRound(humanSelection, computerSelection);

    round++;

    setTimeout(playNextRound, 100);
  }

  playNextRound();
}

// Arranca la partida
playGame();
