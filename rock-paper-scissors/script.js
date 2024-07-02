function getComputerChoice() {
  let randomNumber = Math.random();
  switch (true) {
    case randomNumber < 0.3334: return 'rock';
    case randomNumber > 0.6666: return 'paper';
    default: return 'scissors';
  };
};

function playRound(playerMove, computerMove) {
  switch (true) {
    case playerMove == computerMove: return 'draw';
    case playerMove == 'rock' && computerMove == 'paper': return 'computer';
    case playerMove == 'rock' && computerMove == 'scissors': return 'player';
    case playerMove == 'paper' && computerMove == 'rock': return 'player';
    case playerMove == 'paper' && computerMove == 'scissors': return 'computer';
    case playerMove == 'scissors' && computerMove == 'rock': return 'computer';
    case playerMove == 'scissors' && computerMove == 'paper': return 'player';
    default: return 'ERROR!';
  };
};

function playGame() {
    if (roundCount >= 5) return 0;
    playerMoveLabel.textContent = this.textContent.toLowerCase();
    roundCount += 1;
    roundCountLabel.textContent = roundCount;
    let computerMove = getComputerChoice();
    computerMoveLabel.textContent = computerMove;
    let roundWinner = playRound(this.textContent.toLowerCase(), computerMove);

    if (roundWinner == 'player') {
      playerScore += 1;
      playerScoreLabel.textContent = playerScore;
    } else if (roundWinner == 'computer') {
      computerScore += 1;
      computerScoreLabel.textContent = computerScore;
    };
  
    if (roundCount == 5) {
      if (playerScore > computerScore) {
        gameResult.textContent = `\t${playerScore} - ${computerScore}. Player wins!`;
      } else if (playerScore < computerScore) {
        gameResult.textContent = `\t${computerScore} - ${playerScore}. Computer wins!`;
      } else {
        gameResult.textContent = `\t${playerScore} - ${computerScore}. Draw!`;
      };
      btnRock.disabled = true;
      btnPaper.disabled = true;
      btnScissors.disabled = true;
  };
};

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

const roundCountLabel = document.getElementById("roundCount");
const playerMoveLabel = document.getElementById("playerMoveLabel");
const computerMoveLabel = document.getElementById("computerMoveLabel");
const playerScoreLabel = document.getElementById("playerScoreLabel");
const computerScoreLabel = document.getElementById("computerScoreLabel");
const gameResult = document.getElementById("gameResultLabel");

const btnRock = document.getElementById("btnRock");
btnRock.addEventListener("click", playGame);
const btnPaper = document.getElementById("btnPaper");
btnPaper.addEventListener("click", playGame);
const btnScissors = document.getElementById("btnScissors");
btnScissors.addEventListener("click", playGame);

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", () => {
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  
  roundCount = 0;
  playerScore = 0;
  computerScore = 0;
  
  roundCountLabel.textContent = 0;
  playerMoveLabel.textContent = "---";
  computerMoveLabel.textContent = "---";
  playerScoreLabel.textContent = 0;
  computerScoreLabel.textContent = 0;
  gameResult.textContent = "---";
});