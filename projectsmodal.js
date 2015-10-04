var title; //title of project
var desc; //description of project
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


});

/***************************************
 * NAME: buildModal
 * PARAMS: title, deswc, imgsrc
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES:
 * PURPOSE: gets project information from loadProjectInfo() and builds out modal and appends it to the body
 * FUNCTIONS USED: none
 */
function buildModal(title, desc, imageId) {
    var modalContainer = $('<div>', {
        class: 'col-xs-12 modalContainer'
    });
    var exitButton = $('<span>', {
        class: 'glyphicon glyphicon-remove-circle exitModal'
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
    var rightButton = $('<button>', {
        class: 'carouselRight',
        direction: 1
    });
    var leftButton = $('<button>', {
        class: 'carouselLeft',
        direction: -1
    });

    $(modalContainer).append(modalContentContainer, exitButton);
    $(modalContentContainer).append(modalImageContainer, modalInfoContainer);
    $(modalImageContainer).append(projectImage, rightButton, leftButton);
    $(modalInfoContainer).append(projectTitle, projectInfo);

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
    switch (id) {
        case 'marounrecords':
            title = 'Maroun Records';
            desc = 'This is info about the Maroun Records project';
            var imageId = 0;
            buildModal(title, desc, imageId);
            break;
        case 'memorymatch':
            title = 'Memory Match';
            desc = 'This is info about the Memory Match project';
            var imageId = 1;
            buildModal(title, desc, imageId);
            break;
        case 'calculator':
            title = 'Calculator';
            desc = 'This is info about the Calculator project';
            var imageId = 2;
            buildModal(title, desc, imageId);
            break;
        case 'sgt':
            title = 'Student Grade Table';
            desc = 'This is info about theStudent Grade Table project';
            var imageId = 3;
            buildModal(title, desc, imageId);
            break;
        case 'twailerz':
            title = 'Twailerz';
            desc = 'This is info about the Twailerz project';
            var imageId = 4;
            buildModal(title, desc, imageId);
            break;
        case 'tictactoe':
            title = 'Tic Tac Toe';
            desc = 'This is info about the Tic Tac Toe project';
            var imageId = 5;
            buildModal(title, desc, imageId);
            break;
        case 'taskit':
            title = 'Task It';
            desc = 'This is info about the Task It project';
            var imageId = 6;
            buildModal(title, desc, imageId);
            break;
        case 'final':
            title = 'Final';
            desc = 'This is info about the Final project';
            var imageId = 7;
            buildModal(title, desc, imageId);
            break;
    }
}