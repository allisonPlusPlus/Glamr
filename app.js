function formSubmit() {
    $("form").submit(function(e) {
        e.preventDefault();
        var query = $("#searchterm").val();
        console.log("success!");
        console.log(query);

    });
}

$(function() {
    formSubmit();
});
