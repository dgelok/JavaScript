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
// for (let card in cards) {
//     console.log(cards[card].src)}


document.getElementById("deal-button").addEventListener("click", function(){
    //write dealer logic here
});
document.getElementById("hit-button").addEventListener("click", function(){
    var num = Math.floor((Math.random() * cards.length) + 1)
    var aCard = cards[num]
    console.log(aCard)
    var newCard = document.createElement('img');
    var playerHand = document.getElementById("player-hand");
    newCard.src = aCard.src;
    playerHand.appendChild(newCard)
    delete cards[num]

});
document.getElementById("stand-button").addEventListener("click", function(){
    //write "Stand" logic here
});