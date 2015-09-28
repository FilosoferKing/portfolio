var trigger_position;
$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler

    intro_reveal();

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
            $('.nav_menu').css({"display": "block"});
            //$('.nav_container').css({"background-color": "rgba(0, 0, 0, .25)", "top": "0", "height": "8vh"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"display": "none", "transition-duration": "0s"});
            //$('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)", "top": "0", "height": "0"});
            menu_toggle = false;
        }
    });

    /*Handler for correcting toggle flag when a nav menu option is clicked.*/
    $('.menu_click').on('click', function () {
        menu_toggle = false;
    });
    
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
        trigger_position = $(this).offset().top;
        console.log('Target position: ', trigger_position);
        if (trigger_position <= bottomPosition) {
            sectionArray[sectionArray.length] = this;
            console.log('SectionArray ', sectionArray);
        }
    });

    //$('.about, .projects, .skills, .contact').removeClass('js_hover');

    if (sectionArray.length) {
        var highlighted_section = $(sectionArray[sectionArray.length - 1]).attr('data-indicator');
        console.log('Data-indicator: ', highlighted_section);
        $(highlighted_section).addClass('js_hover');

        $('.menu_button').css({'opacity': '1'});
        $('.nav_menu').css({"display": "none"});

        /*If menu button clicked is same as current page, hide navigation menu*/
        $('.menu_click').on('click', function () {
            console.log(highlighted_section);
            if (highlighted_section == $(this).attr('click')) {
                $('.nav_menu').css({"display": "none"});
            }
        });

        if (highlighted_section == '.about') {
            console.log("This is about! Boom");
            $('.info_right').addClass('info_right_circle');
            $('.info_right h1, .info_right p, hr').css({
                'opacity': '1',
                'transition-delay': '1s',
                'transition-duration': '.5s'
            });

            $('.bottom_angle').removeClass('bottom_land_angle').addClass('bottom_land_angle_alt');
            $('.nav_top_angle').removeClass('nav_container').addClass('nav_container_alt');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(-2deg)', 'top': '3.5vh'});

            var about_pos = $('.about_div a').position();
            if($(window).scrollTop() > trigger_position - (trigger_position - ((($(window).height() + about_pos.top -10))))){
                $('.about_title h1').css({'top': '-3vh', 'transform': 'rotateZ(-3deg) translateX(-50%)'});
            } else {
                $('.about_title h1').css({'top': '-5vh', 'transform': 'rotateZ(0) translateX(-50%)'});
            }

        } else {
            $('.info_right').removeClass('info_right_circle');
            $('.info_right h1, .info_right p, hr').css({
                'opacity': '0',
                'transition-delay': '0s',
                'transition-duration': '0s'
            });

            $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
            $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});

            $('.about_title h1').css({'top': '-15vh', 'transform': 'rotateZ(-3deg) translateX(-50%)'});
        }

        if (highlighted_section == '.skills') {
            console.log("This is skills!! Boom");
            $('.skills_row div img').css({'animation-name': 'circleSpin'});

            $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
            $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});
        } else {
            $('.skills_row div img').css({'animation-name': 'none'});

            $('.bottom_angle').removeClass('bottom_land_angle').addClass('bottom_land_angle_alt');
            $('.nav_top_angle').removeClass('nav_container').addClass('nav_container_alt');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(-2deg)', 'top': '3.5vh'});
        }


    } else {
        $('.nav_menu').css({"display": "none"});
        $('.title').fadeIn(1000);
        //if ($(window).width() > 768) {
        //    $('.menu_button').css({'opacity': '0'});
        //} else {
        //    $('.menu_button').css({'opacity': '1'});
        //}
        //$(window).resize(function() {
        //    if ($(window).width() > 768) {
        //        $('.menu_button').css({'opacity': '0'});
        //    } else {
        //        $('.menu_button').css({'opacity': '1'});
        //    }
        //});
        $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
        $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
        $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});
        $('.about_title h1').css({'top': '-15vh', 'transform': 'rotateZ(0) translateX(-50%)'});
    }

});


function intro_reveal() {
    setTimeout(function () {
        //$('.title #tl').css({'opacity': '1'});
    }, 500);
    //setTimeout(function () {
    //    $('.title h3').css({'opacity': '1', 'transition-duration': '2s'});
    //}, 1000);
}








