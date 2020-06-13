// Un alert espone 5 numeri casuali. 
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// var numeroCasuale = Math.floor((Math.random() * 100) + 1);
// var numeroCasuale2 = Math.floor((Math.random() * 100) + 1);
// var numeroCasuale3 = Math.floor((Math.random() * 100) + 1);
// var numeroCasuale4 = Math.floor((Math.random() * 100) + 1);
// var numeroCasuale5 = Math.floor((Math.random() * 100) + 1);

// var alert = alert('eccoti 5 numeri da ricordare ' + numeroCasuale + ' ' + numeroCasuale2 + ' ' + numeroCasuale3 + ' ' + numeroCasuale4 + ' ' + numeroCasuale5);


// console.log(numeroCasuale);
// console.log(numeroCasuale2);
// console.log(numeroCasuale3);
// console.log(numeroCasuale4);
// console.log(numeroCasuale5);




var arrayNumeri = [];

for (var i = 0; i < 5; i++ ) {

    var numeroCasuale = Math.floor((Math.random() * 100) + 1);
    
    arrayNumeri.push(numeroCasuale);
   
}

alert('eccoti 5 numeri da ricordare ' + arrayNumeri);


setTimeout(function() {
    var numeroUtente = parseInt(prompt('inserisci un numero'));
    var numeroUtente2 = parseInt(prompt('inserisci un numero'));
    var numeroUtente3 = parseInt(prompt('inserisci un numero'));
    var numeroUtente4 = parseInt(prompt('inserisci un numero'));
    var numeroUtente5 = parseInt(prompt('inserisci un numero'));

    console.log(numeroUtente);
    console.log(numeroUtente2);
    console.log(numeroUtente3);
    console.log(numeroUtente4);
    console.log(numeroUtente5);

    var verificaNumero = arrayNumeri.includes(numeroUtente);
    var verificaNumero2 = arrayNumeri.includes(numeroUtente2);
    var verificaNumero3 = arrayNumeri.includes(numeroUtente3);
    var verificaNumero4 = arrayNumeri.includes(numeroUtente4);
    var verificaNumero5 = arrayNumeri.includes(numeroUtente5);

    if(verificaNumero && verificaNumero2 && verificaNumero3 && verificaNumero4 && verificaNumero5) {
        alert('bravo ti sei ricordato tutti i numeri');
    } else alert('mi dispiace non hai ricordato tutti i numeri');

    

}
, 30000);



// var numeroUtente2 = parseInt(prompt('inserisci un numero'));

// var numeroUtente3 = parseInt(prompt('inserisci un numero'));

// var numeroUtente4 = parseInt(prompt('inserisci un numero'));

// var numeroUtente5 = parseInt(prompt('inserisci un numero'));

// ((verificaNumero && verificaNumero2 && verificaNumero3 && verificaNumero4) || 
//     (verificanumero && verificaNumero2 && verificaNumero3 && verificaNumero5) || (verificaNumero2, verificaNumero3)