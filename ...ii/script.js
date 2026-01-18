/* Commento multilinea */
// Commento in linea

// Stampa in console
console.log("Ciao, mondo!"); 

/*

// Mostra un popup con un messaggio
window.alert("Benvenuto!");

// Mostra un popup con una richiesta che ritorna true/false
window.confirm("Sei sicuro?");

// Mostra un popup che chiede un dato
window.prompt("Inserisci un numero");
*/

// Dichiarazione di variabile

var stringa1 = "Ciao mondo"; // Variabile globale
let stringa2 = "Ciao mondo!"; // Variabile locale
const costante = "Ciao mondo!"; // Costante

// Stringhe
var stringa = "Insieme di caratteri";
console.log(stringa[2]);
console.log(typeof stringa); // String

// Interi -> int
var intero = 1;
console.log(typeof intero); // Number

// Decimali -> float;
var decimale = 1.2;
console.log(typeof decimale); // Number

// Boolean 
var bool = true;
console.log(typeof bool); // Boolean

// Array
var array = [1, 2, 3, 4, 5, 6];
console.log(typeof array); // Object

// Oggetto
var object = {
    "nome": "Mario",
    "eta": 30
};
console.log(typeof object); // Object

// Operatori aritmetici
var a = 1;
var b = 2;
var c = 1;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Resto della divisione

a = 1;
console.log(a++); // Leggo e poi incremento
console.log(++a); // Incremento e poi leggo

// Operatori logici
console.log(a < b);
console.log(a <= c);
console.log(a == 3); // Uguaglianza
console.log(a == "3"); // Uguaglianza per valore
console.log(a === "3"); // Uguaglianza per valore e tipo

console.log(!(a < b)); // NOT
console.log(a == 3 && b == 1); // AND
console.log(a == 3 || b == 1); // OR


// Concatenazione
console.log(stringa1 + stringa2);

a = 2;
b = 3;
c = "1";
var somma = a + c;

console.log(a + b); // Somma
console.log(a + c); // Concatenazione -> 21
console.log(somma + b); // 213
console.log(somma > 20); // Somma viene convertito in numero -> true
console.log(somma.length); // Lunghezza della stringa
console.log(a + b + c); // 51

var d;
console.log(d); // undefined
d = undefined;

var e = null;
console.log(e); // null

var oggetto = {
    "nullo": null,
    "undefined": undefined
};
console.log(oggetto);
console.log(d == true); // Falso!
console.log(e == true); // Falso!
console.log(d == e);   // Entrambi falsi -> true
console.log(d === e);  // Null è diverso da Undefined!

// Controlli di Flusso
/*var numero = window.prompt("Inserisci un numero");

if (numero % 2 == 0) {
    window.alert("Numero pari");
} else {
    window.alert("Numero dispari");
}*/

/*var mese = window.prompt("Inserisci il numero del mese");

switch (mese) {
    case "1":
        window.alert("Gennaio");
    break;
    case "2":
        window.alert("Febbraio");
    break;
    case "3":
        window.alert("Marzo");
    break;
    case "4":
        window.alert("Aprile");
    break;
    case "5":
        window.alert("Maggio");
    break;
    case "6":
        window.alert("Giugno");
    break;
    case "7":
        window.alert("Luglio");
    break;
    case "8":
        window.alert("Agosto");
    break;
    case "9":
        window.alert("Settembre");
    break;
    case "10":
        window.alert("Ottobre");
    break;
    case "11":
        window.alert("Novembre");
    break;
    case "12":
        window.alert("Dicembre");
    break;
    default:
        window.alert("Mese non valido");
}
*/

console.log(document.getElementById("elemento-1"));
console.log(document.getElementsByClassName('elementi'));
console.log(document.getElementsByTagName('p'));

console.log(document.querySelector('.elementi'));
console.log(document.querySelectorAll('.elementi'));


var lista = document.getElementById('genitore');
console.log(lista.getElementsByClassName('figlio')); // 3 figli

// Inserisci il codice HTML nell'elemento
lista.innerHTML = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio')); // 1 figlio

// Inserisci testo semplice nell'elemento
lista.innerText = "<li>1</li><li class='figlio'>2</li>";
console.log(lista.getElementsByClassName('figlio')); // 0 figli

var voti = [4, 6, 7, 8, 6, 8];
var somma = 0;
for (let i = 0; i < voti.length; i++) {
    somma += voti[i];
}
console.log("Media = " + (somma / voti.length));
/*
var numero = window.prompt("Inserisci un numero");

var elementi = [1, 2, 3, 4, 6, 7, 8, 9];

let i = 0;
let trovato = false;

while (!trovato && i < elementi.length) {
    if (elementi[i] == numero) {
        trovato = true;
    }
    i++;
}

if (trovato) {
    console.log("Elemento trovato");
} else {
    console.log("Elemento non trovato");
}
*/
var array = [1, 2, 3, 4, 5];
var oggetto = {
    nome: "Luca",
    cognome: "Rossi",
    chiave: "chiave!"
};

// Ciclo for of
for (valore of array) {
    console.log(valore);
} 

// Ciclo for in
for (chiave in oggetto) {
    console.log(oggetto[chiave]);
}

var clickMeButton = document.getElementById("click-me-button");

clickMeButton.addEventListener('mouseenter', function() {
    clickMeButton.style.top = Math.random() * 100 + "%";
    clickMeButton.style.left = Math.random() * 100 + "%";
});

/*
<input id="password" type="password" placeholder="Password" />
<button id="show-password">
    Mostra la password
</button>
*/

var showPasswordBtn = document.getElementById('show-password');
var passwordInput = document.getElementById('password');

showPasswordBtn.addEventListener('click', function() {

    if (passwordInput.getAttribute('type') == 'password') {
        passwordInput.setAttribute('type', 'text');
        showPasswordBtn.innerText = "Nascondi la password";
    } else {
        passwordInput.setAttribute('type', 'password');
        showPasswordBtn.innerText = "Mostra la password";
    }
});

passwordInput.addEventListener('change keyup', function() {
    if (passwordInput.value.length < 3) {
        passwordInput.style.color = "red";
    } else {
        passwordInput.style.color = "green";
    }
});
