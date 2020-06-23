// Assuming all user input fits the original intention of the function. No exception handling.


//1 
function madlib (name, subj) {
    return(name + "'s favorite subject in school is " + subj + ".")
}



//2
function tipAmount (bill, level) {
    var total = bill
    switch (level) {
        case "good":
            total *= .2
            break;
        case "fair":
            total *= .15
            break;
        case "poor":
            total *= .1
            break;
        default:
            console.log("Sorry, that's not an acceptable input")
            break;
    }
    total = total.toFixed(2)
    return total;
}

//3
function tipAmount2 (bill, level) {
    var total = bill
    switch (level) {
        case "good":
            total *= 1.2
            break;
        case "fair":
            total *= 1.15
            break;
        case "poor":
            total *= 1.1
            break;
        default:
            console.log("Sorry, that's not an acceptable input")
            break;
    }
    total = total.toFixed(2)
    return total;
}


//4
function printNumbersFor (start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i)
    }

}

function printNumbersWhile (start, end) {
    var i = start; 
    while (i <= end) {
        console.log(i)
        i++;
    }
}

//5
function printSquare(num) {
    var toPrint = ""
    for (var i = 0; i < num; i++) {
        toPrint += "*"
    }
    for (var i = 0; i < num; i++) {
        console.log((toPrint))
    }
}

//6
function printBox (h, w) {
    var edge = ""
    for (var i = 0; i < w; i++) {
        edge += "*";
    }
    var filler = "";
    for (var j = 0; j < w-2; j++) {
        filler += " ";
    }
    console.log(edge)
    for (var k = 0; k < h-2; k++) {
        console.log("*" + filler + "*")
    }
    console.log(edge)

}



// printBox(19, 6)
// printSquare(9);
// printNumbersWhile(7, 18)
// printNumbersFor(7, 12)
// console.log(madlib("Dan", "Chemistry"))
// console.log(tipAmount2(45.00, "asdf"))
// console.log(tipAmount(40, "fair"))
