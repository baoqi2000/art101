/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 9 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 9 JavaScript for the Web
 */ 

/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 9 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 9 JavaScript for the Web
 */ 


// Find the output element and assign it to a variable
var outputEl = document.getElementById("output-text");

// Create the new element, assign and change contents
var new1El = document.createElement("p");
new1El.innerHTML = "Who are you?";

// Another new element and change the content again
var new2El = document.createElement("p");
new2El.innerHTML = "Are you here?";

// Append both two elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the CSS attributes
var challengeEl = document.getElementById("challenge");
challengeEl.style.backgroundColor = "lightpink";
challengeEl.style.padding = "20px";

var problem1El = document.getElementById("problem-1");
problem1El.style.fontSize = "20px";
problem1El.style.color = "blue";

var problem2El = document.getElementById("problem-2");
problem2El.style.fontStyle = "italic";
problem2El.style.textDecoration = "underline";


// Task x
// Get the parent element
var containerEl = document.getElementById("container");

// Create the new element and edit content
var newEl = document.createElement("p");
newEl.textContent = "Hello, I am the new element of task X and I'm 12-hour old";

// Get the first child element of the parent element
var firstChild = containerEl.firstChild;

// Create a button at the bottom of the webpage
containerEl.insertBefore(newEl, firstChild);
var buttonElement = document.createElement("button");

//change CSS attributes of button
buttonElement.style.fontSize = "66px"; 
buttonElement.style.position = "relative";
buttonElement.style.left = "550px";
buttonElement.style.color = "orange";
    
buttonElement.id = "button";

buttonElement.innerHTML = "Task Y";

document.body.appendChild(buttonElement)