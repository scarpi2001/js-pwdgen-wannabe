//generare una password cheidendo all'utente: nome, cognome e colore preferito

//variabili
let nome;
let cognome;
let colore;
let password;

//chiedere all'utente nome
nome = prompt("inserisci il tuo nome");
console.log(nome);

//chiedere all'utente cognome
cognome = prompt("inserisci il tuo cognome");
console.log(cognome);

//chiedere all'utente colore preferito
colore = prompt("inserisci il tuo colore preferito");
console.log(colore);

//generare password
password = nome + cognome + colore + "21";

//output
console.log(password);

document.getElementById("user_password").innerHTML = `${password}`;