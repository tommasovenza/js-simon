// Un alert espone 5 numeri casuali. 
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


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

    for (var i = 0; i < 5; i ++) {

        var numeroUtente = parseInt(prompt('inserisci un numero'));
        if ((controllaSeNumeroPresente(numeroUtente, arrayNumeri) === true)) {
            nuovoArray.push(numeroUtente);
        } 
    }
    
    console.log(nuovoArray.length);


    if (nuovoArray.length === 5) {
        alert('bravo hai ricordato tutti i numeri. ' 
        + ' I numeri che hai ricordato sono ' + nuovoArray);
    
    } else if (nuovoArray.length === 4) {
    
        alert('hai ricordato 4 numeri. ' 
        + ' I numeri che hai ricordato sono ' + nuovoArray);
    
    } else if (nuovoArray.length === 3) {
    
        alert('hai ricordato 3 numeri. ' 
        + ' I numeri che hai ricordato sono ' + nuovoArray);
    
    } else if (nuovoArray.length === 2) {
    
        alert('hai ricordato 2 numeri. ' 
        + ' I numeri che hai ricordato sono ' + nuovoArray);
    
    } else if (nuovoArray.length === 1) {
    
        alert('hai ricordato solamente un numero. :( ' 
        + ' I numeri che hai ricordato sono ' + nuovoArray);
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

