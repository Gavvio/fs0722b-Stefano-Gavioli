/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono i seguenti:
-dato stringa
-dato numerico
-dato booleano
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

  var name='Stefano';
  console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

var a=12+20;
console.log(a);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name='Gavioli';
console.log(name);

/*const nome='Stefano';
console.log(nome);
nome='Gavioli';
console.log(nome);
scrivere una cosa così mi dà un errore a console alla riga 50*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(4-x);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var name1='john';
var name2='John';
if(name1 != name2){
  console.log('diversi');
}

