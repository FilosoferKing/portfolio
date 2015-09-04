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
    }


    $(document).scroll(function(){

        var bottomPosition = $(window).scrollTop() + $(window).height();
        console.log('Bottom position: ', bottomPosition);

        var sectionArray = [];

        $('.trigger_point').each(function(){
            var trigger_position = $(this).offset().top;
            console.log('Target position: ', trigger_position);
            if(trigger_position <= bottomPosition){
                sectionArray[sectionArray.length] = this;
                console.log('SectionArray ', sectionArray);
            }
        });

        $('.about, .projects, .skills, .contact').removeClass('js_hover');

        if(sectionArray.length) {
            var highlighted_section = $(sectionArray[sectionArray.length - 1]).attr('data-indicator');
            console.log('Data-indicator: ', highlighted_section);
            $(highlighted_section).addClass('js_hover');
        }




    });

















































    //$(document).scroll(function(eventData, event){
    //    var currentBottom = $(window).scrollTop()+$(window).height();//the pixel postition at the bottonm of the window
    //    var trigger_array = [];
    //    $('.trigger_point').each(function(){
    //        //console.log('comparing '+$(this).attr('data-section')+' = '+$(this).offset().top+ ' with ' + currentTop);
    //        if($(this).offset().top <= currentBottom) {
    //            trigger_array[trigger_array.length] = this;
    //        }
    //    });
    //    //console.log('array is now: ',trigger_array);
    //    $('.js_hover').removeClass('js_hover');
    //    if(trigger_array.length) {
    //
    //        var highlight_element = $(trigger_array[trigger_array.length - 1]).attr('data-indicator');
    //        //console.log('going to hover ', highlight_element);
    //        $(highlight_element).addClass('js_hover');
    //    }
    //    //console.log($(document).scrollTop())
    //})
});
