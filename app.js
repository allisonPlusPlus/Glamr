
function getInstagram(query) {
console.log(query);
}




function formSubmit() {
    $("form").submit(function(e) {
        e.preventDefault();
        var query = $("#searchterm").val();
        getInstagram(query);

    });
}

$(function() {
    formSubmit();
});
