const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')



let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  // const billAmount = parseFloat(billInput.value)
  const billAmount = Number(billInput.value)

  // const tipPercentage = parseFloat(tipInput.value) / 100
  const tipPercentage = Number(tipInput.value) / 100

  const tipAmount = billAmount * tipPercentage

  const totalAmount = tipAmount + billAmount;

  const perPersonTotalAmount = totalAmount / numberOfPeople

  // perPersonTotal.innerText = `$${perPersonTotalAmount.toLocaleString('en-us')}`
  perPersonTotal.innerText = `$${perPersonTotalAmount.toFixed(2)}`
}


const increasePeople = () => {
  numberOfPeople++

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill()
}


const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    alert(`Sorry sir, you can not have less then 1 person`)
    throw("you can't decrease the number of people to 0 or negative!")
  }
  numberOfPeople --

  numberOfPeopleDiv.innerText = numberOfPeople

  calculateBill()
}