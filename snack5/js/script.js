console.log('Hello Universe!');

/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

let people = [
    {
        name: 'Gianpinuccia',
        surname: 'Patrupilli',
        age: 91
    },

    {
        name: 'Pierino',
        surname: 'Patrupilli',
        age: 11
    },
    {
        name: 'Salvatauro',
        surname: 'Patrupilli',
        age: 28
    },
    {
        name: 'GiadaScript',
        surname: 'Patrupilli',
        age: 55
    },
    {
        name: 'Donatonni',
        surname: 'Patrupilli',
        age: 40
    },
    {
        name: 'Salvio',
        surname: 'Patrupilli',
        age: 33
    },
    {
        name: 'Checca',
        surname: 'Patrupilli',
        age: 1
    },
    {
        name: 'Tantania',
        surname: 'Patrupilli',
        age: 2048
    },
    {
        name: 'Bimbumbanksi',
        surname: 'Patrupilli',
        age: 100
    },
    {
        name: 'Uga',
        surname: 'Patrupilli',
        age: 88
    }
];

let possibleDrivingLicense = people.filter((person) => person.age > 18);
console.log(possibleDrivingLicense);