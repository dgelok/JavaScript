var heading = document.querySelector("#heading");
heading.innerHTML = "Toppings";

var burger = document.querySelector("#burger");
burger.class = "list-item"

var newthing = document.createElement("li");
newthing.id = "French_Fries";
newthing.class = "pink list-item"
newthing.innerHTML = "french fries"
var menu = document.getElementById("list")
menu.appendChild(newthing);