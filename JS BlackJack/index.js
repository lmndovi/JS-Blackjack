// Created one array for the card images
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
console.log(imgArray)

// Create array with images hosted on google drive
// imgArray[0] = new Image();
// imgArray[0].src = 'https://drive.google.com/uc?export=download&id=1Og6sNgkQSpQcLAsatUXaxUQ1LyUm0HmR';
// imgArray[1] = new Image();
// imgArray[1].src = 'https://drive.google.com/uc?export=download&id=1VGtBeP3FCRbBBm2RkBZc-bnOmSX2_BqB';
// imgArray[2] = new Image();
// imgArray[2].src = 'https://drive.google.com/uc?export=download&id=17rkmz4HcQH-SICqYsacvbRYdXYlRXCb2';
// imgArray[3] = new Image();
// imgArray[3].src = 'https://drive.google.com/uc?export=download&id=1shPHbnbzeZLb42hx_VO5tqnOxFcuSOOR';
// imgArray[4] = new Image();
// imgArray[4].src = 'https://drive.google.com/uc?export=download&id=1OmcBYd_USJPNbI5swTi3Zf9E68HSWjW-';
// imgArray[5] = new Image();
// imgArray[5].src = 'https://drive.google.com/uc?export=download&id=18N9uo6exLtNGtjJJxArZ36bQGEx29xRn';
// imgArray[6] = new Image();
// imgArray[6].src = 'https://drive.google.com/uc?export=download&id=14J5zYCdZeCuB0dqZKEIO5VXqDHYMMfnj';
// imgArray[7] = new Image();
// imgArray[7].src = 'https://drive.google.com/uc?export=download&id=1LDmzrusLy3z_ebtCvwQJi_99YfoIdSwi';
// imgArray[8] = new Image();
// imgArray[8].src = 'https://drive.google.com/uc?export=download&id=1RKSNAHafQEkem806N6cuoIrEjLR9fGUv';
// imgArray[9] = new Image();
// imgArray[9].src = 'https://drive.google.com/uc?export=download&id=1BBsaLSl4xRNzfngxL5xs_7WjgN_2Y-jx';
// imgArray[10] = new Image();
// imgArray[10].src = 'https://drive.google.com/uc?export=download&id=1gsVlG4Sr-7momxQNOSD8Gckry862Bfx2';
// imgArray[11] = new Image();
// imgArray[11].src = 'https://drive.google.com/uc?export=download&id=1FI1XfoMn4AxglA1UjoN6FxCq8xwRfSci';
// imgArray[12] = new Image();
// imgArray[12].src = 'https://drive.google.com/uc?export=download&id=13liWVAQ0iZ113Dw7pRkSEG_o8ThScIQE';

// Created two card objects to pull the card value + image from
// let firstCardArray = [
//     {card: 1, image: "images/Ace_spades.png"},
//     {card: 2, image: "images/2_hearts.png"},
//     {card: 3, image: "images/3_clubs.png"},
//     {card: 4, image: "images/4_hearts.png"},
//     {card: 5, image: "images/5_spades.png"},
//     {card: 6, image: "images/6_diamonds.png"},
//     {card: 7, image: "images/7_clubs.png"},
//     {card: 8, image: "images/8_spades.png"},
//     {card: 9, image: "images/9_diamonds.png"},
//     {card: 10, image: ["images/10_hearts.png", "images/Jack_clubs.png", "images/King_hearts.png", "images/Queen_diamonds.png"]},
//     {card: 11, image: "images/2_hearts.png"},
// ]

// let secondCardArray = [
//     {card: 1, image: "images/Ace_spades.png"},
//     {card: 2, image: "images/2_hearts.png"},
//     {card: 3, image: "images/3_clubs.png"},
//     {card: 4, image: "images/4_hearts.png"},
//     {card: 5, image: "images/5_spades.png"},
//     {card: 6, image: "images/6_diamonds.png"},
//     {card: 7, image: "images/7_clubs.png"},
//     {card: 8, image: "images/8_spades.png"},
//     {card: 9, image: "images/9_diamonds.png"},
//     {card: 10, image: ["images/10_hearts.png", "images/Jack_clubs.png", "images/King_hearts.png", "images/Queen_diamonds.png"]},
//     {card: 11, image: "images/2_hearts.png"},
// ]


// Generate a random card value between 1 and 11
function numBetweenMinMax(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
};

let firstCardNum = numBetweenMinMax(1, 11);
console.log(firstCardNum)
let secondCardNum = numBetweenMinMax(1, 11);
console.log(secondCardNum)
let sum = firstCardNum + secondCardNum;
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

function show_image(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
}


function selectCard(cardNum, card) {
    if(cardNum === 1) {
        card = show_image(imgArray[9], 100, 200, cardNum);
    } else if(cardNum === 2) {
        card = show_image(imgArray[0], 100, 200, cardNum);
    } else if(cardNum === 3) {
        card = show_image(imgArray[1], 100, 200, cardNum);
    } else if(cardNum === 4) {
        card = show_image(imgArray[2], 100, 200, cardNum);
    } else if(cardNum === 5) {
        card = show_image(imgArray[3], 100, 200, cardNum);
    } else if(cardNum === 6) {
        card = show_image(imgArray[4], 100, 200, cardNum);
    } else if(cardNum === 7) {
        card = show_image(imgArray[5], 100, 200, cardNum);
    } else if(cardNum === 8) {
        card = show_image(imgArray[6], 100, 200, cardNum);
    } else if(cardNum === 9) {
        card = show_image(imgArray[7], 100, 200, cardNum);
    } else if(cardNum === 10) {
        card = show_image(imgArray[11], 100, 200, cardNum);
    } else if(cardNum === 11) {
        card = show_image(imgArray[9], 100, 200, cardNum);
    } 
}

function renderGame() {
    selectCard(firstCardNum, firstCard);
    selectCard(secondCardNum, secondCard);
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
    let card = numBetweenMinMax(1, 11);
    sum += card
    renderGame()    
    cardsEl.textContent += (", " + card)
    // When 4th card is drawn, 3rd card is deleted from cardsEl.textContent
}

