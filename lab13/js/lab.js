/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 24 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 13: Loops
 */ 


function fizzBuzz() {
    var output = ""; 
  
    for (var i = 1; i <= 200; i++) {
      var str = ""; 
  
      if (i % 3 === 0) {
        str += "Fizz";
      }
  
      if (i % 5 === 0) {
        str += "Buzz";
      }
  
      if (i % 7 === 0) {
        str += "Bang";
      }
  
      if (str === "") {
        str = i;
      }
  
      output += str + "<br>";
    }
  
    $("#output").html(output); 
  }
  
  fizzBuzz(); 

//Task X
    $("#configForm").submit(function(event) {
      event.preventDefault();
      fizzBuzz();
    });

    function fizzBuzz() {
      var maxNumber = parseInt($("#maxNumber").val());
      var factors = [
        { factor: parseInt($("#factor1").val()), text: $("#text1").val() },
        { factor: parseInt($("#factor2").val()), text: $("#text2").val() },
        { factor: parseInt($("#factor3").val()), text: $("#text3").val() }
      ];

      var output = ""; 

      for (var i = 1; i <= maxNumber; i++) {
        var str = ""; 

        for (var j = 0; j < factors.length; j++) {
          if (i % factors[j].factor === 0) {
            str += factors[j].text;
          }
        }

        if (str === "") {
          str = i;
        }

        output += "<div>" + str + "</div>";
      }

      $("#output").html(output); 
    }