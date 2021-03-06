var projectImageArray = ['marounrecords.png', 'memorymatch.png', 'sgt.png', 'twailerz.png', 'tic-tac-toe.png', 'taskit.png'];
var titleArray = ['Maroun Records', 'Memory Match','Student Grade Table', 'Twailerz', 'Tic Tac Toe', 'Task It'];
var descArray = ['Maroun Records is music label website for supporting up and coming artists.', 'Match Wars is a Star Wars themed card matching game to test your memory.', 'The student grade table is an information table listing student names, courses and grades.', 'Twailerz is a website that connects the latest tweets via twitter about an upcoming movie and connects it with that trailer.', 'This is a classic Tic Tac Toe game.', 'Task It! is a "to do list" application to keep track of your current and upcoming tasks.'];
var linkArray = ['marounrecords', 'matchwars', 'studentgradetable', 'twailerz', 'tictactoe', 'taskit'];
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

/***************************************
 * NAME: loadProjectImage()
 * PARAMS: imageId
 * GLOBAL VARIABLES: titleArray, descArray, currentImage, projectImageArray
 * LOCAL VARIABLES: projectImageDiv, image
 * PURPOSE: cycles through the image array and appends the images to the modal
 * FUNCTIONS USED: none
 */
function loadProjectImage(imageId){
    for (var i = projectImageArray.length - 1; i > -1; i--) {
        var projectImageDiv = $('<div>', {
            class: 'col-xs-12 projectImageDiv',
            id: i,
            title: titleArray[i],
            desc: descArray[i],
            link: "http://www.trevorlinan.com/" + linkArray[i]
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

/***************************************
 * NAME: displayNextImage()
 * PARAMS: direction
 * GLOBAL VARIABLES: currentImage, stagedImage, projectImageArray
 * LOCAL VARIABLES: none
 * PURPOSE: slides the staged image into the display and slides the current image out of display
 * FUNCTIONS USED: modalInfoChange()
 */
function displayNextImage(direction){
    stagedImage = parseInt(currentImage) + parseInt(direction);
    //console.log('Staged image: ', stagedImage);
    if(direction == -1 && currentImage == 0){
        stagedImage = 5;
        //console.log('Current Image Left at 0: ', currentImage);
        changeModalImage();
        modalInfoChange();
        currentImage = stagedImage;
        //console.log('New current image left at 0: ', currentImage);
    } else if(direction == -1) {
        //console.log('Current Image Left: ', currentImage);
        changeModalImage();
        modalInfoChange();
        currentImage = stagedImage;
        //console.log('New current image left: ', currentImage);
    }

    if(direction == 1 && currentImage == projectImageArray.length - 1){
        //console.log('Current Image Right at 7: ', currentImage);
        stagedImage = 0;
        changeModalImage();
        modalInfoChange();
        currentImage = stagedImage;
       // console.log('New current image at 7: ', currentImage);
    } else if(direction == 1) {
       // console.log('Current Image Right: ', currentImage);
        changeModalImage();
        modalInfoChange();
        currentImage = stagedImage;
        //console.log('New current image right: ', currentImage);
    }

}

/***************************************
 * NAME: modalInfoChange()
 * PARAMS: none
 * GLOBAL VARIABLES: stagedImage
 * LOCAL VARIABLES: modalTitle, ModalInfo
 * PURPOSE: updates the correct display information to match the current image
 * FUNCTIONS USED: none
 */
function modalInfoChange(){
    var modalTitle = $('#' + stagedImage).attr('title');
    var modalInfo = $('#' + stagedImage).attr('desc');
    var modalLink = $('#' + stagedImage).attr('link');
    var projectLink = $('<a>', {
        id: 'projectLink',
        href: modalLink,
        target: "_blank",
        text: "View Project"
    });

    $('#projectTitle').fadeTo(250, 0);
    $('#projectInfo').fadeTo(250, 0);
    $('#projectLinkText').fadeTo(250, 0);
    setTimeout(function(){
        $('#projectLinkText').empty().append(projectLink);
        $('#projectTitle').text(modalTitle).fadeTo(250, 1);
        $('#projectInfo').text(modalInfo).fadeTo(250, 1);
        $('#projectLinkText').fadeTo(250, 1);
    }, 500);
}

/***************************************
 * NAME: changeModalImage()
 * PARAMS: none
 * GLOBAL VARIABLES: stagedImage, currentImage
 * LOCAL VARIABLES: none
 * PURPOSE: loads then next image depending on the user click (left or right)
 * FUNCTIONS USED: none
 */
function changeModalImage(){
    $('#' + stagedImage).fadeTo(0, 0).animate({'top': '0'}, 500);
    setTimeout(function(){
        $('#' + stagedImage).fadeTo(500, 1);
    }, 500);
    $('#' + currentImage).fadeTo(500, 0).animate({'top': '-100%'}, 500, function(){
        $(this).fadeTo(500, 1);
    });
}

