console.log('hello world');

const message = 'Goodbye my lover!';

let titleDiv = document.getElementById('title')
titleDiv.innerText = message
// console.log(titleDiv.innerText);
// console.log(titleDiv);

titleDiv.innerHTML = `<P>${message}</P>`
titleDiv.style.backgroundColor = 'red'

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')
// console.log(redDiv, yellowDiv, greenDiv);

// let redClickCount = 1
// let yellowClickCount = 1
// let greenClickCount = 1

// redDiv.onclick = () => console.log(`red`, redClickCount++)
// yellowDiv.onclick = () => console.log('yellow', yellowClickCount++);
// greenDiv.onclick = function () {
//     console.log('green', greenClickCount++);
// }


const squares = document.querySelectorAll('.colorSquare')
// console.log(squares.values);


const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value]++
        square.innerText = timesClicked[square.value]
    }
})

const clearScore = () => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => square.innerText = "")
}


const resetGameBtn = document.getElementById('resetGame')
resetGameBtn.onclick = () => clearScore()