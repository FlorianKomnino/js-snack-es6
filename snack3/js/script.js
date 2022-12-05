console.log('Hello Universe!');
/*
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
*/

let zucchina = {
    variety: '',
    weight: '',
    length: '',
}

let zucchineArray = [
    {
        variety: 'viola',
        weight: 80,
        length: 7.5,
    },

    {
        variety: 'nera',
        weight: 400,
        length: 25,
    },

    {
        variety: 'viola',
        weight: 80,
        length: 7.5,
    },

    {
        variety: 'nera',
        weight: 400,
        length: 25,
    },

    {
        variety: 'viola',
        weight: 80,
        length: 7.5,
    },

    {
        variety: 'nera',
        weight: 400,
        length: 25,
    },

    {
        variety: 'viola',
        weight: 80,
        length: 7.5,
    },

    {
        variety: 'nera',
        weight: 400,
        length: 25,
    },

    {
        variety: 'viola',
        weight: 80,
        length: 7.5,
    },

    {
        variety: 'nera',
        weight: 400,
        length: 25,
    },
];

let totalWeight = 0;

for (i=0 ; i<zucchineArray.length ; i++) {
    totalWeight += zucchineArray[i].weight;
}

const averageWeight = totalWeight / zucchineArray.length;

let totalLength = 0;


for (i=0 ; i<zucchineArray.length ; i++) {
    totalLength += zucchineArray[i].length;
}

const averageLength = totalLength / zucchineArray.length;

console.log(totalWeight);
console.log(averageWeight);

console.log(totalLength);
console.log(averageLength);