let computer = Math.floor(Math.random() * 3);
let player = 0;

let playerWord = "";
let result = "";
let computerWord = "";

if (player === 0) playerWord = "sasso";
else if (player === 1) playerWord = "carta";
else if (player === 2) playerWord = "forbici";

if (computer === 0) computerWord = "sasso";
else if (computer === 1) computerWord = "carta";
else if (computer === 2) computerWord = "forbici";

if (player === computer) {
  result = "pareggio";
} else if (
    (player === 0 && computer === 1) ||
    (player === 1 && computer === 2) ||
    (player === 2 && computer === 0)
) {
  result = "hai vinto!! brava";
} else {
  result = "hai perso! :(";
}

console.log("player picked:        " + playerWord);
console.log("computer picked:      " + computerWord);
console.log("");
console.log(result);