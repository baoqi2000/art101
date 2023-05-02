/*
 * Author: Baoqi Yu and Haien Liang
 * Created: 26 April 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 */ 
var myTransport = ["airplane", " car", " bus", " subway", " bike", " uber", " spacecraft"]

var myMainRide = {
  carMake: "Subaru",
  carModel: "BRZ",
  carColor: "Black",
  carYear: "2016",
  carAge: function() {
      return 2023 - this.carYear
  }
}

document.writeln("I want to buy a: ", myTransport, "</br>")
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>"); 
