console.log("START THE GAME\n\n")

function getComputerChoice() {
  let randomNumber = Math.random()
  switch (true) {
    case randomNumber < 0.3333: return 'rock'
    case randomNumber > 0.6666: return 'paper'
    default: return 'scissors'
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Enter your choice\n  1 for rock \n  2 for paper \n  3 for scissors ')
  switch (true) {
    case humanChoice == 1: return 'rock'
    case humanChoice == 2: return 'paper'
    default: return 'scissors'
  }
}

function playGame() {
  
  function playRound(humanChoice, computerChoice) {
    switch (true) {
      case humanChoice == computerChoice: return 'No one'
      case humanChoice == 'rock' && computerChoice == 'paper': return 'Computer'
      case humanChoice == 'rock' && computerChoice == 'scissors': return 'You'
      case humanChoice == 'paper' && computerChoice == 'rock': return 'You'
      case humanChoice == 'paper' && computerChoice == 'scissors': return 'Computer'
      case humanChoice == 'scissors' && computerChoice == 'rock': return 'Computer'
      case humanChoice == 'scissors' && computerChoice == 'paper': return 'You'
      default: return 'Something went wrong!'
    }
  }
  
  let humanScore = 0
  let computerScore = 0

  countGame = 0

  while (true) {
    if (countGame == 5) break
    countGame += 1

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    roundResult = playRound(humanChoice, computerChoice)
    console.log(`\tRound ${countGame}: ${roundResult} won this round!`)

    if (roundResult.toLowerCase() == 'you') humanScore += 1
    else if (roundResult.toLowerCase() == 'computer') computerScore += 1
  } 

  if (humanScore > computerScore) console.log(`\tYou won the game! The score is ${humanScore} - ${computerScore}`)
    else if (humanScore < computerScore) console.log(`\tYou lost the game! The score is ${humanScore} - ${computerScore}`)
  else console.log(`\tEven score! The score is ${humanScore} - ${computerScore}. Try again!`)

}

playGame()
console.log("\nGAME OVER\n\n")