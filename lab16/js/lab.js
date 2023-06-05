/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 5 June 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 16: JSON and APIs
 */ 

$(document).ready(function() {
    var comicObj = {
        num: 614, 
        endpoint: "https://xkcd.com/",
        apiData: null
    };


    function getAndPutData() {
        var apiUrl = comicObj.endpoint + comicObj.num + "/info.0.json";

        $.ajax({
            url: apiUrl,
            type: "GET",
            dataType: "json",
            success: function(data) {
                comicObj.apiData = data;
                $("#comic-title").text(data.title);
                $("#comic-img").attr("src", data.img);
                $("#comic-img").attr("alt", data.alt);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
            }
        });
    }

    $("#prev-btn").click(function() {
        comicObj.num -= 1;
        getAndPutData();
    });

    $("#next-btn").click(function() {
        comicObj.num += 1;
        getAndPutData();
    });


    getAndPutData();
});
