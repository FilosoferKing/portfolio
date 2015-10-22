var title; //title of project
var desc; //description of project
var link;//link to project
var imgsrc; //src for project image

$(document).ready(function () {

    /*Handler for clicking on a specific project*/
    $('.imageDiv').on('click', function () {
        var projectId = $(this).attr('id');
        console.log('Project id: ', projectId);
        loadProjectInfo(projectId);
    });

    /*Handler for exiting project modal*/
    $('body').on('click', '.exitModal', function () {
        $('.modalContainer').remove();
        $('.menu_button').show(); //shows menu button when modal is exited
    });

    //allows user to click outside modal to exit
    $('body').on('click', '.modalContainer', function() {
        $('.modalContainer').remove();
    });
    //prevents exiting modal when clicking on actual modal
    $('body').on('click', '.modalContentContainer', function(event) {
        event.stopPropagation();
    });

});

/***************************************
 * NAME: buildModal
 * PARAMS: title, deswc, imgsrc
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES:
 * PURPOSE: gets project information from loadProjectInfo() and builds out modal and appends it to the body
 * FUNCTIONS USED: none
 */
function buildModal(title, desc, imageId, link) {
    var modalContainer = $('<div>', {
        class: 'col-xs-12 modalContainer'
    });
    var exitButton = $('<span>', {
        class: 'exitModal'
    });
    var modalContentContainer = $('<div>', {
        class: 'col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 modalContentContainer'
    });
    var modalImageContainer = $('<div>', {
        class: 'col-xs-12 modalImageContainer'
    });
    var projectImage = $('<img>', {
        class: 'projectImage',
        src: imgsrc
    });
    var modalInfoContainer = $('<div>', {
        class: 'col-xs-12  modalInfoContainer'
    });
    var projectTitle = $('<h1>', {
        id: 'projectTitle',
        text: title
    });
    var projectInfo = $('<p>', {
        id: 'projectInfo',
        text: desc
    });
    var projectLinkText = $('<p>', {
        id: 'projectLinkText'
    });
    var projectLink = $('<a>', {
        id: 'projectLink',
        href: link,
        target: "_blank",
        text: "View Project"
    });
    var rightButton = $('<button>', {
        class: 'carouselRight',
        direction: 1
    });
    var leftButton = $('<button>', {
        class: 'carouselLeft',
        direction: -1
    });

    $(modalContainer).append(modalContentContainer);
    $(modalContentContainer).append(modalImageContainer, modalInfoContainer, exitButton);
    $(modalImageContainer).append(projectImage, rightButton, leftButton);
    $(projectLinkText).append(projectLink);
    $(modalInfoContainer).append(projectTitle, projectInfo, projectLinkText);

    $('body').append(modalContainer);

    loadProjectImage(imageId);

    $('.menu_button').hide(); //hides the menu button when modal is active
}

/***************************************
 * NAME: loadProjectInfo
 * PARAMS: id
 * GLOBAL VARIABLES: title, desc, imgsrc
 * LOCAL VARIABLES: none
 * PURPOSE:  loads project information into buildModal() depending on what project is clicked
 * FUNCTIONS USED: buildModal()
 */
function loadProjectInfo(id) {
    var linkStart = "http://www.trevorlinan.com/";
    switch (id) {
        case 'marounrecords':
            title = 'Maroun Records';
            desc = 'Maroun Records is music label website for supporting up and coming artists.';
            link = linkStart + "marounrecords";
            var imageId = 0;
            buildModal(title, desc, imageId, link);
            break;
        case 'memorymatch':
            title = 'Memory Match';
            desc = 'Match Wars is a Star Wars themed card matching game to test your memory.';
            link = linkStart + "matchwars";
            var imageId = 1;
            buildModal(title, desc, imageId, link);
            break;
        case 'sgt':
            title = 'Student Grade Table';
            desc = 'The student grade table is an information table listing student names, courses and grades.';
            link = linkStart + "studentgradetable";
            var imageId = 2;
            buildModal(title, desc, imageId, link);
            break;
        case 'twailerz':
            title = 'Twailerz';
            desc = 'Twailerz is a website that connects the latest tweets via twitter about an upcoming movie and connects it with that trailer.';
            link = linkStart + "twailerz";
            var imageId = 3;
            buildModal(title, desc, imageId, link);
            break;
        case 'tictactoe':
            title = 'Tic Tac Toe';
            desc = 'This is a classic Tic Tac Toe game.';
            link = linkStart + "tictactoe";
            var imageId = 4;
            buildModal(title, desc, imageId, link);
            break;
        case 'taskit':
            title = 'Task It';
            desc = 'Task It! is a "to do list" application to keep track of your current and upcoming tasks.';
            link = linkStart + "taskit";
            var imageId = 5;
            buildModal(title, desc, imageId, link);
            break;
    }
}