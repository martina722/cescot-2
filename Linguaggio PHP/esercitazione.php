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

    ?> 
        <div>
            <h2>Esercizio 02</h2>
            <p>
                <?php
                    if ($parola == "casa") {
                        echo "La parola è \"Casa\"";
                    } else {
                        echo "La parola è diversa da \"Casa\"";
                    }
                ?>
            </p>
        </div>
    <?php

// dati due valori numerici, verificare l'uguaglianza
$c = "145";
$d = 145;

?>
        <div>
            <h2>Esercizio 03</h2>
            <h3>Uguaglianza per valore</h3>
            <p>
                <?php
                    if ($c == $d) {
                        echo "C è uguale a D";
                    } else {
                        echo "C è diverso da D";
                    }
                ?>
            </p>
            <h3>Uguaglianza per tipo e valore</h3>
            <p>
                <?php
                    if ($c === $d) {
                        echo "C è uguale a D";
                    } else {
                        echo "C è diverso da D";
                    }
                ?>
            </p>
        </div>
    <?php

// esercizio 04
$voto = 11;

$giudizio = false;

    if ($voto <= 5) :
        $giudizio = 'insufficiente';
    elseif ($voto == 6) :
        $giudizio = 'sufficiente';
    elseif ($voto == 7 or $voto == 8) :
        $giudizio = 'buono';
    elseif ($voto == 9) :
        $giudizio = 'ottimo';
    elseif ($voto == 10) :
        $giudizio = 'eccellente';
    endif;

switch($voto) :
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            $giudizio = 'insufficiente';
            break;
        case 6:
            $giudizio = 'sufficiente';
            break;
        case 7:
        case 8:
            $giudizio = 'buono';
            break;
        case 9:
            $giudizio = 'ottimo';
            break;
        case 10:
            $giudizio = 'eccellente';
            break;
        default:
            $giudizio = 'Voto non valido';
    endswitch;

    ?>
    
        <div>
            <h2>Esercizio 04</h2>
            <?php
                if ($giudizio) :
                    ?>
                        <p>Il giudizio è: <?php echo $giudizio; ?></p>
                    <?php
                    else :
                        ?>
                            <p>il voto inserito non è valido (0 <= voto <= 10)</p>
                        <?php
                    endif;
            ?>
        </div>

