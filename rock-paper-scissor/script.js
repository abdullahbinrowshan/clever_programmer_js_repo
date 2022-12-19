const getById = (ID) => {
    const element = document.getElementById(ID);
    return element
}


let score = 0
const startGame = (player, computer) => {
    if (player === computer) {
        score = 0
    } else {
        if (player == 'Rock' && computer == 'Scissor') {
            score = 1
        } else if (player == 'Paper' && computer == 'Rock') {
            score = 1
        } else if (player == 'Scissor' && computer == 'Paper') {
            score = 1
        } else {
            score = -1
        }
    }
    return { score, player, computer }
}

const showResult = (scoreResult, playerChoice, computerChoice, winner) => {
    getById('scores').innerText = scoreResult
    getById('WvsW').innerText = `👶 ${playerChoice} vs 🤖 ${computerChoice}`
    getById('winner').innerText = `${winner}!`
}

let scoreResult = 0
const getResult = (score, player, computer) => {
    if (score == 0) {
        showResult(scoreResult, player, computer, "It's a Draw")
    } else if (score == 1) {
        scoreResult++
        showResult(scoreResult, player, computer, 'You Win')
    } else {
        scoreResult--
        showResult(scoreResult, player, computer, 'You Lose')
    }
}

const resetGame = () => {
    scoreResult = 0
    getById('scores').innerText = ''
    getById('WvsW').innerText = ''
    getById('winner').innerText = '';
}

const playerChoice = (value) => {
    const gameArr = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * gameArr.length)
    const { score, player, computer } = startGame(gameArr[value], gameArr[randomNumber])
    getResult(score, player, computer)
}