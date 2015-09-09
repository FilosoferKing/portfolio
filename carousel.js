var projectImageArray = ['marounrecords.png', 'memorymatch.png', 'sgt.png', 'calculator.png', 'twailerz.png', 'tic-tac-toe.png', 'skilloutline.png', 'projectoutline.png'];
var currentImage = 0;
var stagedImage = '';
var clickEnabled = true;

$(document).ready(function(){

   loadProjectImage();

    $('.carouselLeft').on('click', function () {
        if(clickEnabled == true) {
            clickEnabled = false;
            console.log("Left button clicked");
            var imageDirection = $(this).attr('id');
            displayNextImage(imageDirection);
            setTimeout(function(){
                clickEnabled = true;
            }, 1000);
        }
    });


    $('.carouselRight').on('click', function(){
        if(clickEnabled == true) {
            clickEnabled = false;
            console.log("Right button clicked");
            var imageDirection = $(this).attr('id');
            displayNextImage(imageDirection);
            setTimeout(function () {
                clickEnabled = true;
            }, 1000);
        }
    });

    $('.circle_click').on('click', function () {
        if(clickEnabled == true) {
            clickEnabled = false;
            var imageButtonId = $(this).attr('id');
            console.log("Button clicked - Id: ", imageButtonId);
            $('#image' + currentImage).animate({'left': '-100%'}, 500);
            $('.projectImagesContainer #image' + imageButtonId).delay(500).animate({'left': '0'}, 500);
            currentImage = imageButtonId;
            setTimeout(function () {
                clickEnabled = true;
            }, 1000);
        }
    });

    $('#image' + currentImage).css({'left': '0'});

});
function loadProjectImage(){
    for (var i = projectImageArray.length; i > -1; i--) {
        var projectImageDiv = $('<div>', {
            class: 'col-xs-12 imageDiv',
            id: 'image' + i
        });
        $(projectImageDiv).css({'background': 'transparent url("img/' + projectImageArray[i] + '") no-repeat 50% 50%', 'background-size': 'cover'});
        $(projectImageDiv).appendTo('.projectImagesContainer');
    }
}

function displayNextImage(direction){
    stagedImage = parseInt(currentImage) + parseInt(direction);
    console.log('Staged image: ', stagedImage);
    if(direction == -1 && currentImage == 0){
        stagedImage = 7;
        console.log('Current Image Left at 0: ', currentImage);
        $('#image' + stagedImage).delay(500).animate({'left': '0'}, 500);
        $('#image' + currentImage).animate({'left': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image left at 0: ', currentImage);
    } else if(direction == -1) {
        console.log('Current Image Left: ', currentImage);
        $('#image' + stagedImage).delay(500).animate({'left': '0'}, 500);
        $('#image' + currentImage).animate({'left': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image left: ', currentImage);
    }

    if(direction == 1 && currentImage == projectImageArray.length - 1){

        console.log('Current Image Right at 7: ', currentImage);
        stagedImage = 0;
        $('#image' + stagedImage).delay(500).animate({'left': '0'}, 500);
        $('#image' + currentImage).animate({'left': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image at 7: ', currentImage);
    } else if(direction == 1) {
        console.log('Current Image Right: ', currentImage);
        $('#image' + stagedImage).delay(500).animate({'left': '0'}, 500);
        $('#image' + currentImage).animate({'left': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image right: ', currentImage);
    }

}

