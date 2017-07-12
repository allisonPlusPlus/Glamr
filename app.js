function getFlickr(query) {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + query + '&format=json&nojsoncallback=1';
    $.ajax({
        type: "GET",
        url: proxy + url,
        // dataType: "json",
        success: function(response) {
            renderResults(response);
        },
        error: function(xhr, status, e) {
            console.log(status, e);
        }
    });
}



function renderResults(response) {
    'use strict';
    //Hide lipstick smudges image and headline
    $(".smudges").addClass("hidden");
    $(".headline").addClass("hidden");
    // Unhide Results
    $(".js-search-results").removeClass("hidden");
    // fadeIn Results
    $(".js-search-results").hide().fadeIn("slow");
    $('.output').addClass('hidden');

    for (var i = 0; i < response.items.length; i++) {
        //Render thumbnail images
        $(`#result${i+1}`).find("img").attr('src', response.items[i].media.m);
        //Render thumbnail links
        $(`#result${i+1}`).find("a").attr('href', response.items[i].link);
        $(`#result${i+1}`).removeClass("hidden");
        hoverTitles(i);
    }
    function hoverTitles(i) {
      'use strict'
    $(`#result${i+1}`).mouseover(function() {
       $(`.title${i+1}`).html(response.items[i].title);
    });
    $(`#result${i+1}`).mouseout(function() {
       $(".title").empty();
    });
    }
}


function pickColor() {
    $(".rubywoo").on("click", function() {
        getFlickr("rubywoo");
    });

    $(".ladydanger").on("click", function() {
        getFlickr("ladydanger");
    });

    $(".candyyumyum").on("click", function() {
        getFlickr("candy yumyum");
    });

    $(".heroine").on("click", function() {
        getFlickr("mac heroine");
    });

    $(".cremednude").on("click", function() {
        getFlickr("creme d' nude");
    });

    $(".velvetteddy").on("click", function() {
        getFlickr("velvet teddy");
    });
};



$(function() {
    pickColor();
});
