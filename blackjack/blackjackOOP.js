let playerHand = document.querySelector("#player-hand");
let dealerHand = document.querySelector("#dealer-hand");
let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
// let messagesD = document.querySelector("#messages");
let up10 = document.getElementById("Add10")
let down10 = document.getElementById("Minus10");
let bet = document.querySelector("#bet");
let cash = document.querySelector("#cash");


class Deck {
    constructor() {
        this.deck = [];
        this.create();
        this.shuffle();
    }

    create() {
        this.deck = [];
        const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sValues = ["Ace", "Jack", "King", "Queen"]
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push({
                    points: values[value],
                    suit: suits[suit],
                    imgFile: "images/" + values[value] + suits[suit][0] + ".jpg"
                });
            }
        }
        for (let suit in suits) {
            for (let value in sValues) {
                this.deck.push({
                    points: sValues[value],
                    suit: suits[suit],
                    imgFile: "images/" + sValues[value][0] + suits[suit][0] + ".jpg"
                });
            }
        }
    }

    shuffle() {
        const { deck } = this;
        for (var i = deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return this;
    }
    
    deal() {
        return this.deck.pop();
    }
}

class Player {
    constructor() {
        this.hand = [];
        this.cash = 500;
        this.bet = 0;
        this.points = 0;
    }

    plus10() {
        this.bet += 10;
        if (this.bet > this.cash) {
            this.bet = this.cash
        }
        up10.textContent = this.bet;
    }

    minus10() {
        this.bet -= 10;
        if (this.bet < 0) {
            this.bet = 0
        }
        down10.textContent = this.bet;
    }
}

class Dealer {
    constructor() {
        this.hand = [];
        this.points = 0;
    }
}

var newDeck = new Deck();
var me = new Player();
var myDealer = new Dealer();

document.getElementById("deal-button").addEventListener("click", function(){
    var a = newDeck.deck.pop()
    me.hand.push(a)
    var newCard = document.createElement('img');
    newCard.src = a.imgFile;
    playerHand.appendChild(newCard);
    var b = newDeck.deck.pop()
    me.hand.push(b)
    var newCard = document.createElement('img');
    newCard.src = b.imgFile;
    playerHand.appendChild(newCard);
})


document.getElementById("hit-button").addEventListener("click", function(){

})
document.getElementById("stand-button").addEventListener("click", function(){

})

document.getElementById("Add10").addEventListener("click", function(){
    me.plus10();
    console.log(me.bet)
})
document.getElementById("Minus10").addEventListener("click", function(){
    me.minus10();
    console.log(me.bet)
})
document.getElementById("reset-button").addEventListener("click", function(){
})
document.getElementById("deal-button").addEventListener("click", function(){
})