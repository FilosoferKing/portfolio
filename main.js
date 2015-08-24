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
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, .75)", "top": "50%",  "height": "100vh"});
            menu_toggle = true;
        } else {
            $('.nav_menu').css({"visibility": "hidden"});
            $('.nav_container').css({"background-color": "rgba(0, 0, 0, 0)", "top": "0", "height": "0"});
            menu_toggle = false;
        }
    });

    /***************************************
     * NAME: name_animation
     * PARAMS: animation_number
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: Applies a random rotate animation to a random letter in the name every 5 seconds
     */
    function name_animation() {
        var animation_number = Math.floor((Math.random() * 4) + 1);
        var random_number = Math.floor((Math.random() * 11) + 1);
        var h1_id = $('.landing_div #' + random_number);
        switch (animation_number) {
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
        setTimeout(function () {
            $('h1').removeClass('rotate_letter_x').removeClass('rotate_letter_y').removeClass('rotate_letter_left_z').removeClass('rotate_letter_right_z');
        }, 2000);
    }

    /*calls the name_animation() function every 5 seconds*/
    setInterval(function () {
        name_animation();
    }, 10000);

    /***************************************
     * NAME: fname_letter_loop
     * PARAMS: none
     * GLOBAL VARIABLES: i
     * LOCAL VARIABLES: none
     * PURPOSE: consecutively adds visible attribute to each letter of first name
     */
    var i = 1;

    function fname_letter_loop() {
        setTimeout(function () {
            $('.fname h1:nth-child(' + i + ')').css({"visibility": "visible"});
            i++;
            if (i <= 9) {
                fname_letter_loop();
            }
        }, 150);
    }

    /*calls the fname_letter_loop function 1 second after page loads*/
    setTimeout(function () {
        fname_letter_loop();
    }, 2000);

    /***************************************
     * NAME: lname_letter_loop
     * PARAMS: none
     * GLOBAL VARIABLES: j
     * LOCAL VARIABLES: none
     * PURPOSE: consecutively adds visible attribute to each letter of last name
     */
    var j = 1;

    function lname_letter_loop() {
        setTimeout(function () {
            $('.lname h1:nth-child(' + j + ')').css({"visibility": "visible"});
            j++;
            if (j <= 8) {
                lname_letter_loop();
            }
        }, 150);
    }

    /*calls the lname_letter_loop function 2.5 seconds after page loads*/
    setTimeout(function () {
        lname_letter_loop();
    }, 3500);

    /***************************************
     * NAME: fname_wave_animation
     * PARAMS: none
     * GLOBAL VARIABLES: n
     * LOCAL VARIABLES: none
     * PURPOSE: consecutively adds wave_rotate class to each letter of first name
     */
    var n = 3;

    function fname_wave_animation() {
        setTimeout(function () {
            $('.fname h1:nth-child(' + n + ')').addClass('wave_rotate').css({"color": "#3385D6"});
            n++;
            if (n <= 8) {
                fname_wave_animation();
            }
        }, 100);
        /*removes wave_rotate class from all .fname h1 elements after 1 second*/
        setTimeout(function () {
            $('.fname h1').removeClass('wave_rotate')
        }, 2000);
    }

    /***************************************
     * NAME: lname_wave_animation
     * PARAMS: none
     * GLOBAL VARIABLES: m
     * LOCAL VARIABLES: none
     * PURPOSE: consecutively adds wave_rotate class to each letter of first name
     */
    var m = 3;

    function lname_wave_animation() {
        setTimeout(function () {
            $('.lname h1:nth-child(' + m + ')').addClass('wave_rotate').css({"color": "#3385D6"});
            m++;
            if (m <= 7) {
                lname_wave_animation();
            }
        }, 100);
        /*removes wave_rotate class from all .lname h1 elements after 1 second*/
        setTimeout(function () {
            $('.lname h1').removeClass('wave_rotate')
        }, 2000);

    }

    /***************************************
     * NAME: fade_out_name_tags
     * PARAMS: none
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: fades out the greater than, less than and slash from name after the wave_animation runs.
     * It also slides .lname(last name) over to be centered on right side of screen.
     */
    function fade_out_name_tags() {

        setTimeout(function () {
            $('.left_black_bg').toggleClass('left_transparent_bg');
            $('.fname').animate({"left": "-=50vw"}, 3000, function(){
                $(this).fadeOut(200);
            });
            $('.right_black_bg').toggleClass('right_transparent_bg');
            $('.lname').animate({"left": "+=50vw"}, 3000, function(){
                $(this).fadeOut(200);
            });
        }, 0);
        $('.menu_button').css({"opacity": "1"});
        $('.nav_container').css({"height": "0", "top": "0"});
    }

    /***************************************
     * NAME: typing_caret_flash
     * PARAMS: none
     * GLOBAL VARIABLES: none
     * LOCAL VARIABLES: none
     * PURPOSE: removes flashing typing caret from screen
     */
    //function typing_caret_flash(){
    //   $('#type_caret').remove(2500);
    //}

    //typing_caret_flash();

    /*calls the fname_wave_animation function 4 seconds after page load and the lname_wave_function and fade_out_name_tags function 4.6 seconds after page load*/
    setTimeout(function () {
        fname_wave_animation();
        $('#fade1, #fade2').fadeTo(200, 0);
        setTimeout(function () {
            lname_wave_animation();
            $('#fade3, #fade4, #fade5').fadeTo(200, 0);
            setTimeout(function() {
                fade_out_name_tags();
            }, 1000);
        }, 700);
    }, 5000);




});
