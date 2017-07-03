

function getFlickr(query) {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+query+'&format=json&nojsoncallback=1';
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
 $("#result1").find("img").attr('src', response.items[0].media.m );
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
