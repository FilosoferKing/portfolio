var title; //title of project
var desc; //description of project
var imgsrc; //src for project image

$(document).ready(function(){

    /*Handler for hovering over a specific project*/
    $('.imageDiv').on('click', function () {
        var projectId = $(this).attr('id');
        console.log('Project id: ', projectId);
        loadProjectInfo(projectId);
    });


});

/***************************************
 * NAME: changeProjectDescripton
 * PARAMS: id
 * GLOBAL VARIABLES: none
 * LOCAL VARIABLES: replaceText
 * PURPOSE: this replaces the content text of the ::after pseudo div when a specific project is hovered
 * FUNCTIONS USED:
 */
function buildModal(title, desc, imgsrc) {
    var modalContainer = $('<div>', {
        class: 'col-xs-12 modalContainer'
    });
    var modalContentContainer = $('<div>', {
        class: 'col-xs-12 modalContentContainer'
    });
    var modalImageContainer = $('<div>', {
        class: 'col-xs-12 col-sm-6 modalImageContainer'
    });
    var projectImage = $('<img>', {
        id: 'projectImage',
        src: imgsrc
    });
    var modalInfoContainer = $('<div>', {
        class: 'col-xs-12 col-sm-6  modalInfoContainer'
    });
    var projectTitle = $('<h1>', {
        id: 'projectTitle',
        text: title
    });
    var projectInfo = $('<p>', {
        id: 'projectInfo',
        text: desc
    });

    $(modalContainer).append(modalContentContainer);
    $(modalContentContainer).append(modalImageContainer, modalInfoContainer);
    $(modalImageContainer).append(projectImage);
    $(modalInfoContainer).append(projectTitle, projectInfo);

    $('body').append(modalContainer);
}

function loadProjectInfo(id){
    //var replaceText = $('.imageDiv:hover::before').css({"content": "attr('built')"});
    switch (id) {
        case 'marounrecords':;
            title = 'Memory Match';
            desc = 'This is info about the Maroun Records project';
            imgsrc = 'img/projects/marounrecords.png';
            buildModal(title, desc, imgsrc);
            //replaceText;
            break;
        case 'memorymatch':
            //replaceText;
            break;
        case 'calculator':
            //replaceText;
            break;
        case 'sgt':
            //replaceText;
            break;
        case 'twailerz':
            //replaceText;
            break;
        case 'tictactoe':
            //replaceText;
            break;
        case 'taskit':
            //replaceText;
            break;
        case 'final':
            //replaceText;
            break;
    }
}