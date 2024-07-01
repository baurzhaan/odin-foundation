function getComputerChoice() {
  let randomNumber = Math.random();
  switch (true) {
    case randomNumber < 0.3334: return 'rock';
    case randomNumber > 0.6666: return 'paper';
    default: return 'scissors';
  };
};

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case humanChoice == computerChoice: return 'No one';
    case humanChoice == 'rock' && computerChoice == 'paper': return 'Computer';
    case humanChoice == 'rock' && computerChoice == 'scissors': return 'You';
    case humanChoice == 'paper' && computerChoice == 'rock': return 'You';
    case humanChoice == 'paper' && computerChoice == 'scissors': return 'Computer';
    case humanChoice == 'scissors' && computerChoice == 'rock': return 'Computer';
    case humanChoice == 'scissors' && computerChoice == 'paper': return 'You';
    default: return 'Something went wrong!';
  };
};

function playGame(event) {
    console.log(event.target.textContent);
    if (countGame >= 5) return 0;
    playerMove.textContent = btnRock.textContent;
    countGame += 1;
    roundLabel.textContent = countGame;
    let computerMove = getComputerChoice();
    computerMoveLabel.textContent = computerMove;
    let roundWinner = playRound(btnRock.textContent.toLowerCase(), computerMove.toLowerCase());
  
    if (roundWinner.toLowerCase() == 'you') {
      humanScore += 1;
      playerScoreLabel.textContent = humanScore;
    } else if (roundWinner.toLowerCase() == 'computer') {
      computerScore += 1;
      computerScoreLabel.textContent = computerScore;
    };
  
    if (countGame == 5) {
      if (humanScore > computerScore) {
        gameResult.textContent = `\tYou won the game! The score is ${humanScore} - ${computerScore}`;
      } else if (humanScore < computerScore) {
        gameResult.textContent = `\tYou lost the game! The score is ${humanScore} - ${computerScore}`;
      } else {
        gameResult.textContent = `\tEven score! The score is ${humanScore} - ${computerScore}. Try again!`;
      };
      btnRock.disabled = true;
  };
};

let humanScore = 0;
let computerScore = 0;
let countGame = 0;

const roundLabel = document.getElementById("round");
const playerMove = document.getElementById("playerMove");
const computerMoveLabel = document.getElementById("computerMoveLabel");
const playerScoreLabel = document.getElementById("playerScoreLabel");
const computerScoreLabel = document.getElementById("computerScoreLabel");
const gameResult = document.getElementById("gameResult");

const btnRock = document.getElementById("btnRock");
btnRock.addEventListener('click', playGame);