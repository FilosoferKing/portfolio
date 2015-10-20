<?php

$email_name = "trevorlinan";
$email_direct = "@gmail.com";
$to = $email_name . $email_direct;


$name = $_POST['name'];
$from_email = "From: " . $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

If (mail($to, $subject, $message, $from_email)) {
    print "Email has been sent.";
} else {
    print "Email was not sent.";
};

print($to . $name . $from_email . $subject . $body);


?>