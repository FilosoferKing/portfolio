var projectImageArray = ['marounrecords.png', 'memorymatch.png', 'sgt.png', 'calculator.png', 'twailerz.png', 'tic-tac-toe.png', 'skilloutline.png', 'projectoutline.png'];


$(document).ready(function(){

   loadProjectImage();

    $('.carouselLeft').on('click', function(){
        console.log("Left button clicked");
        var imageDirection = $(this).attr('id');
        displayNextImage(imageDirection);
    });

    $('.carouselRight').on('click', function(){
        console.log("Right button clicked");
        var imageDirection = $(this).attr('id');
        displayNextImage(imageDirection);
    });

    $('.circle_click').on('click', function(){
        var imageButtonId = $(this).attr('id');
        console.log("Button clicked - Id: ", imageButtonId);
        $('#' + currentImage).css({'left': '100%'});
        $('.projectImagesContainer #' + imageButtonId).css({'left': '0'});
        currentImage = imageButtonId;
    });

    $('#' + currentImage).css({'left': '0'});

});
function loadProjectImage(){
    for (var i = projectImageArray.length; i > -1; i--) {
        var projectImageDiv = $('<div>', {
            class: 'col-xs-12 imageDiv',
            id: i
        });
        $(projectImageDiv).css({'background': 'transparent url("img/' + projectImageArray[i] + '") no-repeat 50% 50%', 'background-size': 'cover'});
        $(projectImageDiv).appendTo('.projectImagesContainer');
    }
}

var currentImage = 0;

var stagedImage = '';

function displayNextImage(direction){
    stagedImage = parseInt(currentImage) + parseInt(direction);
    console.log('Staged image: ', stagedImage);
    if(direction == -1 && currentImage == 0){
        stagedImage = 7;
        console.log('Current Image Left at 0: ', currentImage);
        $('#' + stagedImage).css({'left': '0'});
        $('#' + currentImage).css({'left': '-100%'});
        currentImage = stagedImage;
        console.log('New current image left at 0: ', currentImage);
    } else if(direction == -1) {
        console.log('Current Image Left: ', currentImage);
        $('#' + stagedImage).css({'left': '0'});
        $('#' + currentImage).css({'left': '-100%'});
        currentImage = stagedImage;
        console.log('New current image left: ', currentImage);
    }

    if(direction == 1 && currentImage == projectImageArray.length - 1){
        currentImage = 0;
        stagedImage = parseInt(currentImage);
        console.log('Current Image Right at 7: ', currentImage);
        $('#' + stagedImage).css({'left': '0'});
        //$('#' + currentImage).css({'left': '100%'});
        currentImage = stagedImage;
        console.log('New current image at 7: ', currentImage);
    } else if(direction == 1) {
        console.log('Current Image Right: ', currentImage);
        $('#' + stagedImage).css({'left': '0'});
        $('#' + currentImage).css({'left': '100%'});
        currentImage = stagedImage;
        console.log('New current image right: ', currentImage);
    }

}

