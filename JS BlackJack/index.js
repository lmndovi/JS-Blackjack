// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards



function numBetweenMinMax(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let firstCard = numBetweenMinMax(2, 11);
let secondCard = numBetweenMinMax(2, 11);
// let firstCard = 10
// let secondCard = 3
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// console.log(messageEl);
// 2. Store the sum paragraph in a variable called sumEl

function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame () {
    renderGame();
}

function newCard() {
    let card = 8
    sum += card
    renderGame()
}
