/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 29 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 14: Debugging Tools & Strategies
 */ 

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://yesno.wtf/#",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

$(document).ready(function() {
    // Button click event handler for Chuck Norris Joke
    $("#get-joke").click(function() {
      // Make an AJAX request to the Chuck Norris Joke API
      $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function(data) {
          // Process and display the Chuck Norris Joke
          $("#joke-output").html("<p>" + data.value + "</p>");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        }
      });
    });

    // Button click event handler for NASA APOD
    function getDate() {
      return document.getElementById("dateSearch").value; 
    }

    async function call() {
      let request = "";
      fectch("./secrets.json").then(response => {
          return reponse.json();
      }).then(async function(myJSON) {
          request = "https://api.nasa.gov/planetary/apod?date=" +getDate() + "&api_key=" + myJSON.api_key
      })
    }



    $("#get-apod").click(function() {
      // Make an AJAX request to the NASA APOD API
      $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        dataType: "json",
        data: {
          api_key: "seGdgn2f4f4NvSuWOhtx2NcMyJwlVuiaylWwsRcd" // Replace with your actual API key
        },
        success: function(data) {
          // Process and display the APOD data
          var title = data.title;
          var explanation = data.explanation;
          var imageUrl = data.url;
          
          // Display the APOD information
          $("#apod-output").html("<h2>" + title + "</h2>");
          $("#apod-output").append("<p>" + explanation + "</p>");
          $("#apod-output").append("<img src='" + imageUrl + "' alt='APOD'>");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        }
      });
    });
  });