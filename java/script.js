function chooseComputerSelection () {
    number = (Math.floor(Math.random()*10)) 
    if (number < 4) {
        return 'rock' 
    } else if (number < 7) {
        return 'paper'
    } else {
        return 'scissors' }
}

function decideRoundWinner() {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        let status = 'tie'
        let message = 'It\'s a tie'
        return[status, message]
}   else if (playerSelection == 'rock'&& computerSelection == 'paper') {
        let status = 'computerWin'
        let message = 'You lose! Paper beats rock'
        return[status, message]
}   else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        let status = 'playerWin'
        let message = 'You win! Rock beats scissors'
        return[status, message]
}   else if (playerSelection == 'paper' && computerSelection == 'rock') {
        let status = 'playerWin'
        let message = 'You win! Paper beats rocks'
        return[status, message]
}   else if (playerSelection == 'paper' && computerSelection == 'paper') {
        let status = 'tie'
        let message = 'It\'s a tie'
        return[status, message]
}   else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        let status = 'computerWin'
        let message = 'You lose! Scissors beats paper'
        return[status, message]
}   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        let status = 'computerWin'
        let message = 'You win!  Rocks beats scissors'
        return[status, message]
}   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        let status = 'playerWin'
        let message = 'You win! Scissors beats papers'
        return[status, message]
}   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        let status = 'tie'
        let message = 'It\'s a tie'
        return[status, message]
}   else
        totalRound = totalRound-1;
        console.log(totalRound)
        let status = 'invalid'
        let message = 'Please enter rock, paper, or scissors'
        return[status, message]
}

function askForAnswers() {
    computerSelection = chooseComputerSelection()
    let playerSelectionCase = prompt('What is your choice?','')
    if (playerSelectionCase == null) {
        alert('Please enter something')
        totalRound = totalRound-1;
        console.log(totalRound)
        return;
    } else {
        playerSelection = playerSelectionCase.toLowerCase()
    }

    let result = decideRoundWinner()
    let status_beta = result[0]
    let message_beta = result[1]
    alert(message_beta)
    return[status_beta]
}

function startGame() {
    totalPlayerScore = 0
    totalComputerScore = 0
    let playerScore = 0
    let computerScore = 0
    totalRound = 0

    for (;true;) {    
        let whoWin = askForAnswers()
        totalRound = totalRound + 1;
        console.log (totalRound)    

        if (whoWin == 'playerWin')  {
            totalPlayerScore = ++playerScore
        }   else if (whoWin == 'computerWin') {
            totalComputerScore = ++computerScore
        }   if (totalRound == 5) {
            break;
        }
    }

        if (totalPlayerScore > totalComputerScore) {
            alert('You won! Congratulations!')
        } else if (totalComputerScore > totalPlayerScore) {
                alert('Oh no! Computer wins!')
        } else {
            alert('Whoops... It\'s a tie')
        }
     }

startGame()