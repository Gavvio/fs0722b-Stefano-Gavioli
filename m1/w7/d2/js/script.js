/* ESERCIZIO 1 */
class Person {
    constructor(a, b) {
        this.name = a;
        this.age = b;
    }
    confronta(x, y) {
        if (x.age > y.age) {
            return x.name + " è più vecchio di " + y.name;
        }
        else if (x.age == y.age) {
            return x.name + " ha la stessa età di " + y.name;
        }
        else {
            return x.name + " è più giovane di " + y.name;
        }
    }
}

var p1 = new Person('Luca', 15);
var p2 = new Person('Mario', 5);
var p3 = new Person('Piero', 15);
console.log(p1.confronta(p3, p2));
console.log(p2.confronta(p3, p1));
console.log(p3.confronta(p2, p1));

/* ESERCIZIO 2 */

/* CLASSE, HO DECISO DI CREARE POI UN NUOVO ARRAY CON GLI OGGETTI CREATI TRAMITE QUESTA CLASSE */
class Student {
    constructor(a, b, c, d) {
        this.id = a;
        this.name = b;
        this.surname = c;
        this.class = d;
    }
    mostra_primi(items, pageSize) {
        tabella.innerHTML='';
        for (let i = 0; i < pageSize; i++) {
            tabella.innerHTML += '<tr><td>' + items[i].id + '</td><td>' + items[i].name + '</td><td>' + items[i].surname + '</td><td>' + items[i].class + '</td></tr>';
        }
    }
    mostra_ultimi(items, pageSize) {
        tabella.innerHTML='';
        for (let i = items.length - pageSize; i < items.length; i++) {
            tabella.innerHTML += '<tr><td>' + items[i].id + '</td><td>' + items[i].name + '</td><td>' + items[i].surname + '</td><td>' + items[i].class + '</td></tr>';
        }
    }
    precedente(items, pageSize,mom) {
        tabella.innerHTML='';
        for (let i = mom-pageSize; i < mom; i++) {
            tabella.innerHTML += '<tr><td>' + items[i].id + '</td><td>' + items[i].name + '</td><td>' + items[i].surname + '</td><td>' + items[i].class + '</td></tr>';
        }
    }
    successivo(items, pageSize,mom) {
        tabella.innerHTML='';
        for (let i = mom; i < mom+pageSize; i++) {
            tabella.innerHTML += '<tr><td>' + items[i].id + '</td><td>' + items[i].name + '</td><td>' + items[i].surname + '</td><td>' + items[i].class + '</td></tr>';
        }
    }
}

/* ESERCIZIO 2 VARIABILI */
var tabella = document.querySelector('#tabella');
var prima_pagina = document.querySelector('#primo');
var precedente = document.querySelector('#precedente');
var successivo = document.querySelector('#successivo');
var ultima_pagina = document.querySelector('#ultimo');
var array = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 7, nome: 'Gianno', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
];
var studente1 = new Student(array[0].id, array[0].nome, array[0].cognome, array[0].classe);
var studente2 = new Student(array[1].id, array[1].nome, array[1].cognome, array[1].classe);
var studente3 = new Student(array[2].id, array[2].nome, array[2].cognome, array[2].classe);
var studente4 = new Student(array[3].id, array[3].nome, array[3].cognome, array[3].classe);
var studente5 = new Student(array[4].id, array[4].nome, array[4].cognome, array[4].classe);
var studente6 = new Student(array[5].id, array[5].nome, array[5].cognome, array[5].classe);
var studente7 = new Student(array[6].id, array[6].nome, array[6].cognome, array[6].classe);
var studente8 = new Student(array[7].id, array[7].nome, array[7].cognome, array[7].classe);
var arrayStudenti = [studente1, studente2, studente3, studente4, studente5, studente6, studente7, studente8];

/* COMANDO DA ESEGUIRE AD APERTURA PAGINA*/
studente1.mostra_primi(arrayStudenti,2);

/* COMANDI TRAMITE I LINK */
prima_pagina.addEventListener('click',()=>{
    studente1.mostra_primi(arrayStudenti, 2);
});
ultima_pagina.addEventListener('click',()=>{
    studente1.mostra_ultimi(arrayStudenti, 2);
});
precedente.addEventListener('click',()=>{
   if(document.querySelector('#tabella td').textContent==1)
   {
    studente1.mostra_primi(arrayStudenti, 2);
   }
   else if(document.querySelector('#tabella td').textContent==3){
    studente1.mostra_primi(arrayStudenti, 2);
   }
   else if(document.querySelector('#tabella td').textContent==5){
    studente1.precedente(arrayStudenti,2,4);
   }
   else{
    studente1.precedente(arrayStudenti,2,6);
   }
});
successivo.addEventListener('click',()=>{
    if(document.querySelector('#tabella td').textContent==1)
    {
     studente1.successivo(arrayStudenti, 2,2);
    }
    else if(document.querySelector('#tabella td').textContent==3){
     studente1.successivo(arrayStudenti, 2,4);
    }
    else if(document.querySelector('#tabella td').textContent==5){
     studente1.mostra_ultimi(arrayStudenti,2);
    }
});
