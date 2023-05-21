/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 21 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 12: Conditionals
 */ 


function sortingHat(str) {
    len = str.length
    mod = len% 4;
  
    if (mod === 0) {
      return "Gryffindor";
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Slytherin";
    } else {
      return "Hufflepuff";
    }
  }
  


  var myButton  = document.getElementById("button");
  myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into" + house + "</p>";
    document.getElementById("output").innerHTML = newText;
  })
  
// Task X
var houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];

function generateHouseLinks() {
  var houseLinksContainer = document.getElementById("houseLinks");


  houseLinksContainer.innerHTML = "";

  for (var i = 0; i < houseArray.length; i++) {
    var houseName = houseArray[i];

  
    var anchorTag = document.createElement("a");
    anchorTag.className = "house-link";
    anchorTag.href = "#";
    anchorTag.textContent = houseName;

   
    houseLinksContainer.appendChild(anchorTag);
  }
}

generateHouseLinks();
