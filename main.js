$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler


    /***************************************
     * NAME: Menu button click handler
     * GLOBAL VARIABLES: menu_toggle
     * PURPOSE: Click handler for the menu button that toggles the
     * navigation menu on and off
     */
    $('.menu_button').on('click', function () {
        if (menu_toggle == false) {
            $('.nav_menu').css({"visibility": "visible"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            menu_toggle = false;
        }
    });

});
