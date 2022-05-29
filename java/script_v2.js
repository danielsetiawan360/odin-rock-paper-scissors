function computerPlay () {
number = (Math.floor(Math.random()*10)) 
if (number < 4) {
    return 'rock' }
else if (number < 7) {
    return 'paper' }
else {
    return 'scissors' }
}

function condition() {
if (playerSelection == 'rock' && computerSelection == 'rock') {
    let status = 'tie'
    let message = 'It\'s a tie!'
    return[status, message]
}
else if (playerSelection == 'rock'&& computerSelection == 'paper') {
    let status = 'computerWin'
    let message = 'You lose! Paper beats rock.'
    return[status, message]
}
else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    let status = 'playerWin'
    let message = 'You win! Rock beats scissors.'
    return[status, message]
}
else
    return('Nyeh')
}

function start(){
    computerSelection = computerPlay()
    let playerSelectionCase = prompt('What is your choice?','rock')
    playerSelection = playerSelectionCase.toLowerCase()
    let result = condition()
    let status_beta = result[0]
    let message_beta = result[1]
    alert(message_beta)
    return[status_beta]
}

function game() {

    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {

        let whoWin = start()

        if (whoWin == 'playerWin')  {
            totalPlayerScore = ++playerScore
            console.log (totalPlayerScore)
        }
        else if (whoWin == 'computerWin') {
            totalComputerScore = ++computerScore
            console.log (totalComputerScore)
        }
        else if (whoWin == 'tie') {
            alert('And... It\'s a tie!')
        }
    }
        let round = 0
        let totalRound = ++round

        if (totalRound = 5) {
            alert('Finish')
        }
     }

game()