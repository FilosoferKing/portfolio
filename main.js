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
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, .9)"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)"});
            menu_toggle = false;
        }
    });

    var i = 1;
    function fname_letter_loop(){
        setTimeout(function(){
            $('.fname h1:nth-child(' + i + ')').css({"visibility": "visible"});
            console.log("Time OUT!");
            i++;
            if (i <= 8) {
                fname_letter_loop();
            }
        }, 150);
    }
    setTimeout(function(){
        fname_letter_loop();
    }, 1000);

    var j = 1;
    function lname_letter_loop(){
        setTimeout(function(){
            $('.lname h1:nth-child(' + j + ')').css({"visibility": "visible"});
            console.log("Time OUT!");
            j++;
            if (j <= 7) {
                lname_letter_loop();
            }
        }, 150);
    }
    setTimeout(function(){
        lname_letter_loop();
    }, 2500);

    /***************************************
     * NAME: name_animation
     * PARAMS: animation_number
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: Applies a random rotate animation to a random letter in the name every 5 seconds
     */
    function name_animation(){
        var animation_number = Math.floor((Math.random() * 4) + 1);
        var random_number = Math.floor((Math.random() * 11) + 1);
        var h1_id = $('.landing_div #' + random_number);
        switch(animation_number) {
            case 1:
                h1_id.addClass('rotate_letter_x');
                break;
            case 2:
                h1_id.addClass('rotate_letter_y');
                break;
            case 3:
                h1_id.addClass('rotate_letter_left_z');
                break;
            case 4:
                h1_id.addClass('rotate_letter_right_z');
                break;
        }
        /* gives a 2 second delay before removing the rotation animation class from all <h1> elements*/
        setTimeout(function(){
            $('h1').removeClass('rotate_letter_x').removeClass('rotate_letter_y').removeClass('rotate_letter_left_z').removeClass('rotate_letter_right_z');
        },2000);
    }
    /*calls the name_animation() function every 5 seconds*/
    setInterval(function(){
    name_animation();
    }, 5000);


    function show_title(){
        $('.title h1').addClass('title_slide');
    }
    show_title();
});
