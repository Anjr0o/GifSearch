$(function () {
    // On button click empy results
    $('button').click(function () {
        $('.results').empty();
        // On form submit, preventDefault and instead getData()
        $('form').on('submit', function (e) {
            e.preventDefault();
            getData();
        });
    });
});

function getData() {
    // Get search results from GIPHY API and loop through items in array, appending each to displayed results
    $.get("http://api.giphy.com/v1/gifs/search?q=" + $('.search').val() + "+&api_key=8i7DkkKJ0SiHMEDMfoceSri0ATmQmmGw&limit=30").done(function (response) {
        for (i in response.data) {
            $('.results').append("<img src ='" + response.data[i].images.original.url + "' style='width:250px;'/>");
        }
    })
}