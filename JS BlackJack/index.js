// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
function numBetweenMinMax(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let firstCard = numBetweenMinMax(2, 11);
// console.log(`First Card is: ${firstCard}`);
let secondCard = numBetweenMinMax(2, 11);
// console.log(`Second Card is: ${secondCard}`);
let hasBlackjack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard;
console.log(`The sum is: ${sum}`);

if (sum < 21) {
    message = 'Do you want to draw another card? 🤔';
} else if (sum === 21) {
    message = "Congratulations 🎉🎉🎉 You've got BlackJack 🏆";
    hasBlackjack = true;
} else {
    message = "You're out of the game ⛔";
    isAlive = false;
}

console.log(message);