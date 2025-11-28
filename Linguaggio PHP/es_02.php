<?php
// secondo esempio
    $numero = 45;
    $valori = [1, 3, 6, 87, 45, 17, 89, 12, 34, 23, 5];

    // while = finchè
    $trovato = false;

    $i = 0;
    while (!$trovato && $i < count($valori)) :
        if ($valori[$i] == $numero) :
            $trovato = true;
        endif;
        $i++;
    endwhile;

    /* ciclo for equivalente */
    for ($i = 0; !$trovato && $i < count($valori); $i++) :
        if ($valori[$i] == $numero) :
            $trovato = true;
            break; //interrompe il ciclo più vicino nel programma, il più interno
        endif;
    endfor;
    
    if ($trovato) :
        echo $numero . " è presente nell'array (" . $i . " iterazioni)";
    else :
        echo $numero . " non è presente nell'array";
    endif;

    /* ciclo inverso; prima fai le istruzioni, poi valuta la condizione
    do {
        $istr;
    } while ($cond);
     */

// es. 1 = dato un insieme di valori, trovare il valore più alto
$valori =[1, 3, 5, 2, 5, 3, 8, 4, 7];
$massimo = 0
/* oppure, con intelligenza artificiale:
$massimo = max($numeri); -> La funzione max() scorre l'intero array e confronta ogni elemento per identificare e 
restituire quello con il valore numerico più grande */

for ($i = 0; $i < count($valori); $i++) :
    if ($valori[$i] > $massimo) :
        $massimo = $valori[$i];
    endif;
endfor;

?>
    <div>
        <h2>esercizio 01</h2>
        <p>
            il valore maggiore è: <?php echo $massimo; ?>
        </p>
    </div>
<?php

//stampa tutti gli elementi, finchè l'elemento corrente è inferiore a 15
$valori = [12, 13, 5, 18, 20, 7, 14];
$output = "";
// somma e conta solo i valori validi
for ($i = 0; $i < count($valori); $i++) :
    if ($valori[$i] < 15) :
        $output .= $valori[$i] . " ";
    else :
        break;
    endif;
endfor;

$i = 0;
while ($i < count($valori) && $valori[$i] < 15) :
    $output .= $valori[$i] . " ";
    $i++;
endwhile;

?>
    <div>
        <h2>esercizio 02</h2>
        <p>
            i valori sono: <br/>
            <?php echo $output; ?>
        </p>
    </div>
<?php

// operatori di incremento/decremento
$i++; 
++$i;

$i = 1;
echo $i++; // stampo il valore e poi lo incremento
echo ++$i; // incremento il valore poi lo stampo

echo $i--;
echo --$i;

// es. 3 = stampare i nomi delle persone maggiorenni e fare la media delle loro età
$persone = [
    array(
        "nome" => "Mario",
        "età" => 30
    ) ,
    array(
        "nome" => "Luisa",
        "età" => 25
    ) , 
    array(
        "nome" => "Carlo",
        "età" => 35
    ) , 
    array(
        "nome" => "Anna",
        "età" => 28
    ) ,
    array(
        "nome" => "Paolo",
        "età" => 14
    ) ,
    array(
        "nome" => "Giulia",
        "età" => 17
    )
];

$anni = 0;
?>
    <div>
        <h2>esercizio 03</h2>
        <p>le persone maggiorenni sono:</p>
        <ul>
            <?php
            // array multidimensionale = matrice
            foreach ($persone as $persona) : /* ciclo for-each: per ogni elemento dell'array $persone, assegna l'elemento corrente 
    alla variabile $persona e esegui il blocco di codice */
                if ($persona["eta"] >= 18) :
                    echo "<li>".$persona["nome"]."</li>";
                endif;
                $anni += $persona["eta"];
            endforeach;
            // ciclo for alternativo
            /*
            for ($i = 0; $i < count($persone); $i++) :
                if ($persone[$i]["eta"] >= 18) :
                    echo "<li>".$persone[$i]["nome"]."</li>";
                endif;
                $anni += $persone[$i]["eta"];
            endfor;
            */
            ?>
        </ul>
        <p>
            l'età media delle persone è:
            <?php echo ($anni / count($persone)); ?>
        </p>
    </div>
<?php

if ($persone["eta"] >= 18) {
        echo "Utente maggiorenne<br/>";
    } else {
        echo "Utente minorenne<br/>";
    }
endif;

echo ( $anni / count($persone) );

$settimana = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

