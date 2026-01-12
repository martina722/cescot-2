<?php
$conn = new mysqli("localhost", "root", "", "cescot");

if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

echo "Connessione riuscita<br>";

$query = "SELECT value FROM content";
$result = $conn->query($query);

if ($result) {

    echo "Numero record: " . $result->num_rows . "<br><br>";

} else {
    echo "Errore nella query: " . $conn->error;
}

echo "<h1>Il testo che esegue arriva dal database</h1>";
?>