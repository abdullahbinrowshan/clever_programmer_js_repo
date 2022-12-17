const scores = document.getElementById('scores');
// const whoVsWho = document.getElementById('WvsW');
// const winner = document.getElementById('winner');

// console.log(scores.innerText ,whoVsWho.innerText, winner.innerText);

const gameFunction = (human, computer) => {
    // console.log(scores);
    let score
    if (human === computer) {
        score = 0
        scores.innerText = score
    }else if (human == 1 ) {
        score = 2
    }else {
        score = 5
    }
    return score
}

const humanFunction = (value) => {
    const gameArr = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * gameArr.length)
    console.log(gameFunction(value, randomNumber))
    // console.log(randomNumber);
}