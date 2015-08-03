$(document).ready(function() {
    $('#arrow').click('on', function() {
        $('.line_shift').css({"transform": "translateX(0px) rotateZ(360deg)",
                               "transition-duration": "1s",
                                "transition-timing-function": "ease-out"});
        $('.landing_div:hover .right_nav_menu .nav_item p:nth-child(1)').css({
            "transform": "translateX(0px)",
            "transition-duration": "1s",
            "transition-timing-function": "ease-out",
            "transition-delay": "1s",
            "opacity": "1"
        });
        $('.landing_div:hover .right_nav_menu .nav_item p:nth-child(2)').css({
            "transform": "translateX(0px)",
            "transition-duration": "1s",
            "transition-timing-function": "ease-out",
            "transition-delay": "1.25s",
            "opacity": "1"
        });
        $('.landing_div:hover .right_nav_menu .nav_item p:nth-child(3)').css({
            "transform": "translateX(0px)",
            "transition-duration": "1s",
            "transition-timing-function": "ease-out",
            "transition-delay": "1.5s",
            "opacity": "1"
        });
        $('.landing_div:hover .right_nav_menu .nav_item p:nth-child(4)').css({
            "transform": "translateX(0px)",
            "transition-duration": "1s",
            "transition-timing-function": "ease-out",
            "transition-delay": "1.75s",
            "opacity": "1"
        });
        console.log("click");
    });


});