<?php
header('Content-Type: application/json; charset=utf-8');


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed']);
    exit;
}


$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid request']);
    exit;
}

$name    = htmlspecialchars($input['name'] ?? '');
$email   = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$title   = htmlspecialchars($input['title'] ?? '');
$message = htmlspecialchars($input['message'] ?? '');
$phone   = htmlspecialchars($input['phone'] ?? '');


$to      = "contact@ddlille.eu"; 
$subject = "Wiadomość od $name w temacie $title";
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";


$body = "Imię/Nazwa: $name\n";
$body .= "Email: $email\n";
$body .= "Telefon: $phone\n\n";
$body .= "Temat: $title\n\n";
$body .= "Wiadomość:\n$message\n";


if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['message' => 'Wiadomość została wysłana pomyślnie!']);
} else {
    http_response_code(500);
    echo json_encode(['message' => 'Błąd przy wysyłce wiadomości.']);
}
