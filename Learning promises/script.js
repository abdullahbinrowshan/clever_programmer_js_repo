const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady = [true, false][Math.floor(Math.random() * 2)];
        isReady ? resolve("🍲 Soup is Ready") : reject("❌ No Soup today")
    }, 1000)
})
// console.log(promise1
//     .then(success => console.log({success}))
//     .catch(error => console.log({error})));

const getSoup = async () => {
    const data = {
        rating: 0,
        tip: 0,
        pay: 0
    }
    try {
        const soup = await promise1;
        console.log(soup);
        data.rating = 5;
        data.tip = .2;
        data.pay = 190;
        return data
    } catch (error) {
        console.log(error);
        data.rating = 0;
        data.tip = 0;
        data.pay = 0;
        return data
    }

}

getSoup().then(value => console.log(value))

const sum = async (a , b)  => await a+b;
console.log(sum(12, 2), "sum"); 