function esercizio01() {

let giorno = window.prompt("Inserisci il giorno");
let mese = window.prompt("Inserisci il mese");
let anno = window.prompt("Inserisci l'anno");
document.getElementById('esl-dataInserita').innerText = giorno + "/" + mese + "/" + anno;

let dataFutura;
let risultato;

if (anno == 2025) {
    if (mese == 11) {
        if (giorno == 26) {

        } else {
            dataFutura = (giorno > 26);
        }
    } else {
        dataFutura = (mese > 11);
    }
} else {
    dataFutura = (anno > 2025);
    /* equivale a:
    if (anno > 2025) {
        dataFutura = true;
        } else {
            dataFutura = false;
        }
    */
}

if (!risultato) {
    if (dataFutura) {
        risultato = "La data è nel futuro";
    } else {
        risultato = "La data è nel passato";
    }
}
document.getElementById("esl-risultato").innerText = risultato;
}

function esercizio02() {
    let giorno = window.prompt("inserisci il giorno");
    let mese = window.prompt("inserisci il mese");
    let anno = window.prompt("inserisci l'anno");

    document.getElementById('es2-dataInserita').innerText = giorno + "/" + mese + "/" + anno;

    // converto in formato data
    let data = new Date(giorno + "/" + mese + "/" + anno);
    // giorno della settimana (da 0 a 6!)
    let giornoSettimana = data.getDay();

    let risultato;
    
    // stampare mercoledì 26 novembre
    switch (giornoSettimana) {
        case "1":
            risultato = "Lunedì";
        break;
        case "2":
            risultato = "Martedì";
        break;
        case "3":
            risultato = "Mercoledì";
        break;
        case "4":
            risultato = "Giovedì";
        break;
        case "5":
            risultato = "Venerdì";
        break;
        case "6":
            risultato = "Sabato";
        break;
        case "7":
            risultato = "Domenica";
        break;
    }

    risultato += " " + giorno + " ";

    switch (mese) {
        case "1":
            risultato += "Gennaio";
        break;
        case "2":
            risultato += "Febbraio";
        break;
        case "3":
            risultato += "Marzo";
        break;
        case "4":
            risultato += "Aprile";
        break;
        case "5":
            risultato += "Maggio";
        break;
        case "6":
            risultato += "Giungo";
        break;
        case "7":
            risultato += "Luglio";
        break;
        case "8":
            risultato += "Agosto";
        break;
        case "9":
            risultato += "Settembre";
        break;
        case "10":
            risultato += "Ottobre";
        break;
        case "11":
            risultato += "Novembre";
        break;
        case "12":
            risultato += "Dicembre";
        break;
    }

    document.getElementById("es2-risultato").innerText = risultato;
}

// nel ciclo while dovrò interagire col cliente
function esercizio03() {
    let numeroInserito = window.prompt("Inserisci un numero da 1 a 10");
    let numeroDaTrovare = 5;

    while (numeroInserito != numeroDaTrovare) {
        numeroInserito = window.prompt("Sbagliato, riprova!");
    }

    document.getElementById('es3-numeroScelto').innerText = "Il numero era" + numero // ???????
    document.getElementById('es3-risultato').innerText = "Congratulazioni!";
}

/* per generare numero casuali, da 1 a 10, si moltiplica per 10, floor fa l'arrotondamento per difetto
invece ceil per eccesso, per evitare che esca 0 si può aggiungere + 0.1 dopo * 10
*/
let numeroDaTrovare = Math.floor(Math.random() * 10); // Math.ceil(math.random() * 10);

function esercizio04() {
    let numeroInserito = window.prompt("Inserisci un numero!");
    document.getElementById('es4-numeroInserito').innerText = numeroInserito;

    let risultato = 1;

    for (let i = 1; i <= numeroInserito; i++) {
        risultato // ??????????
    }
}

function esercizio05() {
    let studente = {
        nome: "",
        cognome: "",
        matricola: "",
        voti: []
    }

    // input
    for (chiave in studente) {
        if (chiave != "voti") {
            studente[chiave] = window.prompt("Inserire " + chiave);
        } else {
            let stringaVoti = window.prompt("Inserire voti separati da ','");
            studente[chiave] = stringaVoti.split(",");
        }
    }

    // calcolo media
    let mediaVoti = 0;
    for (voto of studente.voti) {
        mediaVoti += parseInt(voto); // o parseFloat per i decimaliS
    }
    mediaVoti = mediaVoti / studente.voti.length;

    // stampa
    let risultato = "";
    for (chiave in studente) {
        if (chiave != "voti")
            risultato += chiave + ": " + studente[chiave] + "<br/";
    }
    document.getElementById(es5-risultato).innerHTML = risultato;
}


