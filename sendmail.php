<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address where you want to receive the message
    $to = "senanayakakethaka@gmail.com";

    // Email subject
    $email_subject = "New Contact Form Message: " . $subject;

    // Email body
    $email_body = "You have received a new message from your portfolio website contact form.\n\n".
                  "Here are the details:\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Subject: $subject\n".
                  "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "<h2>Thank you! Your message has been sent successfully.</h2>";
    } else {
        echo "<h2>Sorry, something went wrong. Please try again later.</h2>";
    }
} else {
    echo "<h2>Access Denied!</h2>";
}
?>
