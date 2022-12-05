console.log('Hello Universe!');
/*
    Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
    Infine stampa separatamente i 3 array.

*/

let automobile = {
    marca: '',
    modello: '',
    alimentazione: '',
}

let carsArray = [
    {
        marca: 'audio',
        modello: 'a8bre',
        alimentazione: 'metano',
    },

    {
        marca: 'benzai',
        modello: 's8vento',
        alimentazione: 'elettrico',
    },

    {
        marca: 'senpai',
        modello: 'sensei',
        alimentazione: 'diesel',
    },

    {
        marca: 'audio',
        modello: 'a8bre',
        alimentazione: 'metano',
    },

    {
        marca: 'benzai',
        modello: 's8vento',
        alimentazione: 'elettrico',
    },

    {
        marca: 'senpai',
        modello: 'sensei',
        alimentazione: 'diesel',
    },

    {
        marca: 'audio',
        modello: 'a8bre',
        alimentazione: 'metano',
    },

    {
        marca: 'benzai',
        modello: 's8vento',
        alimentazione: 'elettrico',
    },

    {
        marca: 'senpai',
        modello: 'sensei',
        alimentazione: 'diesel',
    },

    {
        marca: 'senpai',
        modello: 'sensei',
        alimentazione: 'diesel',
    }
];

let benzina = [];
let diesel = [];
let gpl = [];
let elettrico = [];
let metano = [];

for (i=0 ; i<carsArray.length ; i++) {
    const currentAuto = carsArray[i];
    if (currentAuto.alimentazione === 'benzina'){
    } else if (currentAuto.alimentazione === 'diesel'){
        diesel.push(carsArray[i]);
    } else if (currentAuto.alimentazione == 'gpl'){
        gpl.push(carsArray[i]);
    } else if (currentAuto.alimentazione == 'elettrico'){
        elettrico.push(carsArray[i]);
    } else if (currentAuto.alimentazione == 'metano'){
        metano.push(carsArray[i]);
    }
}



console.log(benzina);
console.log(diesel);
console.log(gpl);
console.log(benzina);
console.log(elettrico);
