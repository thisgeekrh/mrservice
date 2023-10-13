$(window).scroll(function() {
    if ($(document).scrollTop() > 50) { // Adjust this value based on when you want the shrink to occur
        $('#navbar').addClass('shrunk');
    } else {
        $('#navbar').removeClass('shrunk');
    }
});
