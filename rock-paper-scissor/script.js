const scores = document.getElementById('scores');
const whoVsWho = document.getElementById('WvsW');
const winner = document.getElementById('winner');


let score = 0
const gameFunction = (human, computer) => {
    console.log(score);
    if (human === computer) {
        scores.innerText = score
        whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
        winner.innerText = `It's a Draw!`
    } else {
        if (human == 'Rock' && computer == 'Scissor') {
            score++
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Win!`
        } else if (human == 'Rock' && computer == 'Paper') {
            score--
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Lose!`
        } else if (human == 'Paper' && computer == 'Scissor') {
            score--
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Lose!`
        } else if (human == 'Paper' && computer == 'Rock') {
            score++
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Win!`
        } else if (human == 'Scissor' && computer == 'Rock') {
            score--
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Lose!`
        } else if (human == 'Scissor' && computer == 'Paper') {
            score++
            scores.innerText = score
            whoVsWho.innerText = `👶 ${human} vs 🤖 ${computer}`
            winner.innerText = `You Win!`
        }
    }
    return score
}

const humanFunction = (value) => {
    const gameArr = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * gameArr.length)
    console.log(gameFunction(gameArr[value], gameArr[randomNumber]))
}

const resetGame = () => {
    score = 0
    scores.innerText = '';
    whoVsWho.innerText = '';
    winner.innerText = '';
}