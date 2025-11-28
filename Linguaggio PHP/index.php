<?php
// Mostra errori nel documento anche se disattivati a livello globale
    ini_set('display_errors', true);

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
echo "<br/>"; // a capo nella pagina

// nomi delle variabili validi
$variabile_valida; // ok
$nomeVariabileValida; // ok
$nomevariabile; //attenzione a usarlo!

// Array, contenitore di più valori:
// array anonimo, si accede ai valori tramite l'indice numerico
$array = [1, 2, 3, 4, 5];
$array_2 = array(1, 2, 3, 4, 5);

// array associativo, si accede ai valori tramite chiavi testuali
$array_3 = array(
    "nome" => "Mario",
    "cognome" => "Rossi",
    "eta" => 21
);
echo '<h3>stampa degli array:</h3>';

echo $array_3; // non posso stampare direttamente un array
echo "<br/>";
print_r($array_3); // stampo il contenuto di un array
br();
var_dump($array_3); // stampo il contenuto di un array con più dettagli

echo "<h2>costrutto IF / ELSE</h2>";

// verifica se Mario Rossi è maggiorenne
if ($array_3["eta"] >= 18) {
    echo "Utente maggiorenne<br/>";
} else {
    echo "Utente minorenne<br/>";
}
br();

// verifica se Mario ha 18 anni
if ($array_3["eta"] == "18") {
    echo "Utente non diciottenne<br/>";
} else {
    echo "Utente non diciottenne<br/>";
}
br();

// ugualianza stretta, controlla valore e tipo
if ($array_3["eta"] == 21) {} // questa condizione è VERA
if ($array_3["eta"] === "21") {} // questa condizione è FALSA
if ($array_3["eta"] == 21) {} // questa condizione è VERA
if ($array_3["eta"] === "21") {} // questa condizione è FALSA

// condizione "and" = se entrambe le condizioni sono vere si usa and
// condizione "or" = se almeno una delle due condizioni è vera si usa or
// condizione "not" = nega la condizione, se la condizione è vera diventa falsa, se è falsa diventa vera
// condizione "xor" = una delle due condizioni deve essere vera, ma non entrambe, se entrambe sono vere o entrambe sono false il risultato è falso
// operatori logici: AND=&&, OR=||, NOT=!, XOR=XOR

// stampa falso
if (true and false): // true && false
    echo "condizione vera";
else:
    echo "condizione falsa";
endif;
br();

// stampa vero
if (true or false): // true || false
    echo "Condizione vera";
else:
    echo "Condizione falsa";
endif;
br();

$persona_1 = array(
    "nome" => "Luca",
    "cognome" => "Rossi",
    "telefono" => ""
);

$persona_2 = array(
    "nome" => "Anna",
    "cognome" => "Bianchi",
);

if ($persona_1["telefono"] != ""):
    echo "Tel: ";
    echo $persona_1["telefono"];
endif;
br();

// se la prima condizione è falsa non valuto nemmeno la seconda, dato che il risultato è comunque FALSO
if (array_key_exists("telefono", $persona_2) && $persona_2["telefono"] != ""):
    echo "Tel: " . $persona_2["telefono"];
endif;

echo "<h2>cicli FOR e WHILE</h2>";

// calcolare la media dei voti
$voti = [6, 7, 7.5, 12, 9, -1, 8];
$somma = 0;
$num_voti = 0;

// somma e conta solo i voti validi 
for ($i = 0; $i < count ($voti); $i++) :
    if ($voti[$i] > 0 || $voti[$i] <=10) :
        $somma = $somma + $voti[$i];
        $num_voti++;
    endif;
endfor;

echo "La somma dei voti è: " . $somma;
br();
echo "Il numero di voti è: " . count($voti);
br();
echo "Il numero di voti validi è: " . $num_voti;
br();

$media = $somma / $num_voti;
echo "La media dei voti è: " . $media;
br();

$numero = 45;
$valori = [1, 3, 6, 87, 23, 5, 45, 17, 89, 12, 34];
    
$trovato = true;

$i = 0;
    while (!$trovato && $i < count($valori)) :
        if ($valori[$i] == $numero) :
            $trovato = true;
        endif;
        $i++;
    endwhile;

/* Ciclo For equivalente 
    for ($i = 0; $i < count($valori); $i++) :
        if ($valori[$i] == $numero) :
                $trovato = true;
                break;  // Break interrompe il ciclo più vicino
        endif;
    endfor;
    */
    
if ($trovato) :
    echo $numero . " è presente nell'array";
else :
    echo $numero . " non è presente nell'array";
endif;
br();

/* Ciclo inverso: prima fai le istruzioni, poi valuta la condizione 
        do {
            $istr;
        } while ($cond);
*/

//esercizio 4, convertire il voto in un giudizio, da 0 a 5 insufficiente, 6  sufficiente, 7 o 8 buono, 9 ottimo, 10 eccellente
$voto = 6;
if ($voto >= 0 && $voto <= 5):
    echo "Insufficiente";
elseif ($voto == 6):
    echo "Sufficiente";
elseif ($voto == 7 || $voto == 8):
    echo "Buono";
elseif ($voto == 9):
    echo "Ottimo";
elseif ($voto == 10):
    echo "Eccellente";
endif;

// quando voglio unire due stringhe posso concatenarle insieme con il punto (.)
if (array_key_exist("telefono", $persona_2) && $persona_2["telefono"] != ""):
    echo "Tel: " . $persona_2["telefono"];
endif;

// se concateno stringa vuota e numero, quest'ultimo viene convertito in stringa

?>