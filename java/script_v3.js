function chooseComputerSelection () { //req
    number = (Math.floor(Math.random()*10)) 
    if (number < 4) {
        return 'rock' }
    else if (number < 7) {
        return 'paper' }
    else {
        return 'scissors' }
}

function decideRoundWinner() {
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
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        let status = 'playerWin'
        let message = 'You win! Paper beats rocks.'
        return[status, message]
}
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        let status = 'tie'
        let message = 'It\'s a tie!'
        return[status, message]
}
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        let status = 'computerWin'
        let message = 'You lose! Scissors beats paper.'
        return[status, message]
}
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        let status = 'computerWin'
        let message = 'You win!  Rocks beats scissors.'
        return[status, message]
}
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        let status = 'playerWin'
        let message = 'You win! Scissors beats papers.'
        return[status, message]
}
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        let status = 'tie'
        let message = 'It\'s a tie'
        return[status, message]
}
    else
        alert('Please enter a valid input') //!!
}

function askForAnswers() {
    computerSelection = chooseComputerSelection() //req

    let playerSelectionCase = prompt('What is your choice?','') //req
    if (playerSelectionCase == null) {
        alert('Please input rock, paper, or scissors')
        i = i-1;
        console.log(i)
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

function startGame() { //req
    totalPlayerScore = 0 //reset all the scores
    totalComputerScore = 0
    let playerScore = 0
    let computerScore = 0
    let round = 0;
    //reassignment

    for (i = 0; i < 5; i++) {

        let totalRound = round++;

        let whoWin = askForAnswers()

        if (whoWin == 'playerWin')  {
            totalPlayerScore = ++playerScore
        }
        else if (whoWin == 'computerWin') {
            totalComputerScore = ++computerScore
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

startGame() //req