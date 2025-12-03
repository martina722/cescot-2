// stampa in console
console.log("Ciao mondo");

// mostra un pop up con messaggio
window.alert("Benvenuti");

// pop up con richiesta
window.confirm("sei sicuro?");

/* mostra pop up che chiede un dato
window.prompt("inserisci un numero"); */

// dichiarazione variabile
var stringa1 = "Ciao mondo" ; /* variabile globale, quando l'ho dichiarata la vedono 
tutti all'inerno del file */
let stringa2 = "ciao mondo!" ; /* variabile locale, se la dichiaro dentro la funzione la vedo solo 
dentro quella funzione */
const costante = "ciao Mondo!!" ; /* costante, alla base del framework di JS c'è lo stato non la
variabile, ma l'oggetto e il suo stato (es. aperto, chiuso), queste informazioni sono all'interno di
una costante */

// stringhe
var stringa = "insieme di caratteri!";
console.log(stringa[2]);
console.log(typeof stringa);

// numeri interi -> int
var intero = 1;
console.log(typeof intero);

// decimali -> float
var decimale = 1.2;
console.log(typeof decimale);

// boolean
var bool = true;
console.log(typeof bool);

// array
var array = [1, 2, 3, 4, 5, 6];
console.log(typeof array);

// oggetto
var object = {
    "nome": "Mario",
    "eta": "30"
};
console.log(typeof object);

// operatori aritmetici
var a = 1;
var b = 2;
var c = 1;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // resto della divisione

a = 1;
console.log(a++); // leggo poi incremento
console.log(++a); // incremento poi leggo

// operatori logici
console.log(a < b);
console.log(a <= c);
console.log(a == 3 && b == 1); // and
console.log(a == 3 || b == 1); // or
console.log(!(a < b)); // not
console.log(a == 3); //uguaglianza
console.log(a == "3"); // uguaglianza per valore
console.log(a === 3); // uguaglianza per tipo e per valore

// concatenazione
console.log(stringa1 + stringa2);

a = 2;
b = 3;
c = "1";
var somma = a + c;

console.log(a + b); // somma
console.log(a + c); // concatenazione -> "2 attaccato a 1" = 21
console.log(somma + b); // a + c = 2 e 1 poi aggiungo il 3, quindi 213
console.log(somma > 20); // somma viene convertito in numero -> quindi è vero
console.log(somma.lenght); // lunghezza della stringa
console.log(a + b + c); // 51, perchè 2+3=5 poi aggiungo "1", quindi 51

var d;
console.log(d); // tipo di dato indefinito (undefined)
d = undefined;

var e = null
console.log(e); // tipo di dato nullo, prima o poi avrà un valore

var oggetto = {
    "nullo": null,
    "undefined": undefined
};
console.log(oggetto);
console.log(d == true); // falso
console.log(e == true); // falso
console.log(d == e); // entrambi falsi -> true
console.log(d === e); //null è diverso da undefined

// controllo di flusso
var numero = window.prompt("Inserisci un numero");

if (numero % 2 == 0) {
    window.alert("Numero pari");
} else {
    window.alert("Numero dispari");
}

var mese = window.prompt("Inserisci il numero del mese");
switch (mese) {
    case "1":
        window.alert ("Gennaio");
    break;
    case "2":
        window.alert ("Febbraio");
    break;
    case "3":
        window.alert ("Marzo");
    break;
    case "4":
        window.alert ("Aprile");
    break;
    case "5":
        window.alert ("Maggio");
    break;
    case "6":
        window.alert ("Giungno");
    break;
    case "7":
        window.alert ("Luglio");
    break;
    case "8":
        window.alert ("Agosto");
    break;
    case "9":
        window.alert ("Settembre");
    break;
    case "10":
        window.alert ("Ottobre");
    break;
    case "11":
        window.alert ("Novembre");
    break;
    case "12":
        window.alert ("Dicembre");
    break;
    default :
        window.alert("mese non valido");
}

console.log(document.getElementById("elemento-1"));
console.log(document.getElementsByClassName('elementi'));
console.log(document.getElementsByTagName('p'));

console.log(document.querySelector('.elementi'));
console.log(document.querySelectorAll('.elementi'));

var lista = document.getElementById('genitore');
var lista = document.getElementsByClassName('figlio'); // 3 figli

// inserisci il codice HTML nell'elemento
lista.innerHTML = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio')); // 1 figlio

// inserisci testo semplice nell'elemento
lista.innerText = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio')); // 0 figli

// il punto lenght mi fa capire che si tratta di una variabile di tipo array
var voti = [4,6,7,8,6,8];
var somma = object;
for (let i = 0; i < voti,lenght; i++) {
    somma += voti[i];
}
console.log("Media = " + (somma / voti.lenght));

window.prompt("Inserisci un numero");

var elementi = [1,2,3,4,5,6,7,8,9]