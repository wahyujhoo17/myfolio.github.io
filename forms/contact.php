<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Make sure you include the PHPMailer autoload file
require '../vendor/autoload.php'; // Adjust the path if needed

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Validate form data
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required!";
        exit;
    }

    // Create an instance of PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Enable debugging for troubleshooting
        $mail->SMTPDebug = 2; // Show debug output

        // Set SMTP settings
        $mail->isSMTP();
        $mail->Host = 'supernova.indowebsite.net'; // SMTP server
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'admin@bagusws.my.id'; // SMTP username
        $mail->Password = 'Elsafira2512'; // SMTP password (use the correct password)
        $mail->SMTPSecure = 'ssl'; // Use SSL encryption, changed from PHPMailer::ENCRYPTION_SSL
        $mail->Port = 465; // Use port 465 for SSL

        // Set sender and recipient
        $mail->setFrom('admin@bagusws.my.id', 'Your Name'); // From address
        $mail->addAddress('wahyujhoo.17@gmail.com', 'Recipient Name'); // Change to actual recipient email

        // Set email content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "<strong>Name:</strong> $name <br><strong>Email:</strong> $email <br><strong>Message:</strong><br> $message";
        $mail->AltBody = "Name: $name\nEmail: $email\nMessage: $message"; // Plain text version

        // Send the email
        if ($mail->send()) {
            echo 'Your message has been sent. Thank you!';
        } else {
            echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
