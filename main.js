$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler
    $('.nav_container').hide();
    $('.title h1').hide();
    $('.title h2').hide();
    $('.about_click, .skills_click, .projects_click, .contact_click').css({'top': '-50px'});
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
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, .25)", "top": "0", "height": "7vh"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)", "top": "0", "height": "0"});
            menu_toggle = false;
        }
    });

    /***************************************
     * NAME: fade_title
     * PARAMS: none
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: Fades in and out name title and loads nav background br
     * FUNCTIONS USED: nav_p_slide_down()
     */
    function fade_title() {
        $('.menu_button').hide();
        setTimeout(function () {
            $('.title h1').fadeIn(2000);
        }, 1000);
        setTimeout(function () {
            $('.title h1').fadeOut(1000)
        }, 4000);
        setTimeout(function () {
            $('title h2').text('Web Developer');
            $('.title h2').fadeIn(2000).fadeOut(1000);
        }, 5000);
        setTimeout(function () {
            $('.nav_container').fadeIn();
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, .1)", "top": "0", "height": "7vh"});
            nav_p_slide_down()
        }, 7000)
    }

    fade_title();

    /***************************************
     * NAME: nav_p_slide_down
     * PARAMS: none
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: slides in nav p elements from top of page into menu bar
     * FUNCTIONS USED:
     */
    function nav_p_slide_down(){
        $('.about_click').animate({'top': '50%'}, 1000);
        setTimeout(function(){
            $('.skills_click').animate({'top': '50%'}, 1000);
        }, 250);
        setTimeout(function(){
            $('.projects_click').animate({'top': '50%'}, 1000);
        }, 500);
        setTimeout(function(){
            $('.contact_click').animate({'top': '50%'}, 1000);
        }, 750);
    }

});
