let options = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
let rounds = 0;
let userScore = 0;
let botScore = 0;
let playerChoice = ''
let compChoice = ''

rock.addEventListener('click', () => {
    game(playRound(0, getComputerChoice()))
})

paper.addEventListener('click', () => {
    game(playRound(1, getComputerChoice()))
})

scissors.addEventListener('click', () => {
    game(playRound(2, getComputerChoice()))
})

function getComputerChoice() {
    
    // Get the computers choice by getting a random int from 0 - 2
    let choice = Math.floor(Math.random() * 3);
    return choice
}

function playRound(playerSelection, getCpuChoice) {
    
    // This function represents a round from the game
    let won = true

    playerChoice = options[playerSelection]
    compChoice = options[getCpuChoice]

    console.log('Your choice: ' + options[playerSelection])
    console.log("Computer's choice: " + options[getCpuChoice])

    if (playerSelection == getCpuChoice) {
        // If the playerChoice and computerChoice are the same, declare a tie
        return 0
    } else {
        if (playerSelection > getCpuChoice) {
            won = true
        } else if (getCpuChoice == 2 && playerSelection == 0) {
            won = true
        } else {
            won = false
        }
    }

    if (won == true) {
        return 1
    } else {
        return 2
    }

}

function game(winner) {
    rounds++;
    if (winner === 1) {
        userScore++
    } else if (winner === 2) {
        botScore++
    }

    const playerScore = document.querySelector('#player-score')
    const compScore = document.querySelector('#comp-score')
    const round = document.querySelector('#round')
    const playChoice = document.querySelector('#player-choice')
    const botChoice = document.querySelector('#comp-choice')
    
    playChoice.innerHTML = playerChoice
    botChoice.innerHTML = compChoice
    round.innerHTML = "Round " + rounds
    playerScore.innerHTML = userScore
    compScore.innerHTML = botScore
}
