// const getById = (ID) => {
//     const element = document.getElementById(ID);
//     return element
// }


// let score = 0
// const startGame = (player, computer) => {
//     if (player === computer) {
//         score = 0
//     } else {
//         if (player == 'Rock' && computer == 'Scissor') {
//             score = 1
//         } else if (player == 'Paper' && computer == 'Rock') {
//             score = 1
//         } else if (player == 'Scissor' && computer == 'Paper') {
//             score = 1
//         } else {
//             score = -1
//         }
//     }
//     return { score, player, computer }
// }

// const showResult = (scoreResult, playerChoice, computerChoice, winner) => {
//     getById('scores').innerText = scoreResult
//     getById('WvsW').innerText = `👶 ${playerChoice} vs 🤖 ${computerChoice}`
//     getById('winner').innerText = `${winner}!`
// }

// let scoreResult = 0
// const getResult = (score, player, computer) => {
//     if (score == 0) {
//         showResult(scoreResult, player, computer, "It's a Draw")
//     } else if (score == 1) {
//         scoreResult++
//         showResult(scoreResult, player, computer, 'You Win')
//     } else {
//         scoreResult--
//         showResult(scoreResult, player, computer, 'You Lose')
//     }
// }

// const resetGame = () => {
//     scoreResult = 0
//     getById('scores').innerText = ''
//     getById('WvsW').innerText = ''
//     getById('winner').innerText = '';
// }

// const playerChoice = (value) => {
//     const gameArr = ['Rock', 'Paper', 'Scissor'];
//     const randomNumber = Math.floor(Math.random() * gameArr.length)
//     const { score, player, computer } = startGame(gameArr[value], gameArr[randomNumber])
//     getResult(score, player, computer)
// }











/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'



const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}


// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost

    let score;
    let compScore;

    // All situations where human draws, set `score` to 0

    if (playerChoice === computerChoice) {
        score = 0;
        compScore = 0;
        // All situations where human wins, set `score` to 1
        // make sure to use else ifs here
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissor') {
        score = 1;
        compScore = -1
    } else if (playerChoice === 'Scissor' && computerChoice === 'Paper') {
        score = 1;
        compScore = -1
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        score = 1;
        compScore = -1
        // Otherwise human loses (aka set score to -1)
    } else {
        score = -1;
        compScore = 1
    }

    // return score
    return [score, compScore]
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerResultDiv = document.getElementById('comp-result')
    const computerScoreDiv = document.getElementById('comp-score')

    if (score == -1) {
        resultDiv.innerText = 'You Lose!';
        computerResultDiv.innerText = '🤖Robo Win!'

    } else if (score == 0) {
        resultDiv.innerText = "It's a tie";
    } else {
        resultDiv.innerText = 'You Won!';
        computerResultDiv.innerText = '🤖Robo Lose!'
    }
    handsDiv.innerText = `👶${playerChoice} vs 🤖${computerChoice}`
    playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
    computerScoreDiv.innerText = `Robo Score: ${totalScore['computerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const [score, compScore] = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    totalScore['computerScore'] += compScore
    showResult(score, playerChoice, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll('.rpsButton')
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })


    // Add a click listener to the end game button that runs the endGame() function on click
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    totalScore['computerScore'] = 0
    totalScore['playerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    const computerResultDiv = document.getElementById('comp-result')
    const computerScoreDiv = document.getElementById('comp-score')

    resultDiv.innerText = '';
    handsDiv.innerText = '';
    playerScoreDiv.innerText = '';
    computerResultDiv.innerText = '';
    computerScoreDiv.innerText = '';

}

playGame()