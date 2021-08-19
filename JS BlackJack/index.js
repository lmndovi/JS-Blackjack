// Created one array for the card images
let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = '';
imgArray[1] = new Image();
imgArray[1].src = 'images/Ace_spades.png';
imgArray[2] = new Image();
imgArray[2].src = 'images/2_hearts.png';
imgArray[3] = new Image();
imgArray[3].src = 'images/3_clubs.png';
imgArray[4] = new Image();
imgArray[4].src = 'images/4_hearts.png';
imgArray[5] = new Image();
imgArray[5].src = 'images/5_spades.png';
imgArray[6] = new Image();
imgArray[6].src = 'images/6_diamonds.png';
imgArray[7] = new Image();
imgArray[7].src = 'images/7_clubs.png';
imgArray[8] = new Image();
imgArray[8].src = 'images/8_spades.png';
imgArray[9] = new Image();
imgArray[9].src = 'images/9_diamonds.png';
imgArray[10] = new Image();
imgArray[10].src = 'images/10_hearts.png';
imgArray[11] = new Image();
imgArray[11].src = 'images/Jack_clubs.png';
imgArray[12] = new Image();
imgArray[12].src = 'images/King_hearts.png';
imgArray[13] = new Image();
imgArray[13].src = 'images/Queen_diamonds.png';

console.log(imgArray)

// Generate a random card value between 1 and 11
function numBetweenMinMax(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let sum = 0;
console.log(sum)
let firstCard = "";
// console.log(firstCard)
let secondCard = "";
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame () {
    drawOneCard();
    drawOneCard();
    updateInstructions();
}

function newCard() {
    drawOneCard();
    updateInstructions();
}

function drawOneCard() {
    let newCardNum = numBetweenMinMax(1, 11);
    const image = document.createElement("img");
    image.src = imgArray[newCardNum].src;
    image.height = 90;
    image.style.padding = 5;
    cardsEl.appendChild(image);
    sum += newCardNum;
}

function updateInstructions () {
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
    messageEl.textContent = message;
}
