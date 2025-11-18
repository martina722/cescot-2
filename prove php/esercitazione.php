<?php
/* esercizi: */

$a = 12;
$b = 24;
$somma = $a + $b;
$sottrazione = $a - $b;
$moltiplicazione = $a * $b;
$divisione = $a / $b;
?>
<div>
    <h2>esercizio 01</h2>
    <ul>
        <li><strong>somma:</strong> <?php echo $somma; ?></li>
        <li><strong>sottrazione:</strong> <?php echo $sottrazione; ?></li>
        <li><strong>moltiplicazione:</strong> <?php echo $moltiplicazione; ?></li>
        <li><strong>divisione:</strong> <?php echo $divisione; ?></li>
    </ul>

<?php
print_r(12 + 24); // somma i due valori e stampa il risultato
print_r(24 - 12); // sottrae i due valori e stampa il risultato
print_r(12 * 24); // moltiplica i due valori e stampa il risultato
print_r(24 / 12); // divide i due valori e stampa il risultato

// verificare se la parola "albero" è uguale alla parola "casa"
$parola = "albero";
if ($parola == "casa") {
    echo "Le parole sono uguali";
} else {
    echo "Le parole sono diverse";
}

// dati due valori numerici, verificare l'uguaglianza
$c = "145";
$d = 145;

?>

<div>
    <h2>esercizio 03</h2>
    <h3>uguaglianza per valore</h3>
    <p>
        <?php
        if ($c == $d) {
            echo "C è uguale a D";
        } else {
            echo "C è diverso da D";
        }
        ?>
    </p>
</div>

<?php
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

// stampa vero
if (true or false): // true || false
    echo "Condizione vera";
else:
    echo "Condizione falsa";
endif;

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
endif;

// se la prima condizione è falsa non valuto nemmeno la seconda, dato che il risultato è comunque FALSO
if (array_key_exists("telefono", $persona_2) && $persona_2["telefono"] != ""):
    echo "Tel: ";
    echo $persona_2["telefono"];
endif;

if ($persona_2["telefono"] != ""):
    echo "Tel: ";
    echo $persona_2["telefono"];
endif;

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
?>

<div>
    <h2>esercizio 04</h2>
    <p>il giudizio è: <?php echo $giudizio; ?></p>
</div>

<?php
// quando voglio unire due stringhe posso concatenarle insieme con il punto (.)
if (array_key_exist("telefono", $persona_2) && $persona_2["telefono"] != ""):
    echo "Tel: " . $persona_2["telefono"];
endif;

// se concateno stringa vuota e numero, quest'ultimo viene convertito in stringa