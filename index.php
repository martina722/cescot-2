<?php
// commento in lineaa di codice PHP
/* commento
   su più linee
*/

// stringhe
echo "<h1>Ciao mondo!<h1>";
echo "<h2 class='classe'>tipi di dati<h2>";
// oppure
echo "<h2 class='classe' attr=\"qui sono nella stringa\">tipi di dati<h2>";

// booleani
echo true; // booleano vero
echo false; // booleano falso

// numeri
echo 10;
echo "\n"; // a capo nel documento di output
echo 101.15;

// nomi delle variabili validi
$variabile_valida;
$nomeVariabileValida;

// Array, contenitore di più valori:
// array anonimo, si accede ai valori tramite l'indice numerico
$array = [1, 2, 3, 4, 5];
$array_2 = array(1,2,3,4,5);

// array associativo, si accede ai valori tramite chiavi testuali
$array_3 = array(
    "nome => "Mario",
    "cognome" => "Rossi",
    "eta" => 30
);

echo $array_3; // non posso stampare direttamente un array
print_r($array_3); // stampo il contenuto di un array
var_dump($array_3); // stampo il contenuto di un array con più dettagli
?>

<?php
