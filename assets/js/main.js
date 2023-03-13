//Chiedi all’utente la sua email
    const mailEl = prompt("Qual'è la tua mail?")
    console.log(mailEl);
    
//controlla che sia nella lista di chi può accedere
const mailList = [
    'batman@gmail.com',
    'daftpunk@gmail.com',
    'bethesda@gmail.com',
    'cdprojectgmail.com'
  ];
  


console.log(mailList);
for (let i = 0; i < mailList.length ;i++){
    console.log(mailList[i]);

// stampa un messaggio appropriato sull’esito del controllo.
    if (mailEl == mailList[i]) {
        console.log('la mail è nella lista');
    } else {
        console.log('la mail non è nella lista');
    }
}



//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const numberCPU = Math.floor(Math.random() * 6);
console.log(numberCPU);

const numberPlayer = Math.floor(Math.random() * 6);
console.log(numberPlayer);
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (numberCPU < numberPlayer) {
    console.log('vince il giocatore');
} else {
    console.log('vince il computer');
}