
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minues = document.getElementById('money-minus')
const amount = document.getElementById('amount')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')

const dummyTransactions = [
    { id: 1, text: 'Mot', amount: -40},
    { id: 2, text: 'Rent', amount: -400},
    { id: 3, text: 'Candy', amount: 3000},
    { id: 4, text: 'Sugar', amount: 200}
]

let transactions = dummyTransactions;

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class='delete-btn'>x</button>
    `
    list.appendChild(item)
}

function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount)
    console.log(amounts);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)
        console.log(income)
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)* -1)
        .toFixed(2)
        console.log(expense)
    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minues.innerText = `$${expense}`;
}
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM)
    updateValues()
}

init()