/**
 * File Name: cmutil.js
 *
 * Revision History:
 *       Chevy McMartin, 2018-03-17 : Created
 */

function getCurrentRating(food, service, value) {
    var nbrFood = Number(food);
    var nbrService = Number(service);
    var nbrValue = Number(value);

    var rating = Math.round(((nbrFood + nbrService + nbrValue) / 15) * 100) + "%";

    return rating;
}

function doValidate_cmAddForm() {
    var form = $("#cmAddForm");
    form.validate({
        rules: {
            cmBusinessName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            cmReviewerEmail: {
                required: true,
                email: true
            },
            cmReviewDate: {
                required: true
            },
            cmFoodQuantity: {
                min: 0,
                max: 5
            },
            cmService: {
                min: 0,
                max: 5
            },
            cmValue: {
                min: 0,
                max: 5
            }
        },
        messages: {
            cmBusinessName: {
                required: "You must enter a business name",
                minlength: "Length must be 2-20 characters long",
                maxlength: "Length must be 2-20 characters long"
            },
            cmReviewerEmail: {
                required: "You must enter an email address",
                email: "Please enter a valid email address"
            },
            cmReviewDate: {
                required: "Review date is required"
            },
            cmFoodQuantity: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            cmService: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            cmValue: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return form.valid();
}

function doValidate_cmEditForm() {
    var editform = $("#cmEditForm");
    editform.validate({
        rules: {
            cmEditBusinessName: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            cmEditReviewerEmail: {
                required: true,
                email: true
            },
            cmReviewDateModify: {
                required: true
            },
            cmFoodQuantityModify: {
                min: 0,
                max: 5
            },
            cmServiceModify: {
                min: 0,
                max: 5
            },
            cmValueModify: {
                min: 0,
                max: 5
            }
        },
        messages: {
            cmEditBusinessName: {
                required: "You must enter a business name",
                minlength: "Length must be 2-20 characters long",
                maxlength: "Length must be 2-20 characters long"
            },
            cmEditReviewerEmail: {
                required: "You must enter an email address",
                email: "Please enter a valid email address"
            },
            cmReviewDateModify: {
                required: "Review date is required"
            },
            cmFoodQuantityModify: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            cmServiceModify: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            },
            cmValueModify: {
                min: "Value must be 0-5",
                max: "Value must be 0-5"
            }
        }
    });
    return editform.valid();
}