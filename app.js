function getFlickr(query) {
    $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31f89d39773fe830deb3f6af7199a266&tags=ruby&per_page=6&format=json&nojsoncallback=1&api_sig=10ae12d5428c7e8d9cf953baa4cc2c21",
        dataType: "json",
        success: function(response) {
          console.log("success!");
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
