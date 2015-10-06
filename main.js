var trigger_position;
$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler

    /*click handler for enter site button on landing page*/
    $('.landingPage .enter button').on('click', function() {
        landingPageFadeOut();
    });

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
            console.log("Nav displayed");
            $('.mobileNav').css({"display": "block"});
            menu_toggle = true;
        } else {
            console.log("Nav hidden");
            $('.mobileNav').css({"display": "none"});
            menu_toggle = false;
        }
    });

    /*Click handler for the mobile navigation menu*/
    $('.mobileNav a').on('click', function(){
        $('.mobileNav p').removeClass('active');
        $(this).children('p').addClass('active');
        $('.mobileNav').css({"display": "none"});
        menu_toggle = false;
    })
    
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
            $('.info_right h1, .info_right p, .info_right hr').css({
                'opacity': '1',
                'transition-delay': '1s',
                'transition-duration': '.5s'
            });

            $('.bottom_angle').removeClass('bottom_land_angle').addClass('bottom_land_angle_alt');
            $('.nav_top_angle').removeClass('nav_container').addClass('nav_container_alt');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(-2deg)', 'top': '3.5vh'});


            if ($('.about_title').length == 0) {
                $('.skills_title, .project_title, .connect_title').remove();
                var about_title_div = $('<div>', {
                    class: 'col-xs-12 about_title'
                });
                var about_title_h1 = $('<h1>', {
                    text: 'THE PATH I WALK'
                });
                about_title_div.append(about_title_h1);
                $('.nav_container_alt').append(about_title_div);
            }


        } else {
            $('.info_right').removeClass('info_right_circle');
            $('.info_right h1, .info_right p, .info_right hr').css({
                'opacity': '0',
                'transition-delay': '0s',
                'transition-duration': '0s'
            });

            $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
            $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});

            //$('.about_title h1').css({'top': '-15vh', 'transform': 'rotateZ(-3deg) translateX(-50%)'});
        }

        if (highlighted_section == '.skills') {
            console.log("This is skills!! Boom");
            $('.skills_row div img').css({'animation-name': 'circleSpin'});

            $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
            $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});

            if ($('.skills_title').length == 0) {
                $('.about_title, .project_title, .connect_title').remove();
                var skills_title_div = $('<div>', {
                    class: 'col-xs-12 skills_title'
                });
                var skills_title_h1 = $('<h1>', {
                    text: 'SKILLS'
                });
                skills_title_div.append(skills_title_h1);
                $('.nav_container').append(skills_title_div);
            }

            $('#svg circle').css({'display': 'block'});


        } else {
            $('.skills_row div img').css({'animation-name': 'none'});

            $('.bottom_angle').removeClass('bottom_land_angle').addClass('bottom_land_angle_alt');
            $('.nav_top_angle').removeClass('nav_container').addClass('nav_container_alt');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(-2deg)', 'top': '3.5vh'});

            $('#svg circle').css({'display': 'none'});
        }

        if (highlighted_section == '.projects') {
            console.log("This is projects! Boom");
            $('.bottom_angle').removeClass('bottom_land_angle').addClass('bottom_land_angle_alt');
            $('.nav_top_angle').removeClass('nav_container').addClass('nav_container_alt');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(-2deg)', 'top': '3.5vh'});

            if ($('.project_title').length == 0) {
                $('.about_title, .skills_title, .connect_title').remove();
                var project_title_div = $('<div>', {
                    class: 'col-xs-12 project_title'
                });
                var project_title_h1 = $('<h1>', {
                    text: 'PROJECTS'
                });
                project_title_div.append(project_title_h1);
                $('.nav_container_alt').append(project_title_div);
            }

        } else {

        }

        if (highlighted_section == '.connect') {
            console.log("This is connect!! Boom");
            $('.bottom_angle').removeClass('bottom_land_angle_alt').addClass('bottom_land_angle');
            $('.nav_top_angle').removeClass('nav_container_alt').addClass('nav_container');
            $('.land_text .nav_bar').css({'transform': 'rotateZ(2deg)', 'top': '8.5vh'});

            if ($('.connect_title').length == 0) {
                $('.about_title, .skills_title, .project_title').remove();
                var connect_title_div = $('<div>', {
                    class: 'col-xs-12 connect_title'
                });
                var connect_title_h1 = $('<h1>', {
                    text: 'CONNECT'
                });
                connect_title_div.append(connect_title_h1);
                $('.nav_container').append(connect_title_div);
            }

        } else {

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

        $('.skills_title, .about_title').remove();

        $('#svg circle').css({'display': 'none'});

    }

});

function landingPageFadeOut(){
   $('.landingPage').fadeOut(1000);
}






