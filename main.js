$(document).ready(function () {
    var menu_toggle = false;//toggle variable for navigation menu click handler


    $('.nav_menu').hide();


    setTimeout(function () {
        $('.title h2').fadeIn(1000);
    }, 1750);
    setTimeout(function () {
        $('.about_click, .skills_click, .projects_click, .contact_click').css({'opacity': '1'});
    }, 4250);
    setTimeout(function () {
        //$('.title h2').fadeOut(500);
    }, 2750);
    setTimeout(function () {
        $('.left_nav').css({'transform': 'scaleX(1)'});
        $('.right_nav').css({'transform': 'scaleX(1)'});
    }, 3250);

    //$('.nav_container').fadeIn();
    //$('.nav_container').css({"background-color": "rgba(0, 0, 0, .1)", "top": "0", "height": "8vh"});


    /*Handler for correcting toggle flag when a nave menu option is clicked.*/
    $('.menu_click').on('click', function () {
        menu_toggle = false;
    });

    /*Handler for hovering over a specific project*/
    $('.imageDiv').on('mouseover', function () {
        var projectId = $(this).attr('id');
        console.log('Project id: ', projectId);
        changeProjectDescription(projectId);
    });

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
    //console.log('Bottom position: ', bottomPosition);

    var sectionArray = [];

    $('.trigger_point').each(function () {
        var trigger_position = $(this).offset().top;
        //console.log('Target position: ', trigger_position);
        if (trigger_position <= bottomPosition) {
            sectionArray[sectionArray.length] = this;
            //console.log('SectionArray ', sectionArray);
        }
    });

    //$('.about, .projects, .skills, .contact').removeClass('js_hover');

    if (sectionArray.length) {
        var highlighted_section = $(sectionArray[sectionArray.length - 1]).attr('data-indicator');
        //console.log('Data-indicator: ', highlighted_section);
        $(highlighted_section).addClass('js_hover');

        $('.menu_button').css({'opacity': '1'});
        $('.nav_menu').css({"display": "none"});

        /*If menu button clicked is same as current page, hide navigation menu*/
        $('.menu_click').on('click', function () {
            console.log(highlighted_section);
            if (highlighted_section == $(this).attr('click')){
                $('.nav_menu').css({"display": "none"});
            }
        });


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
    }
});

/***************************************
 * NAME: changeProjectDescripton
 * PARAMS: id
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: replaceText
 * PURPOSE: this replaces the content text of the ::after pseudo div when a specific project is hovered
 * FUNCTIONS USED:
 */
function changeProjectDescription(id) {
    //var built = $('<p>', {
    //    text: $('#' + id).attr('built')
    //});
    //var language = $('<p>', {
    //    text: $('#' + id).attr('lang')
    //});
    //var seeDescription = $('<p>', {
    //    text: $('#' + id).attr('click')
    //});
    var replaceText = $('.imageDiv:hover::before').css({"content": "attr('built')"});
    switch (id) {
        case memorymatch:
            replaceText;
            break;
        case calculator:
            replaceText;
            break;
        case sgt:
            replaceText;
            break;
        case twailerz:
            replaceText;
            break;
        case tictactoe:
            replaceText;
            break;
        case taskit:
            replaceText;
            break;
        case final:
            replaceText;
            break;
    }
}

function intro_reveal(){
    setTimeout(function(){
        $('.title h1').css({'opacity': '1', 'transition-duration': '1s'});
    }, 500);
    setTimeout(function(){
        $('.title h3').css({'opacity': '1', 'transition-duration': '1s'});
    }, 1000);
    //setTimeout(function(){
    //    $('.land_about').animate({'opacity': '1'}, 1000);
    //}, 1500);
    //setTimeout(function(){
    //    $('.land_skills').animate({'opacity': '1'}, 1000);
    //}, 2000);
    //setTimeout(function(){
    //    $('.land_projects').animate({'opacity': '1'}, 1000);
    //}, 2500);
    //setTimeout(function(){
    //    $('.land_connect').animate({'opacity': '1'}, 1000);
    //}, 3000);

}







