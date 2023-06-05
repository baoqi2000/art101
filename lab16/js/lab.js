/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 5 June 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 16: JSON and APIs
 */ 

$(document).ready(function() {
    $.ajax({
        url: "https://xkcd.com/614/info.0.json",
        data: { 
            id: 123,
            api_key: "blahblahblah",
        },
        type: "GET",
        dataType: "json",
        success: function(data) {
            // Process the parts and add them to the webpage
            $("#comic-title").text(data.title);
            $("#comic-img").attr("src", data.img);
            $("#comic-img").attr("alt", data.alt);
            $("#comic-img").attr("title", data.alt);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
    });
});

