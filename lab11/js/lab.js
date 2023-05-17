/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 16 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 11: Libraries & jQuery
 */ 

$("#challenges").append("<button id = 'my-button'>Choose Me!</button>");
$("challenges").click(function(){
    $("#challenges").removeClass("green");
    $("#challenges").toggleClass("red")
  });

$("#problems").append("<button id = 'my-button'>Choose Me!</button>");
$("#problems").click(function(){
    $("#problems").removeClass("green");
    $("#problems").toggleClass("red")
  });

$("#results").append("<button id = 'my-button'>Choose Me!</button>");
$("results").click(function(){
    $("#results").removeClass("green");
    $("#results").toggleClass("red")
  });

$("h1").css("color","pink");
$("h1").css("font-size","50px")
$("h2").css("color","blue")
$("h2").css("font-size","38px")
$("p").css("color","green")
$("p").css("font-size","28px")
$("button").css("color","DarkOliveGreen")

