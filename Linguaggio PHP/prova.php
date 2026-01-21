<?php
try {
    $pdo = new PDO("mysql:host=localhost;hacker_lab", "user", "pass");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Errore DB: " . $e->getMessage());
}
$username = $POST['username'];
$password = $POST['password'];
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->execute([$username, $password]);

if ($stmt->rowCount() > 0) {
    echo "Login OK!";
} else {
    echo "Login fallito!";
}

$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    die("Email non valida");
}

echo password_hash("123456", PASSWORD_DEFAULT);