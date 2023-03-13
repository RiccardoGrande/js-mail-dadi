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
  
// stampa un messaggio appropriato sull’esito del controllo.

console.log(mailList);
for (let i = 0; i < mailList.length ;i++){
    console.log(mailList[i]);


    if (mailEl == mailList[i]) {
        console.log('la mail è nella lista');
    } else {
        console.log('la mail non è nella lista');
    }
}




