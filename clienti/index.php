<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Clienti</title>
    <link rel = "stylesheet" href = "client.css">
</head>
<body>
    <h1>clienti</h1>
    <div class = "clienti">
        <h2>id del cliente</h2>
        <p>nome e cognome del cliente</p>
    </div>
<?php
$conn = new mysqli("localhost", "root", "", "cescot");
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

echo "Connessione Riuscita<br>";
$query = "SELECT 'nome', 'cognome' FROM clienti";
$result = $conn->query($query);
if ($result) {

    echo "Numero record: " . $result->num_rows . "<br><br>";
} else {
    echo "Errore nella query: " . $conn->error;
}

if ($result && $result->num_rows > 0): ?>
    <?php while ($row = $result->fetch_assoc()): ?>
        <div class="cliente">
            <strong>Nome:</strong> <?= $row['nome'] ?><br>
            <strong>Cognome:</strong> <?= $row['cognome'] ?>
        </div>
        <hr>
    <?php endwhile; ?>
<?php else: ?>
    <div>Nessun cliente trovato</div>
<?php endif; ?>
</body>
</html>

