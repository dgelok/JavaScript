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

// console.log(tipAmount2(100, "fair"))

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

// printBox(4,6);
// function printBoxProper (h, w) {
//     var edge = ""
// }

//7
function printBanner (myStr) {
    var len = myStr.length;
    var edge = ""
    for (var i = 0; i < len + 4; i++) {
        edge += "*";
    }
    console.log(edge);
    console.log("* " + myStr + " *")
    console.log(edge);

}


//8 
function leetspeak (myStr) {
    var final = ""
    var lStr = myStr.toLowerCase()
    for (var i = 0; i < lStr.length; i++) {
        switch (lStr[i]) {
            // case "A":
            //     final += "4";
            //     break;
            // case "E":
            //     final += "3";
            //     break;
            // case "G":
            //     final += "6";
            //     break;
            // case "T":
            //     final += "7";
            //     break;
            // case "I":
            //     final += "1";
            //     break;
            // case "O":
            //     final += "0";
            //     break;
            // case "S":
            //     final += "5";
            //     break;
            case "a":
                final += "4";
                break;
            case "e":
                final += "3";
                break;
            case "g":
                final += "6";
                break;
            case "t":
                final += "7";
                break;
            case "i":
                final += "1";
                break;
            case "o":
                final += "0";
                break;
            case "s":
                final += "5";
                break;
            default:
                final += lStr[i];
                break;
        }
    }
    console.log(final)
}

// leetspeak("Leet")


//9
function longLongVowels(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i+1]) {
            switch (str[i]) {
                case "a":
                    result += "aaa";
                    break;
                case "e":
                    result += "eee";
                    break;
                case "i":
                    result += "iii";
                    break;
                case "o":
                    result += "ooo";
                    break;
                case "u":
                    result += "uuu";
                    break;
                default:
                    result += str[i]
                    break;
            } 
        } else {
            result += str[i];
        }
    }
    console.log(result)
}

//10
function positiveNumbers (myArr) {
    var answer = [];
    var index = 0;
    while (index < myArr.length) {
        if (myArr[index] >= 0) {
            answer.push(myArr[index])
        }
        
        index++
    }
    console.log(answer)
}

//bonus1

function caesar (str, offset) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var code = "";
    for (var i = 0; i < str.length; i++) {
        if (alpha.includes(str[i])) {
            var myIndex = alpha.indexOf(str[i])
            myIndex += offset;
            if (myIndex >= 26) {
                myIndex -= 26;
            } else if (myIndex < 0) {
                myIndex += 26
            }
            code += alpha[myIndex]
        } else {
            code += str[i]
        }
    }
    console.log(code)

}

//bonus2 
function decode (str) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 26; i++) {
        var code = "";
        for (var j = 0; j < str.length; j++) {
            if (alpha.includes(str[j])) {
                var index = alpha.indexOf(str[j])
                index += i;
                if (index >= 26) {
                    index -= 26;
                }
                code += alpha[index];
            } else {
                code += str[j]
            }
        }
        console.log(code);
    }
} 
decode("travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar")
// caesar("genius without education is like silver in the mine", 13)
// positiveNumbers([4, -10, 3, -4, -2, 1, 2, -34])
// longLongVowels("good cheese man")
// leetspeak("leeet")
// printBanner("H")
// printBox(19, 6)
// printSquare(9);
// printNumbersWhile(7, 18)
// printNumbersFor(7, 12)
// console.log(madlib("Dan", "Chemistry"))
// console.log(tipAmount2(45.00, "asdf"))
// console.log(tipAmount(40, "fair"))
