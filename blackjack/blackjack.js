// Generate a deck of cards
var cards = [];
var suits = ['hearts', 'diamonds', 'spades', 'clubs']
var values = [2,3,4,5,6,7,8,9,10]
var lvalues = ["ace", "jack", "queen", "king"]
for (let suit in suits) {
    for (let value in values) {
        var newCard = {
            "points": values[value],
            "suit": suits[suit],
            "src": `images/${values[value]}${suits[suit][0]}.jpg`
        }
        cards.push(newCard)
    }
}

for (let suit in suits) {
    for (let value in lvalues) {
        var newCard = {
            "points": lvalues[value],
            "suit": suits[suit],
            "src": `images/${lvalues[value][0]}${suits[suit][0]}.jpg`
        }
        cards.push(newCard)
    }
}

//shuffle the cards
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


//generate a new deck, player hand, and dealer hand. 
var newDeck = shuffleArray(cards)
var dealerHand = [];
var playerHand = [];
var dHand = document.getElementById("dealer-hand");
var pHand = document.getElementById("player-hand");
var pp = document.getElementById("player-points");
var dp = document.getElementById("dealer-points")
var pScore = 0;
var dScore = 0;

// Deal a new game
document.getElementById("deal-button").addEventListener("click", function(){
    dHand.innerHTML = "";
    pHand.innerHTML = "";
    playerHand = [];
    dealerHand = [];
    dp.textContent = "";
    pScore = 0;

    dealerHand[0] = newDeck.pop();
    var dCard1 = document.createElement('img');
    dCard1.src = 'images/Red_back.jpg';
    dHand.appendChild(dCard1)

    playerHand[0] = newDeck.pop();
    var pCard1 = document.createElement('img');
    pCard1.src = playerHand[0].src;
    pHand.appendChild(pCard1)

    dealerHand[1] = newDeck.pop();
    var dCard2 = document.createElement('img');
    dCard2.src = dealerHand[1].src;
    dHand.appendChild(dCard2)

    playerHand[1] = newDeck.pop();
    var pCard2 = document.createElement('img');
    pCard2.src = playerHand[1].src;
    pHand.appendChild(pCard2)

    pScore = calcPoints(playerHand)
    pp.innerHTML = pScore;
    


});

// Hit button functionality
document.getElementById("hit-button").addEventListener("click", function(){
    var aCard = newDeck.pop();
    playerHand.push(aCard)
    var cardElement = document.createElement('img')
    cardElement.src = aCard.src
    pHand.appendChild(cardElement)
    pScore = calcPoints(playerHand)
    pp.innerHTML = pScore;

    if (pScore > 21) {
        alert(`Busted! You have ${pScore} points.`)
    }

});


// Stand button Functionality
document.getElementById("stand-button").addEventListener("click", function(){
    dScore = calcPoints(dealerHand);
    while (dScore < 17) {
        var aCard = newDeck.pop();
        dealerHand.push(aCard)
        var cardElement = document.createElement('img')
        cardElement.src = aCard.src
        dHand.appendChild(cardElement)
        dScore = calcPoints(dealerHand)
    }
    // console.log(calcPoints(dealerHand))
    dp.textContent = dScore
    // console.log(dCard1.src)
    dHand.firstChild.src = dealerHand[0].src

    if (dScore > 21) {
        alert(`You win! Dealer busts with ${dScore} points.`)
    } else if (dScore == pScore) {
        alert(`You lose! Dealer wins with tied points.`)
    } else if (dScore > pScore) {
        alert(`You lose! Dealer wins with ${dScore} points.`)
    } else {
        alert(`You win with ${pScore} points!`)
    }



    // dCard1.src = dealerHand[0].src;

    // while (dScore <= 17) {
    //     var aCard = newDeck.pop();
    //     dealerHand.push(aCard)
    //     var cardElement = document.createElement('img')
    //     cardElement.src = aCard.src
    //     dHand.appendChild(cardElement)
    //     dp.innerHTML = calcPoints(dealerHand)
    // }
});

// calcuate points
function calcPoints (hand) {
    var score = 0;
    for (var i = 0; i < hand.length; i++) {
        var a = hand[i].points;
        switch (a) {
            case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10:
                score += a;
                break;
            case "jack": case "queen": case "king":
                score += 10;
                break;
            case "ace":
                score += 11;
                break;
        }
    }
    return score;
}

// // bust function
// function bust(score, who) {
//     if (score > 21) {
//         alert(`Bust! ${who} ${score} points.`)
//     }
// }