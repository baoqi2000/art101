/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 12 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 10: JavaScript Events and Forms
 */ 

function sortUserName() {
    var userName = window.prompt("What is the attendence code of last lecture? ");
    console.log("userName =", userName);

    var nameArray = userName.replace(/\s/g, '').split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// Get the buttons
const glitchBtn = document.getElementById('glitch-btn');
const resetBtn = document.getElementById('reset-btn');

// Add event listeners to the buttons
glitchBtn.addEventListener('click', glitch);
resetBtn.addEventListener('click', reset);

// Define the glitch function
function glitch() {
  // Get the content div
  const contentDiv = document.getElementById('content');
  
  // Apply a glitch effect by adding a random class
  const classes = ['glitch1', 'glitch2', 'glitch3'];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  contentDiv.classList.add(randomClass);
}

// Define the reset function
function reset() {
  // Get the content div
  const contentDiv = document.getElementById('content');
  
  // Remove any glitch classes
  const classes = ['glitch1', 'glitch2', 'glitch3'];
  contentDiv.classList.remove(...classes);
}



document.writeln("<div class='name'>" + "You got it! The code is: " + sortUserName() + "</div>");