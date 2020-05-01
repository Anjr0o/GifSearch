$(function () {
    // TAB CLICK FUNCTION
    $('.nav-item').click(function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    })

    // GIPHY API SEARCH
    // On form submit, empty results, preventDefault and instead getData()
    $('form').on('submit', function (e) {
        $('.results').empty();
        e.preventDefault();
        getData();
    });
});

// FAVICON ANIMATION
image_counter = 0; // To keep track of the current image

setInterval(function () {
    // Remove current icon
    $("link[rel='icon']").remove();
    // Add new icon
    $("head").append('<link rel="icon" href="image/favicon/frame_' + image_counter + '_delay-0.03s.gif" type="image/gif">');
    // If last image then goto first image
    // Else go to next image    
    if (image_counter == 179)
        image_counter = 0;
    else
        image_counter++;
}, 30);

});

function getData() {
    // Get search results from GIPHY API and loop through items in array, appending each to displayed results
    $.get("https://api.giphy.com/v1/gifs/search?q=" + $('.search').val() + "+&api_key=8i7DkkKJ0SiHMEDMfoceSri0ATmQmmGw&limit=30").done(function (response) {
        for (i in response.data) {
            $('.results').append("<img src ='" + response.data[i].images.original.url + "' style='width:250px;'/>");
        }
    })
}