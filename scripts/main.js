/* Name: [Your Name], ID: [Your ID], Section: [Section], Date: [Current Date] */

function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremail").value;
    var rating = document.getElementsByName("rating");
    var travelMode = document.getElementById("travel-mode").value;
    var ratingSelected = false;
    var i;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out.");
        return false;
    }

    if (email.indexOf("@") === -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    for (i = 0; i < rating.length; i++) {
        if (rating[i].checked) {
            ratingSelected = true;
            break;
        }
    }

    if (!ratingSelected) {
        alert("Please select a rating.");
        return false;
    }

    if (travelMode === "") {
        alert("Please select your preferred travel mode.");
        return false;
    }

    document.getElementById("formMessage").innerHTML =
        "Thank you, " + name + "! Your feedback has been submitted successfully.";

    return false;
}
