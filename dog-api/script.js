// dog api
// https://dog.ceo/api/breeds/image/random
const dogApiDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(khai => khai.json())
        .then(json => {
            console.log(json.message)
            dogApiDiv.innerHTML = `<img src="${json.message}" width="400" />`
        })
}

dogButton.onclick = () => getNewDog()