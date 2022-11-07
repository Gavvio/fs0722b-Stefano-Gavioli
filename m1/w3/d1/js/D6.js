/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/*
function area(l1, l2)
{
    return l1*l2;
}
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/*
function crazySum(n1, n2)
{
    if(n1==n2){
        return (n1+n2)*3;
    }
    else return n1+n2;
}
*/

/*
const crazySum=function(n1,n2)
{
    if(n1===n2){
        return(n1+n2)*3;
    }
    else{
        return n1+n2;
    }

}
console.log(crazySum(3,3));
*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/*
function crazyDiff(p1)
{
    if(p1>19){
        return(p1-19)*3;
    }
    else return 19-p1;
}
*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/*
function boundary(n)
{
    if(n>=20 && n<=100 || n==400){
        return true;
    }
    else return false;
}
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*
function epify(str)
{
    var string_cont='EPICODE';
    for( var i=0;i<6;i++)
    {
        if(string_cont[i]!=str[i])
        {
            return string_cont.concat(str);
        }
    }
    return str;
}
*/

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*
function check3and7(np)
{
    if(np%3==0 || np%7==0)
    {
        return true;
    }
    else return false;
}
*/

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/*
function reverseString(str)
{
    str=str.split('');
    str=str.reverse();
    str=str.join('');
    return str;
}
*/
//oppure

/*
function reverseString(str)
{
    var strmom='';
    for(var i=str.length-1;i>=0;i--)
    {
        strmom+=str[i];
    }
    return strmom;
}
*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*
function upperFirst(str)
{
    var array=str.split(' ');
    for(var i=0;i<array.length;i++)
    {
       array[i]=array[i].charAt(0).toUpperCase()+array[i].slice(1);
    }
    str=array.join(' ');
    return str;
}
*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*
function cutString(str)
{
    return str.slice(1,str.length-1);
}
*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/*
function giveMeRandom(n)
{
    var str='';
    str=str.split('');
    for(var i=0;i<n;i++)
    {
        str[i]=Math.floor(Math.random()*11);
    }
    str=str.join('');
    return str;
}
*/
