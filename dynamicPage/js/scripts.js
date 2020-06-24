var body = document.querySelector("body");

function newC (parent, child) {
    parent.appendChild(child);

}

//Header
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
// End of Header



// Content 
var content = document.createElement("div")
content.setAttribute("class", "content")
newC(container, content);

var row2 = document.createElement("div")
row2.setAttribute("class", "row justify-content-center")
newC(content, row2)

//first row
var first = document.createElement("div")
first.setAttribute("class", "col-11 p-3 bg-secondary"),
newC(row2, first);

var curse = document.createElement("h2")
curse.textContent = "Curse of the Current Reviews"
newC(first, curse)

var cursetext = document.createElement("div")
cursetext.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rem sit ducimus cum sed vel commodi, soluta, nobis ea incidunt dolorum provident assumenda praesentium? Illo ut repudiandae delectus voluptas assumenda!"
newC(first, cursetext);

//second row
var second = document.createElement("div")
second.setAttribute("class", "col-11 p-3")
newC(row2, second);

var helloWatch = document.createElement("h3")
helloWatch.setAttribute("class", "text-primary")
helloWatch.textContent = "Hello Watchkit"
newC(second, helloWatch);

var hellotext = document.createElement("div")
hellotext.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rem sit ducimus cum sed vel commodi, soluta, nobis ea incidunt dolorum provident assumenda praesentium? Illo ut repudiandae delectus voluptas assumenda!"
newC(second, hellotext)

var comments = document.createElement("div")
comments.setAttribute("class", "bg-warning d-flex flex-row mt-2")
newC(second, comments)

var c1 = document.createElement("div")
c1.setAttribute("class", "text-white pr-4 pl-2")
c1.textContent = "12 comments"
newC(comments, c1)

var c2 = document.createElement("div")
c2.setAttribute("class", "text-white")
c2.textContent = "124 likes"
newC(comments, c2)

//third row

var third = document.createElement("div")
third.setAttribute("class", "col-11 p-3")
newC(row2, third);

var intro = document.createElement("h3")
intro.setAttribute("class", "text-primary")
intro.textContent = "Intro to Swift"
newC(third, intro);

var introtext = document.createElement("div")
introtext.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rem sit ducimus cum sed vel commodi, soluta, nobis ea incidunt dolorum provident assumenda praesentium? Illo ut repudiandae delectus voluptas assumenda!"
newC(third, introtext)

var comments2 = document.createElement("div")
comments2.setAttribute("class", "bg-warning d-flex flex-row mt-2")
newC(third, comments2)

var c12 = document.createElement("div")
c12.setAttribute("class", "text-white pr-4 pl-2")
c12.textContent = "15 comments"
newC(comments2, c12)

var c22 = document.createElement("div")
c22.setAttribute("class", "text-white")
c22.textContent = "45 likes"
newC(comments2, c22)