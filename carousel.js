var projectImageArray = ['marounrecords.png', 'memorymatch.png', 'calculator.png', 'sgt.png', 'twailerz.png', 'tic-tac-toe.png', 'taskit.png', 'taskit.png'];
var titleArray = ['Maroun Records', 'Memory Match', 'Calculator', 'Student Grade Table', 'Twailerz', 'Tic Tac Toe', 'Task It', 'Final'];
var descArray = ['This is info about the Maroun Records project', 'This is info about the Memory Match project', 'This is info about the Calculator project', 'This is info about theStudent Grade Table project', 'This is info about the Twailerz project', 'This is info about the Tic Tac Toe project', 'This is info about the Task It project', 'This is info about the Final project'];
var currentImage = 0;
var stagedImage = '';
var clickEnabled = true;

$(document).ready(function(){

   //loadProjectImage();

    $('body').on('click', '.carouselLeft', function () {
        if(clickEnabled == true) {
            clickEnabled = false;
            console.log("Left button clicked");
            var imageDirection = $(this).attr('direction');
            displayNextImage(imageDirection);
            setTimeout(function(){
                clickEnabled = true;
            }, 1000);
        }
    });


    $('body').on('click', '.carouselRight', function(){
        if(clickEnabled == true) {
            clickEnabled = false;
            console.log("Right button clicked");
            var imageDirection = $(this).attr('direction');
            console.log('Image direction: ', imageDirection);
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
            $('#' + currentImage).animate({'left': '-100%'}, 500);
            $('.projectImagesContainer #' + imageButtonId).delay(500).animate({'left': '0'}, 500);
            currentImage = imageButtonId;
            setTimeout(function () {
                clickEnabled = true;
            }, 1000);
        }
    });

});
function loadProjectImage(imageId){
    for (var i = projectImageArray.length - 1; i > -1; i--) {
        var projectImageDiv = $('<div>', {
            class: 'col-xs-12 projectImageDiv',
            id: i,
            title: titleArray[i],
            desc: descArray[i]
        });
        var image = $('<img>', {
            src: 'img/projects/' + projectImageArray[i] + '',
            class:  'projectImage'
        });
        $(projectImageDiv).append(image);
        $(projectImageDiv).appendTo('.modalImageContainer');
    }

    $('#' + imageId).css({'top': '0'});
    currentImage = imageId;
}

function displayNextImage(direction){
    stagedImage = parseInt(currentImage) + parseInt(direction);
    console.log('Staged image: ', stagedImage);
    if(direction == -1 && currentImage == 0){
        stagedImage = 7;
        console.log('Current Image Left at 0: ', currentImage);
        $('#' + stagedImage).delay(500).animate({'top': '0'}, 500);
        $('#' + currentImage).animate({'top': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image left at 0: ', currentImage);
    } else if(direction == -1) {
        console.log('Current Image Left: ', currentImage);
        $('#' + stagedImage).delay(500).animate({'top': '0'}, 500);
        $('#' + currentImage).animate({'top': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image left: ', currentImage);
    }

    if(direction == 1 && currentImage == projectImageArray.length - 1){

        console.log('Current Image Right at 7: ', currentImage);
        stagedImage = 0;
        $('#' + stagedImage).delay(500).animate({'top': '0'}, 500);
        $('#' + currentImage).animate({'top': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image at 7: ', currentImage);
    } else if(direction == 1) {
        console.log('Current Image Right: ', currentImage);
        $('#' + stagedImage).delay(500).animate({'top': '0'}, 500);
        $('#' + currentImage).animate({'top': '-100%'}, 500);
        currentImage = stagedImage;
        console.log('New current image right: ', currentImage);
    }

}

