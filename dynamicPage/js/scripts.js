var body = document.querySelector("body");

function newC (parent, child) {
    parent.appendChild(child);

}

var container = document.createElement("div")
container.setAttribute("class", "container-fluid")
newC(body, container);

var header = document.createElement("div")
header.setAttribute("class", "header")
newC(container, header);

var headerRow = document.createElement("div")
headerRow.setAttribute("class", "row bg-primary")
newC(header, headerRow);

var headerRowCol = document.createElement("div")
headerRowCol.setAttribute("class", "col bg-primary d-flex flex-row justify-content-between align-items-center")
headerRowCol.style.height = "100px";
newC(headerRow, headerRowCol);

var maintitle = document.createElement("h1")
maintitle.setAttribute("class", "text-white")
maintitle.textContent = "High on Coding"
newC(headerRowCol, maintitle);

var links = document.createElement("ul")
links.setAttribute("class", "d-flex flex-row text-white")
links.style.listStyle = "none"
newC(headerRowCol, links);

var li1 = document.createElement("li")
li1.setAttribute("class", "li pr-3")
li1.textContent = "Home"
newC(links, li1);

var li2 = document.createElement("li")
li2.setAttribute("class", "li")
li2.textContent = "Categories"
newC(links, li2)
// container.textContent = "hello world";