for ($i = 0; $i < count($settimana); $i++) :
    switch($settimana[$i]) : /* non è un if ma analizza il primo caso, se è vero entra nel caso e non esce, fa tutte le 
        istruzioni successive */
        case "monday" :
            echo "Lunedi";
            break; /* esce dallo switch */
        case "tuesday" :
            echo "Martedi";
            break;
        case "wednesday" :
            echo "Mercoledi";
            break;
        case "thursday" :
            echo "Giovedi";
            break;
        case "friday" :
            echo "Venerdi";
            break;
        case "saturday" :
            echo "Sabato";
            break;
        case "sunday" :
            echo "Domenica";
            break;
        default :
        echo "Giorno non valido"; 
    endswitch;
endfor;

// es. 4 = tabellina del 7
$numero = 7;
for ($i = 1; $i <= 10; $i++) :
    $prodotto = $numero * $i;
    echo "$numero x $i = $prodotto<br/>";
endfor;
br();

/* riutilizzare un pezzo di codice = funzione, ogni volta che la chiamo, esegue le istruzioni al suo interno, è come un 
mini-programma */

$studenti = [
    array(
        "nome" => "Mario",
        "eta" => 30
        "voti" => [6, 7, 8, 9, 10]
    ) ,
    array(
        "nome" => "Luisa",
        "eta" => 25
        "voti" => [7, 8, 6, 9, 10]
    ) , 
    array(
        "nome" => "Carlo",
        "eta" => 35
        "voti" => [8, 9, 7, 6, 10]
    ) , 
    array(
        "nome" => "Anna",
        "eta" => 28
        "voti" => [9, 8, 7, 6, 10]
    ) ,
    array(
        "nome" => "Paolo",
        "eta" => 14
        "voti" => [6, 5, 7, 8, 9]
    ) ,
    array(
        "nome" => "Giulia",
        "eta" => 17
        "voti" => [7, 8, 9, 6, 10]
    )
    ];

    /**
     * calcola la media aritmetica dei voti.
     * 
     * @param int[] $voti i voti dello studente
     * @return float la media aritmetica dei voti
     */
function calcola_media($voti) {
    $somma = 0;
    for ($i = 0; $i < count($voti); $i++) :
        $somma += $voti[$i];
    endfor;

    $media = $somma / count($voti);
    return $media;
}

foreach ($studenti as $studente) :
    $media = calcola_media($studente["voti"]);
    echo $studente["nome"] . " ha una media voti di: " . $media . ": ";
    if ($media >= 6) :
        echo "Promosso<br/>";
    else :
        echo "Bocciato<br/>";
    endif;
    br ();
endforeach;

function formatta_data($data) {
    $parti = explode(" ", $data); // suddivide la stringa in un array
    $giorno_della_settimana = traduci_giorno_settimana($parti[0]);
    $giorno_del_mese = $parti[1];
    $mese = traduci_mese($parti[2]);
    $anno = $parti[3];

    return $giorno_della_settimana . " " . $giorno_del_mese . " " . $mese . " " . $anno;
}

echo formatta_data("Monday 14 September 2025");

function traduci_giorno_della_settimana($giorno) {
    switch(strtolower($giorno)):
        case "monday":
            return "lunedì";
        case "tuesday":
            return "martedì";
        case "wednesday":
            return "mercoledì";
        case "thursday":
            return "giovedì";
        case "friday":
            return "venerdì";
        case "saturday":
            return "sabato";
        case "sunday":
            return "domenica";
        default:
            return false;
    endswitch;
}

function traduci_mese($mese) {
    switch(strtolower($giorno)):
        case "january" :
            return "Gennaio";
        case "february" :
            return "Febbraio";
        case "march" :
            return "Marzo";
        case "april" :
            return "Aprile";
        case "may" :
            return "Maggio";
        case "june" :
            return "Giugno";
        case "july" :
            return "Luglio";
        case "august" :
            return "Agosto";
        case "september" :
            return "Settembre";
        case "october" :
            return "Ottobre";
        case "november" :
            return "Novembre";
        case "december" :
            return "Dicembre";
        default :
            return false;
    endswitch;
}

/* esercizio 4 = data l'eta di una persona, ritorna se può guidare il 125 */
$numero = 7;
function può_guidare_125($età) {
    if ($età >= 16) :
        return true;
    else :
        return false;
    endif;
}

// dato un numero verifica che sia divisibile per 3
function è_divisibile_per_3($numero) {
    return $numero % 3 == 0;
}

// dato un numero, ritornalo in formato EURO (€ 1.234,56)
function formatta_euro($numero) {
    return "€ " . number_format($numero, 2, ".", "");
}

?>