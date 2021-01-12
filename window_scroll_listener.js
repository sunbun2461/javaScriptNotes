$(window).scroll(function() {
    var top_of_element = $("header nav").offset().top;
    var bottom_of_element = $("header nav").offset().top + $("header nav").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if (top_of_screen > 100 ){
        $('header nav').addClass('bottom-zero');
    } else {
        $('header nav').removeClass('bottom-zero');
    }
});
