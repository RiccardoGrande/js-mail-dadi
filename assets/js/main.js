//Chiedi all’utente la sua email
    const mailEl = prompt("Qual'è la tua mail?")
    console.log(mailEl);
//controlla che sia nella lista di chi può accedere
const mailList = [
    'batman@gmail.com',
    'daftpunkgmail.com',
    'bethesda@gmail.com',
    'cdprojectgmail.com'
  ];
  const mailSelect = mailList
  console.log(mailList);
  console.log(mailSelect);
// stampa un messaggio appropriato sull’esito del controllo.

if (mailEl == mailSelect) {
    console.log('la mail è nella lista');
} else {
    console.log('la mail non è nella lista');
}