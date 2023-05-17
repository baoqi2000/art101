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

const glitchBtn = document.getElementById('glitch-btn');
const resetBtn = document.getElementById('reset-btn');

glitchBtn.addEventListener('click', glitch);
resetBtn.addEventListener('click', reset);


function glitch() {
 
  const contentDiv = document.getElementById('content');
  const classes = ['glitch1', 'glitch2', 'glitch3'];
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  contentDiv.classList.add(randomClass);
}

function reset() {
 
  const contentDiv = document.getElementById('content');
  const classes = ['glitch1', 'glitch2', 'glitch3'];
  contentDiv.classList.remove(...classes);
}

document.writeln("<div class='name'>" + "You got it! The code is: " + sortUserName() + "</div>");