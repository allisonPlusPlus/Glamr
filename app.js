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



$(".rubywoo").on("click", function() {
  getFlickr("rubywoo");
});






function renderResults(response) {
    'use strict';
    //Hide lipstick smudges image
    $(".smudges").addClass("hidden");
    // Unhide Results
    $(".js-search-results").removeClass("hidden");
    for (var i = 0; i <= 6; i++) {
        //Render thumbnail images
        $(`#result${i+1}`).find("img").attr('src', response.items[i].media.m);
        //Render thumbnail links
        $(`#result${i+1}`).find("a").attr('href', response.items[i].link);
    }
}


function formSubmit() {
    $("form").submit(function(e) {
        e.preventDefault();
        var query = $("#searchterm").val();
        getFlickr(query);

    });
}

$(function() {
    formSubmit();
});
