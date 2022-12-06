console.log('Hello Universe!');

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


let animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'fagiano', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'lince', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'un altro cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallo', famiglia: 'fasianidi', classe: 'uccelli' },
]

const soloMammiferi = animali.filter((elemento) => {
    if (elemento.classe == 'mammiferi'){
        return true;
    }
    return false;
});

console.log(soloMammiferi);

const nameModified = soloMammiferi.map((element) => {
    element.nome = element.nome.charAt(0) + element.nome.substring(1).toUpperCase();

    return element.nome;
});

console.log(nameModified);
