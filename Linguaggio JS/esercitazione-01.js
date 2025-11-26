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
}

if (!risultato) {
    document.getElementById("esl-risultato").innerText = risultato;
}

function esercizio02() {
    let giorno = window.prompt("inserisci giorno");
    let mese = window.prompt("inserisci mese");
    let anno = window.prompt("inserisci anno");

    // converto in formato data
    let data = new Date(giorno + "/" + mese + "/" + anno);
    data.getDay();
    
    // stampare mercoledì 26 novembre
    switch (giornoSettimana) {
        case "1":
            risultato = "Lunedì";
            break;
        case "2":
            risultato = "Martedì";
            break;
        case "3":
            risultato = "mercoledì";
            break;
        case "4":
            risultato = "giovedì";
            break;
        case "5":
            risultato = "venerdì";
            break;
        case "6":
            risultato = "sabato";
            break;
        case "7":
            risultato = "domenica";
            break;
            default :
    }

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
    }