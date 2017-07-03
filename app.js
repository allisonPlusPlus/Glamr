

function getFlickr(query) {
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+query+'&format=json';
    $.ajax({
        type: "GET",
        url: proxy + url,
        // dataType: "json",
        success: function(response) {
          var finalData = response.replace(/\\/g, '');
        console.log(finalData);



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
