function getInstagram(query) {
console.log(query)
}

// Mouse Hover Effect on Color-Chart
   function hoverTitle() {
       $("#color1").mouseover(function() {
           $("#color-title1").removeClass("hidden");
           $("#color-texture1").removeClass("hidden");
       });
       $("#color1").mouseout(function() {
           $("#color-title1").addClass("hidden");
           $("#color-texture1").addClass("hidden");
       });
   }

hoverTitle();


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
