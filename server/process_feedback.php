<?php
/* Name: [Zain Aljifry], ID: [2107808], Section: [DAR], Date: [8 march] */

// Capture data from the form using the name attributes
$name = $_POST['username'];
$email = $_POST['useremail'];
$rating = $_POST['rating'];
$comments = $_POST['comments'];

// Display a confirmation message back to the user
echo "<html><head><title>Success</title></head><body>";
echo "<h1>Feedback Received</h1>";
echo "<p>Thank you, <strong>$name</strong>, for rating your AlUla experience as <strong>$rating</strong>.</p>";
echo "<p>We have sent a confirmation to <strong>$email</strong>.</p>";
echo "<p><a href='../index.html'>Return to Home</a></p>";
echo "</body></html>";
?>
