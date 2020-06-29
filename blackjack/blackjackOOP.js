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
        this.reset();
        this.shuffle();
    }

    reset() {
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

class Bet {
    constructor() {
        this.money = 500;
        this.bet = 0;
    }
    betWin() {
        this.money += 2 * this.bet;
        this.bet = 0;
        betD.textContent = this.bet;
        moneyD.textContent = this.money;
    }
    betLoss() {
        this.bet = 0;
        betD.textContent = this.bet;
        moneyD.textContent = this.money;
    }
    betDraw() {
        this.money += this.bet;
        this.bet = 0;
        betD.textContent = this.bet;
        moneyD.textContent = this.money;
    }
    betButtonReset() {
        up10.disabled = false;
    }
}

