let imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'images/2_hearts.png';
imgArray[1] = new Image();
imgArray[1].src = 'images/3_clubs.png';
imgArray[2] = new Image();
imgArray[2].src = 'images/4_hearts.png';
imgArray[3] = new Image();
imgArray[3].src = 'images/5_spades.png';
imgArray[4] = new Image();
imgArray[4].src = 'images/6_diamonds.png';
imgArray[5] = new Image();
imgArray[5].src = 'images/7_clubs.png';
imgArray[6] = new Image();
imgArray[6].src = 'images/8_spades.png';
imgArray[7] = new Image();
imgArray[7].src = 'images/9_diamonds.png';
imgArray[8] = new Image();
imgArray[8].src = 'images/10_hearts.png';
imgArray[9] = new Image();
imgArray[9].src = 'images/Ace_spades.png';
imgArray[10] = new Image();
imgArray[10].src = 'images/Jack_clubs.png';
imgArray[11] = new Image();
imgArray[11].src = 'images/King_hearts.png';
imgArray[12] = new Image();
imgArray[12].src = 'images/Queen_diamonds.png';

function numBetweenMinMax(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let firstCard = numBetweenMinMax(2, 11);
let secondCard = numBetweenMinMax(2, 11);
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
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
    // let card = 8
    let card = numBetweenMinMax(2, 11);
    sum += card
    renderGame()    
    cardsEl.textContent += (", " + card)
    // When 4th card is drawn, 3rd card is deleted from cardsEl.textContent
}

// Match each card val to an image of the card
// For 10 have the cards in an array and randomly pick an index
// For 1 or 11 the image will be the Ace card

// Adding an image to your document using JS
// let img = document.createElement('img')
// img.src = 'images/2_hearts.png';
// // document.getElementById('message-el').appendChild(img);

