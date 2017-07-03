

function getFlickr(query) {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+query+'&format=json';
    $.ajax({
        type: "GET",
        url: proxy + url,
        // dataType: "json",
        success: function(response) {
        console.log(response);

        },
        error: function(xhr, status, e) {
            console.log(status, e);
        }
    });
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
