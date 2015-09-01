$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler

    /***************************************
     * NAME: Menu button click handler
     * PARAMS: none
     * GLOBAL VARIABLES: menu_toggle
     * LOCAL VARIABLES: none
     * PURPOSE: Click handler for the menu button that toggles the
     * navigation menu on and off
     */
    $('.menu_button').on('click', function () {
        if (menu_toggle == false) {
            $('.nav_menu').css({"visibility": "visible"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, .5)", "top": "0", "height": "7vh"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)", "top": "0", "height": "0"});
            menu_toggle = false;
        }
    });

    function fade_title() {
        $('.title h1').hide();
        $('.menu_button').hide();
        setTimeout(function () {
            $('.title h1').fadeIn(2000);
        }, 1000);
        setTimeout(function () {
            $('.title h1').fadeOut(1000)
        }, 3000);
        setTimeout(function () {
            $('.title h1').text('Web Developer').css({'font-size': '8vw'});
            $('.title h1').fadeIn(1000).fadeOut(1000);
        }, 4000);
        setTimeout(function () {
            $('.menu_button').fadeIn(3000);
        }, 5000)
    }

    fade_title();

});
