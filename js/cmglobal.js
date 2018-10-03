/**
 * File Name: cmglobal.js
 *
 * Revision History:
 *       Chevy McMartin, 2018-03-17 : Created
 */

//start of section that might go in facade later
function showHideRatings() {
    var isChecked = $("#cmchkAddRatings").prop("checked");

    if (isChecked) {
        $("#cmHideRatings").show();
    }
    else {
        $("#cmHideRatings").hide();
    }
}

function showCalculatedRating() {
    var food = $("#cmFoodQuantity").val();
    var service = $("#cmService").val();
    var value = $("#cmValue").val();

    $("#cmOverallRatings").val(getCurrentRating(food, service, value));
}

function showHideRatingsMod() {
    var isChecked = $("#cmchkAddRatingsModify").prop("checked");

    if (isChecked) {
        $("#cmHideRatingsModify").show();
    }
    else {
        $("#cmHideRatingsModify").hide();
    }
}

function showCalculatedRatingMod() {
    var food = $("#cmFoodQuantityModify").val();
    var service = $("#cmServiceModify").val();
    var value = $("#cmValueModify").val();

    $("#cmOverallRatingsModify").val(getCurrentRating(food, service, value));
}

function editAFeedback() {
    doValidate_cmEditForm();
}

function addAFeedback() {
    doValidate_cmAddForm();
}

function saveDefaultEmail() {
    var defaultEmail = $("#cmDefaultReviewerEmail").val();

    localStorage.setItem("DefaultEmail", defaultEmail);

    alert("Default reviewer email saved.");
}
// end of possible facade part


function chkAddRatings_change() {
    showHideRatings();
}

function nbrCalculateRating_change() {
    showCalculatedRating();
}

function chkAddRatingsMod_change() {
    showHideRatingsMod();
}

function nbrCalculateRatingMod_change() {
    showCalculatedRatingMod();
}

function cmSave_click() {
    addAFeedback();
}

function cmUpdateEditForm_click() {
    editAFeedback();
}

function cmcmSaveDefaults_click() {
    saveDefaultEmail();
}


function init() {
    $("#cmFoodQuantity").on("change", nbrCalculateRating_change);
    $("#cmService").on("change", nbrCalculateRating_change);
    $("#cmValue").on("change", nbrCalculateRating_change);
    $("#cmchkAddRatings").on("change", chkAddRatings_change);

    $("#cmFoodQuantityModify").on("change", nbrCalculateRatingMod_change);
    $("#cmServiceModify").on("change", nbrCalculateRatingMod_change);
    $("#cmValueModify").on("change", nbrCalculateRatingMod_change);
    $("#cmchkAddRatingsModify").on("change", chkAddRatingsMod_change);

    $("#cmSave").on("click", cmSave_click);
    $("#cmUpdateEditForm").on("click", cmUpdateEditForm_click);
    $("#cmSaveDefaults").on("click", cmcmSaveDefaults_click);

}

$(document).ready(function () {
    init();
});

