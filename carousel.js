var projectImageArray = ['marounrecords.png', 'memorymatch.png', 'sgt.png', 'calculator.png', 'twailerz.png', 'tic-tac-toe.png', 'skilloutline.png', 'projectoutline.png'];
var currentImage = 0;
var stagedImage = 1;

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
        //$('.projectImagesContainer #' + currentImage).css({'transform': 'rotateY(180deg)', 'transition-duration': '.5s'});
        //$('.projectImagesContainer #' + currentImage).css({'transform': 'rotateY(360deg)', 'transition-duration': '1s'});
    });

    $('.circle_click').on('click', function(){
        var imageButtonId = $(this).attr('id');
        console.log("Button clicked - Id: ", imageButtonId);
        $('#' + currentImage).css({'left': '100%'});
        $('.projectImagesContainer #' + imageButtonId).css({'left': '0'});
        currentImage = imageButtonId;
    });

    $('#' + currentImage).css({'left': '0'});
    $('#' + stagedImage).css({'left': '0', 'transform': 'rotateY(180deg)'});

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

function displayNextImage(direction){
    //stagedImage = parseInt(currentImage) + parseInt(direction);
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
        //stagedImage = 0;
        console.log('Staged image: ', stagedImage);
        console.log('Current Image Right at 7: ', currentImage);
        $('#' + currentImage).css({'transform': 'rotateY(90)',  'transition-duration': '.5s'});
        $('#' + stagedImage).css({'left': '0', 'transform': 'rotateY(360deg)',  'transition-duration': '1s'});
        currentImage = 0;
        stagedImage = parseInt(currentImage) + 1;
        console.log('New current image at 7: ', currentImage);
    } else if(direction == 1) {
        console.log('Staged image: ', stagedImage);
        console.log('Current Image Right: ', currentImage);
        $('#' + stagedImage).css({'transform': 'rotateY(360deg)', 'transition-duration': '1s'});
        $('#' + currentImage).css({'transform': 'rotateY(90deg)', 'transition-duration': '.5s'});
        currentImage = stagedImage;
        setTimeout(function(){
            if(stagedImage <= 6) {
                stagedImage += 1;
                $('#' + stagedImage).css({'left': '0', 'transform': 'rotateY(180deg)',  'transition-duration': '0s'});
                $('#' + currentImage).css({'transform': 'rotateY(0)',  'transition-duration': '0s'});
            } else {
                stagedImage = 0;
                $('#' + stagedImage).css({'z-index': '-1', 'left': '0', 'transform': 'rotateY(180deg)',  'transition-duration': '0s'});
                //$('#' + currentImage).css({'transform': 'rotateY(0)',  'transition-duration': '0s'});
            }

            console.log('New staged image: ', stagedImage);
        }, 1000);
        console.log('New current image right: ', currentImage);

    }

}

