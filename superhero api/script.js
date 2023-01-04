console.log('hello world');
const baseURL = `https://superheroapi.com/api.php/10223569763528853/`;
const heroDiv = document.getElementById('hero_img');
const newHeroButton = document.getElementById('get_new_hero');
const searchHero = document.getElementById('search_btn');
const searchInput = document.getElementById('search_input');
const heroName = document.getElementById('hero_name');

const randomHero = (id) => {
    fetch(`${baseURL}${id}`)
        .then(response => response.json())
        .then(json => {
            const hero = json
            showHeroInfo(hero)
        })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️',
    power: '📊',
    combat: '⚔️'
}

const showHeroInfo = (character) => {
    const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

    const name = `<h2>${character.name}</h2>`;
    const img = `<img src="${character.image.url}" width="300px" height="100%"/>`
    const powerStats = character.powerstats

    const stats = Object.keys(powerStats).map(stat => {
        return ` <p>${statToEmoji[stat]} ${uppercaseWords(stat)}: ${powerStats[stat]}`
    }).join('')
    heroDiv.innerHTML = `
            ${name}
            ${img}
            ${stats}
            `
}

const searchSuperHero = (name) => {
    fetch(`${baseURL}search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0];
            showHeroInfo(hero)
        })
}

// function getNewHero() {
//     const randomNum = Math.floor(Math.random() * 731)
//     randomHero(randomNum)
// }

newHeroButton.onclick = () => {
    const randomNum = Math.floor(Math.random() * 731)
    randomHero(randomNum)
}

searchHero.onclick = () => searchSuperHero(searchInput.value)