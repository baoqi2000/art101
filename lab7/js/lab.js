/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 2 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 7
 */ 


function sortUserName() {
    var userName = window.prompt("What is the attendence code of last lecture? ");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("You got it! The code is: ",
    sortUserName(), "</br>");