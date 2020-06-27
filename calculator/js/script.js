var input = document.querySelector("#input")
var body = document.querySelector("body")
var equation = ""
var solution; 

// body.addEventListener('keydown', (e) => {
//     console.log(e.key)
//     switch (e.key) {
//         case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "0": case ".": 
//             equation += e.key
//             input.textContent = equation;
//             break;
//         case "+": 
//             equation += "+"
//             input.textContent = equation;
//             break;
//         case "-": 
//             equation += "-"
//             input.textContent = equation;
//             break;
//         case "*":
//             equation += "*"
//             input.textContent = equation;
//             break;
//         case "/":
//             equation += "/"
//             input.textContent = equation;
//             break;
//         case "C":
//             equation = "";
//             input.textContent = equation;
//             break;
//         case "Enter":
//             input.textContent = doMath(equation);
//     }
// })

body.addEventListener('click', (e) => {
    switch (e.target.innerHTML) {
        case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case "0": case ".": 
            equation += e.target.innerHTML
            input.textContent = equation;
            break;
        case "+": case "-": case "*": case "/": 
            equation += e.target.innerHTML
            input.textContent = equation;
            break;
        case "C":
            equation = "";
            input.textContent = equation;
            break;
        case "=":
            input.textContent = doMath(equation);
    }
})


function doMath (eq) {

    
    var numbers = eq.split(/\+|\-|\*|\//g)
    var operators = eq.replace(/[0-9]|\./g, "").split("");
    
    console.log(eq)
    console.log(numbers)
    console.log(operators)

    var divide = operators.indexOf("/")
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("/");
    }

    var multiply = operators.indexOf("*");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("*");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    equation = ""
    return numbers[0]
}

var eq = "5*5"
console.log(doMath(eq))