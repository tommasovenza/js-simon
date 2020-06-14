// Un alert espone 5 numeri casuali. 
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


// ((verificaNumero && verificaNumero2 && verificaNumero3 && verificaNumero4) || 
//     (verificanumero && verificaNumero2 && verificaNumero3 && verificaNumero5) || (verificaNumero2, verificaNumero3)

var arrayNumeri = [];

while (arrayNumeri.length < 5) {

    var numeroCasuale = Math.floor((Math.random() * 100) + 1);

    if(controllaSeNumeroPresente(numeroCasuale, arrayNumeri) === false) {
        arrayNumeri.push(numeroCasuale);
        
    } else {
        console.log('numerotrovato!')
    }
   
}

alert('eccoti 5 numeri da ricordare ' + arrayNumeri);

var nuovoArray = [];

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

    // var verificaNumero = arrayNumeri.includes(numeroUtente);
    // var verificaNumero2 = arrayNumeri.includes(numeroUtente2);
    // var verificaNumero3 = arrayNumeri.includes(numeroUtente3);
    // var verificaNumero4 = arrayNumeri.includes(numeroUtente4);
    // var verificaNumero5 = arrayNumeri.includes(numeroUtente5);

    // if(verificaNumero && verificaNumero2 && verificaNumero3 && verificaNumero4 && verificaNumero5) {
    //     alert('bravo ti sei ricordato tutti i numeri');
    // } else alert('mi dispiace non hai ricordato tutti i numeri');

    if ((controllaSeNumeroPresente(numeroUtente, arrayNumeri) === true)) {
        nuovoArray.push(numeroUtente);
    } 
    if ((controllaSeNumeroPresente(numeroUtente2, arrayNumeri) === true)) {
        nuovoArray.push(numeroUtente2);
    }
    
    if ((controllaSeNumeroPresente(numeroUtente3, arrayNumeri) === true)) {
        nuovoArray.push(numeroUtente3);
    }

    if ((controllaSeNumeroPresente(numeroUtente4, arrayNumeri) === true)) {
        nuovoArray.push(numeroUtente4);
    }

    if ((controllaSeNumeroPresente(numeroUtente5, arrayNumeri) === true)) {
        nuovoArray.push(numeroUtente5);
    } 
    
    console.log(nuovoArray.length);


    if (nuovoArray.length === 5) {
        alert('bravo hai ricordato tutti i numeri');
    
    } else if (nuovoArray.length === 4) {
    
        alert('hai ricordato 4 numeri');
    
    } else if (nuovoArray.length === 3) {
    
        alert('hai ricordato 3 numeri');
    
    } else if (nuovoArray.length === 2) {
    
        alert('hai ricordato 2 numeri');
    
    } else if (nuovoArray.length === 1) {
    
        alert('hai ricordato solamente un numero :(');
    }


}, 30000);






// funzione che controlla su un numero è presente in array e risponde vero se è presente e falso se non è presente
function controllaSeNumeroPresente(numeroUtente, arrayNumeri) {

    var presenzaNumero = false;

    for (var i = 0; i < arrayNumeri.length; i++) {

        var numeroCorrente = arrayNumeri[i];

        if (numeroUtente === numeroCorrente) {
            presenzaNumero = true;
        }
    }

    return presenzaNumero;
}



/////// questi sono appunti

// var prova = controllaSeNumeroPresente(numeroUtente, arrayNumeri);
// console.log(prova);

// var controllaNumero = controllaSeNumeroPresente(numeroUtente, arrayNumeri);
    
// for (var i = 0; i < arrayNumeri.length; i++) {
//     controllaSeNumeroPresente(numeroUtente, arrayNumeri)
// }

