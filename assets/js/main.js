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
  
//Mail Bonus
//Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

  const ulEl = document.querySelector('ul');

console.log(mailList);
for (let i = 0; i < mailList.length ;i++){
    console.log(mailList[i]);

// stampa un messaggio appropriato sull’esito del controllo.
    if (mailEl == mailList[i]) {
        console.log('la mail è nella lista');
    } else {
        console.log('la mail non è nella lista');
    }

    const liEl= document.createElement ('li');
    //inserisco il valore il valore (mailList[i]) al suo interno
    liEl.append (mailList[i])
    console.log(liEl);
    // inserisco li all'interno del ul 
    ulEl.append(liEl)

    const numberEl = document.getElementById('number');
    const buttonEL = document.querySelector('button');

    buttonEL.addEventListener('click', function() {
        // recupero il valore in console
        // console.log(numberEl.value);
        
        const number = Number(numberEl.value);
        // Recupera l'elemento dell'array che rientra nel range
        console.log(mailList[number]);
        
        // Stampiamo in pagina
        
        // seleziono buttonEL
        
        // inserisco un nuovo elemento dopo la chiusura del bottone
        buttonEL.insertAdjacentHTML('afterend', `<p>${mailList[number]}</p>`)
        })
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