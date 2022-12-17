// const add = (a, b) => {
//     return a + b
// }

// const sub = (a, b) => a - b


// const div = (a, b) => {
//     if (b === 0) {
//         return a
//     }
//     return a / b
// }
// const mul = (a, b) => a * b

// console.log(add(1,2));
// console.log(sub(51, 2));
// console.log(div(22, -1));
// console.log(mul(12, 9));

// const guess = (num) =>{
//     let randomMath = Math.random()*4
//     let division =  Math.floor(randomMath)
//     if (division == 3) {
//         division = division - 1
//     }
//     return division 
// }
// console.log(guess());

// let groceries = ['apple', 'banana', 'ball', 'milk']

// groceries.push('wather')
// console.log(groceries.slice(2, 6));


// OBJECT {}

// const person = {
//     name: 'Abdullah',
//     shirt: null,
//     foot: 'Sendal'
// }

// console.log(person.name);
// console.log(person['shirt']);

// person.phone = '+8801727-385653'
// console.log(person.phone);

// person.name = 'Qazi'
// person.shirt = 'black'

// console.log(person.name + "'s shirt is " + person.shirt);

// const person2 = {
//     name: 'Qazi',
//     shirt: 'Black'
// }

// person2['shoe'] =  'Lotto Slipper'
// console.log(person2.shoe);


// const introducer = (name, shirt) => {

//     const person = {
//         name: name,
//         shirt: shirt
//     }

//     const intro = `Hi my name is ${person.name} and the color of my shirt is ${person.shirt}`

//     return intro
// }

// console.log(introducer('Abdullah', 'Army'));

// function introducer2(name, shirt) {

//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 3000,
//         liabilities: 2200,
//         netWorth: function () {
//             return this.assets - this.liabilities
//         }
//     }

//     const intro =  `hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my net Worth is ${person.netWorth()}/-`

//     return intro
// }

// console.log(introducer2('Abdullah', 'Army Green'));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i < number.length; i++) {
//      const element = number[i];
//      console.log(element);
// }

// let result = []

// for (const lazy of numbers) {
//     result.push(lazy * 2);
// }

// console.log(result);


// const sumArray = (numbers) => {
//     let result = 0

//     for (const number of numbers) {
//         result += number
//     }

//     return { result }

// }

// const nums = [3, 4, 5, 2, 1]

// console.log(sumArray(nums));


// const max = (numbers) => {
//     let result = numbers[0]

//     for (const number of numbers) {
//         if (result < number) {
//             result = number
//         }
//     }

//     return { result }
// }

// const nums = [122, 3, 4, 5, 2, 1, 700, 12, 11, 15, 98]
// console.log(max(nums));

// const letterFrequency = (phrase) => {
//     const frequency = {
        
//     }

//     for (const letter of phrase) {
//         if (letter in frequency) {
//             frequency[letter] ++
//         }
//         else{
//             frequency[letter] = 1
//         }
//     }

//     return frequency
// }

// console.log(letterFrequency('hello'));


// const wordFrequency = (phrase) => {
//     const words = phrase.split(' ')
//     return letterFrequency(words)
// }

// console.log(wordFrequency('hey bro yo yo yo'));

// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubleMap([1, 3, 5, 2, 6, 4]));


// const filter = (numbers, greaterThan) => {
//     let result = []
//     for (const number of numbers) {
//         if (number > greaterThan) {
//             result.push(number)
//         }
//     }
//     return result
// }


// console.log(filter([1, 2, 3, 4, 5, 6], 4));


// const brothers = [
//     {name: 'Rashed', netWorth: 100000},
//     {name: 'Rasel', netWorth: 450000},
//     {name: 'Abdullah', netWorth: 3000},
//     {name: 'Omar', netWorth: 110000},
//     {name: 'Abdul Aziz', netWorth: 650000},
//     {name: 'Abdur Rahman', netWorth: 33005}
// ]


// const result = brothers.reduce((prev, curr) => prev + curr.netWorth, 0)
// console.log(result);



// let result = brothers.filter(brother => brother.netWorth > 3000)
// let checkJson = `${JSON.stringify(result)}`
// let names = result.map(brother => brother.name)
// console.log(checkJson);

// function sum(a, b) {
//     return a + b
// }


// const nums = [1, 2, 3, 4]
// const result = nums.reduce(sum) 
// const result2 = nums.reduce((a, b) => a + b, -5)

// console.log(result);



// const randomFruit = (fruits) => {
//     const randomNumber = Math.floor(Math.random() * fruits.length)
//     return fruits[randomNumber]
// }

// let fruitsArr = ["Orange", "banana", "apple", "jackpot", "watermelon","pineapple"]
// console.log(randomFruit(fruitsArr));



const weatherScorer = (weather, weather2) => {
    let score
    if (weather === 'rainy' && weather2 === 'overcast' ) {
        score = 2
    }else if (weather === 'rainy') {
        score = 1
    } else if (weather === 'sunny') {
        score = -1
    }
    else {
        score = 0
    }
    return score
}

console.log(weatherScorer('rainy', 'sunny'));