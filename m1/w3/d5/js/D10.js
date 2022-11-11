/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

//creo la variabile a visibilità locale e le assegno come valore 10+20
let sum=10+20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

//creo la variabile random e usando math floor e math random le assegno un numero randomico da 1 a 20
let random=Math.floor(Math.random()*21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

//poco da dire, creo la variabile me e le assegno le proprietà richieste rendendola un oggetto
let me={
  name:'stefano',
  surname:'gavioli',
  age:'21'
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

//usando il comando delete rimuovo la proprietà age dall'oggetto me
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

//assegno come nuova proprietà a me l'array di stringhe skills
me.skills=['html','css','javascript','c','c++'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

//aggiungo in fondo all'array skills un nuovo elemento usando push
me.skills.push('nuovo elemento');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

//rimuovo l'ultimo elemento dall'array skills usando pop
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

//creo la mia funzione usando una costante e stabilisco che ritorni un numero casuale da 1 a 6
const dice=function()
{
  return Math.floor(Math.random()*7);
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

//penso creerò tutte le funzioni usando la costante, anche se potrei usare gli altri modi, in ogni caso creo la funzione e con gli if capisco quale sia il numero maggiore, per poi ritornarlo
const whoIsBigger=function(a,b)
{
  if(a>b)
  {
    return a;
  }
  else return b;
}
console.log(whoIsBigger(3,5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

//uso il metodo split per dividere la mia stringa ad ogni occorrenza del carattere spazio ' '
const splitMe=function(str)
{
  var arr=str.split(' ');
  return arr;
}
console.log(splitMe('frase da dividere in parole'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

//usando lo split divido la stringa in un array di caratteri, a quel punto usando shift e pop rimuovo rispettivamente il primo o ultimo elemento
//dell' array generato, poi col join rendo questo array di nuovo una stringa e lo ritorno
const deleteOne=function(str,bool)
{
  var arr=str.split('');
  if(bool==true)
  {
    arr.shift();
    arr=arr.join('');
  }
  else{
    arr.pop();
    arr=arr.join('');
  }
  return arr;
}
console.log(deleteOne('andiamo',true));
console.log(deleteOne('andiamo',false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

//per questo esercizio ho chiesto una mano a internet ad essere onesto, in ogni caso uso il comando replace per sostituire ogni occorrenza di 
//numeri da 0 a 9 con uno spazio vuoto
const onlyLetters=function(str)
{
 var arr=str.replace(/[0-9]/g,'');
 return arr;
}
console.log(onlyLetters('ciao12 15amo'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

//ho cercato su internet una regex per includere i casi validi di mail, poi ho ritornato un test che risulterà true se la mail è valida
const isThisAnEmail=function(str)
{
  const regexMail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  return regexMail.test(str);
}
console.log(isThisAnEmail('steve.gavvio@gmail.com'));
console.log(isThisAnEmail('decisamente non un email'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

//creo una nuova variabile usando il metodo date e tramite 'toLocaleString' imposto che mi venga fornito il nome del giorno in base alla posizione
//inoltre ho impostato che il nome del giorno venga mostrato in versione 'long'
const whatDayIsIt=function()
{
  let giorno = new Date().toLocaleString(
    'default', {weekday: 'long'});
  return giorno;
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

//creo il mio oggetto con le sue proprietà vuote, eseguo un ciclo for num volte e ogni volta aggiungo il numero random all'elenco dei numeri
//e aggiorno la somma totale
const rollTheDices=function(num)
{
  var ritorna={
    sum:0,
    values:[]
  };
  for(let i=0;i<num;i++)
  {
    let mom=dice();
    ritorna.sum+=mom;
    ritorna.values.push(mom);
  }
  return(ritorna);
}
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

//faccio la differenza tra il get time delle due date e divido per il numero di millisecondi in un giorno
const howManyDays=function(date1)
{
  let date2=new Date(2022,11,11);
  return(date2.getTime()-date1.getTime())/(1000 * 3600 * 24);
}
console.log(howManyDays(new Date(2020,02,20)));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

//creo la data di oggi, controllo se mese e giorno corrispondono con quelli del mio compleanno
const isTodayMyBirthday=function()
{
  let dataOggi=new Date();
  
  if(dataOggi.getDate()==29 && dataOggi.getMonth()==03)
  {
    return true;
  }
  else{
    return false;
  }
}
console.log(isTodayMyBirthday());

// Arrays & Oggetti
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

//uso il delete per rimuovere la proprietà
const deleteProp=function(obj,str)
{
  delete obj[str];
  return obj;
}
let oggetto1={
  ciao:'15',
  ok:'bene'
};
console.log(deleteProp(oggetto1,'ok'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

//creo una funzione che mi paragona tutti gli anni dei film salvando valore e indice del maggiore, per poi ritornarlo
const newestMovie=function(array)
{
  var mom=0;
  var index=0;
  for(let i=0;i<array.length;i++)
  {
    if(array[i].Year > mom)
    {
      mom=array[i].Year;
      index=i;
    }
  }
  return array[index].Title;
}
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

//posso molto semplicemente ritornare la dimensione di movies
const countMovies=function(array)
{
  return array.length;
}
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

//creo un array vuoto, scorro tutto l'array movies e ogni volta uso il push per inserire il datto anno nel nuovo array
const onlyTheYears=function(array)
{
  let arr=[];
  for(let i=0;i<array.length;i++)
  {
    arr.push(array[i].Year);
  }
  return arr;
}
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

//stesso procedimento ma nel nuovo array con push metto solo titoli dei film creati prima dfel 2000
const onlyInLastMillennium=function(array)
{
  let arr=[];
  for(let i=0;i<array.length;i++)
  {
    if(array[i].Year<2000)
    {
      arr.push(array[i].Title);
    }
  }
  return arr;
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

//scorro tutto l'array e in un ciclo for sommo in una variabile la trasposizione da stringa a numero degli anni, usando parseInt
const sumAllTheYears=function(array)
{
  let som=0;
  for(let i=0;i<array.length;i++)
  {
    som+=parseInt(array[i].Year);
  }
  return som;
}
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

//creo un array vuoto, controllo in tutti i titoli di movies se è presente la stringa data usando 'includes', se la stringa è presente allora
//includes mi ritorna true, questo attiva l'if e mi mette il titolo del film nel nuovo array con un push
const searchByTitle=function(array,str)
{
  let arr=[];
  for(let i=0;i<array.length;i++)
  {
    if(array[i].Title.includes(str))
    {
      arr.push(array[i].Title);
    }
  }
  return arr;
}
console.log(searchByTitle(movies,'Avengers'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

//stesso esercizio di prima ma semplicemente invece di usare un array vuoto per ritornare uso un oggetto con dentro due array vuoti, quindi
//inserisco anche la condizione per l'else nel caso in cui la stringa non sia contenuta nel titolo
const searchAndDivide=function(array,str)
{
  let obj={
    match:[],
    unmatch:[]
  };

  for(let i=0;i<array.length;i++)
  {
    if(array[i].Title.includes(str))
    {
      obj.match.push(array[i].Title);
    }
    else{
      obj.unmatch.push(array[i].Title);
    }
  }
  return obj;
}
console.log(searchAndDivide(movies,'Avengers'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

//uso lo splice sull'array alla posizione indicata dall'indice
const removeIndex=function(array,index)
{
  array.splice(index,1);
  return array;
}
console.log(removeIndex(movies,2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

//creo la funzione, assegno a una variabile il query selector dell'id container
const container=function()
{
  let cont=document.querySelector('#container');
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

//uso il querySelectorAll per considerare tutti gli elementi con tag td all'interno del dom
const tagId=function()
{
  let id=document.querySelectorAll('td');
  for(let i=0;i<id.length;i++)
  {
//il ciclo va sempre usato dopo il querySelectorAll per interagire con tutti gli elementi selezionati
  }
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

//lol, senza neanche farlo apposta il commento messo all'esercizio sopra è letteralmente questo esercizio, ecco qua il nostro ciclo
const tagIdPrint=function()
{
  let id=document.querySelectorAll('td');
  for(let i=0;i<id.length;i++)
  {
    console.log(id[i].textContent);
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

//seleziono tutti i tag a del dom e poi modifico con un ciclo lo style.background color in red
const linkRed=function()
{
  let links=document.querySelectorAll('a');
  for(let i=0;i<links.length;i++)
  {
    links[i].style.backgroundColor='red';
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

//creo il nuovo elemento li, identifico la lista con id myList e le aggiungo l'elemento con appendChild
const newElement=function()
{
  let lista=document.querySelector('#myList');
  let li=document.createElement('li');
  lista.appendChild(li);
}
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

//seleziono la mia lista e procedo ad eliminare tutti i figli finchè non sarà vuota
const removeAllElements=function()
{
  let lista=document.querySelector('#myList');
  while(ul.firstChild){
    ul.removeChild(ul.firstChild);
  }
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

//seleziono tutti i tr con query selector all e aggiungo la classe test con class list add
const addText=function()
{
  let allTr=document.querySelectorAll('tr');
  for(let i=0;i<allTr.length;i++)
  {
    allTr[i].classList.add('test');
  }
}
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/

//non sono sicuro di dove fosse rischiesto stampare l'albero, mi è venuto da fare nella console, spero vada bene
const halfTree=function(n)
{
  //sempicemente credo un array vuoto
  var asterischi=[];
  //faccio un ciclo di durata n
  for(let i=0;i<n;i++)
  {
  //dentro al ciclo ad ogni interazione aggiungo un asterisco in fondo al mio array
    asterischi.push('*');
  //poi per bellezza unisco l'array in una stringa, così visivamente nella console si allinea meglio
    console.log(asterischi.join(''));
  //infine aggiungo un 'a capo' ogni volta per andare alla riga dopo
    console.log('\n');
  }
}
console.log(halfTree(3));
//potrei fare questa stessa cosa ma nel text content di un elemento del dom, però non viene richiesto di toccare il dom esplicitamente
//quindi ho per sicurezza fatto nel console.log

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

//semplicemente controllo se il numero è divisibile per altri numeri a parte sè stesso e 1
const isItPrime=function(n)
{
  for(let i=2;i<n;i++)
  {
    if(n%i==0)
    {
      return false;
    }
  }
  //se sono arrivato qua significa che non è stato possibile dividerlo senza resto per numeri diversi, quindi è primo e posso ritornare true
  return true;
}
console.log(isItPrime(6));
console.log(isItPrime(11));


