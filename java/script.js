onst score = document.querySelector('#score')
const score2 = document.querySelector('#score2')
const news = document.querySelector('#news')

restart()

function restart (){
    finished = false
    totalPlayerScore = 0
    totalComputerScore = 0
    playerScore = 0
    computerScore = 0
    totalRound = 0
    score2.textContent = totalComputerScore;
    score.textContent = totalPlayerScore;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock'
    checkStart();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    checkStart();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = 'scissors'
    checkStart();
});

const restartButton = document.querySelector('#restart')
restartButton.addEventListener('click', () => {
restart()
news.textContent = ''

})


function checkStart() {
            if (finished == false) {  
            let whoWin = askForAnswers()
            totalRound = totalRound + 1; 
    
            if (whoWin == 'playerWin')  {
                totalPlayerScore = ++playerScore
                score.textContent = totalPlayerScore;
            } else if (whoWin == 'computerWin') {
                totalComputerScore = ++computerScore
                score2.textContent = totalComputerScore;
            }
            if (totalPlayerScore == 5) {
                news.textContent = 'You won! Congratulations!'
                finished = true
            }
            if (totalComputerScore == 5) {
                news.textContent = 'Oh no! Computer wins!'
                finished = true
            }
            }
        }

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
        let message = 'You lose!  Rock beats scissors'
        return[status, message]
}   else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        let status = 'playerWin'
        let message = 'You win! Scissors beats papers'
        return[status, message]
}   else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        let status = 'tie'
        let message = 'It\'s a tie'
        return[status, message]
}
}

function askForAnswers() {
    computerSelection = chooseComputerSelection()
    let result = decideRoundWinner()
    let status_beta = result[0]
    let message_beta = result[1]
    news.textContent = message_beta
    return[status_beta]
}
