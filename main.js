$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler

    $('.nav_container').hide();
    $('.menu_button').hide();
    $('.title h2').hide();
    //$('.title h1').hide();
    //$('.title h2').hide();
    setTimeout(function(){
        $('.title h2').fadeIn(1000);
    }, 1750);
    setTimeout(function(){
    $('.about_click, .skills_click, .projects_click, .contact_click').css({'opacity': '1'});
    }, 4250);
    setTimeout(function(){
        $('.title h2').fadeOut(500);
    }, 2750);
    setTimeout(function(){
        $('.left_nav').css({'transform': 'scaleX(1)'});
        $('.right_nav').css({'transform': 'scaleX(1)'});
    }, 3250);
    fade_title();
    $('.nav_container').fadeIn();
    //$('.nav_container').css({"background-color": "rgba(0, 0, 0, .1)", "top": "0", "height": "8vh"});
    nav_p_slide_down();


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
            //$('.nav_container').css({"background-color": "rgba(0, 0, 0, .25)", "top": "0", "height": "8vh"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)", "top": "0", "height": "0"});
            menu_toggle = false;
        }
    });

    /***************************************
     * NAME: Scroll handler
     * PARAMS: none
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: bottomPosition, sectionArray, trigger_position, highlighted_section
     * PURPOSE: activates nav menu section based on what page section is being displayed
     * FUNCTIONS USED: none
     */
    $(document).scroll(function () {
        var bottomPosition = $(window).scrollTop() + $(window).height();
        console.log('Bottom position: ', bottomPosition);

        var sectionArray = [];

        $('.trigger_point').each(function () {
            var trigger_position = $(this).offset().top;
            console.log('Target position: ', trigger_position);
            if (trigger_position <= bottomPosition) {
                sectionArray[sectionArray.length] = this;
                console.log('SectionArray ', sectionArray);
            }
        });

        $('.about, .projects, .skills, .contact').removeClass('js_hover');

        if (sectionArray.length) {
            var highlighted_section = $(sectionArray[sectionArray.length - 1]).attr('data-indicator');
            console.log('Data-indicator: ', highlighted_section);
            $(highlighted_section).addClass('js_hover');
        }
    });


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
    setTimeout(function () {
        $('.word1 .char1').css({'transform': 'scaleY(1.5)'});
        $('.word1 .char2').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word1 .char3').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word1 .char4').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word1 .char5').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word1 .char6').css({'transform': 'scaleY(1) scaleX(1)'});
    }, 500);

    setTimeout(function(){
        $('.word2 .char1').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word2 .char2').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word2 .char3').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word2 .char4').css({'transform': 'scaleY(1) scaleX(1)'});
        $('.word2 .char5').css({'transform': 'scaleY(1.5)'});
    }, 1100);
};

/***************************************
 * NAME: nav_p_slide_down
 * PARAMS: none
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: none
 * PURPOSE: slides in nav p elements from top of page into menu bar
 * FUNCTIONS USED:
 */
function nav_p_slide_down() {
    $('.about_click').animate({'top': '50%'}, 1000);
    setTimeout(function () {
        $('.skills_click').animate({'top': '50%'}, 1000);
    }, 250);
    setTimeout(function () {
        $('.projects_click').animate({'top': '50%'}, 1000);
    }, 500);
    setTimeout(function () {
        $('.contact_click').animate({'top': '50%'}, 1000);
    }, 750);
};


