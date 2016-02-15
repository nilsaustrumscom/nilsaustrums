'use strict';

$(document).ready(function () {

/*    $("#navbar").headroom();*/

    $("body").keydown(function (e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
            e.preventDefault();
            $("#prev").trigger('click');

        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
            e.preventDefault();
            $('#next').click();

        }
        if (e.keyCode == 27) {
            e.preventDefault();
            $('.brand').click()

        }
    });
    
    $(".nav-filter a").click(function (e) {
        e.preventDefault();
    });
    
    $('#projects').mixItUp({
        animation: {
            duration: 680,
            effects: 'fade',
            easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
        }
    });

})