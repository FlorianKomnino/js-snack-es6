console.log('Hello Universe!');
/*
1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

*/

let student = {
    name : '',
    surname : '',
    age : '',
}

console.log(student);

for (let property in student) {
    console.log(property);
}

let classListOfStudents = [
    {
        name : 'Giosualda',
        surname : 'Ferretti',
        age : '50',
    },

    {
        name : 'Marco',
        surname : 'Marchi',
        age : '99',
    },

    {
        name : 'Franchina',
        surname : 'Ferretti',
        age : '12',
    }
];