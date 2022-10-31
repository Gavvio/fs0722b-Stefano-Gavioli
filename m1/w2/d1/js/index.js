alert('Usa il pop up per dare dei messaggi');
window.alert('Sto studiando JS');

var anni=prompt('Inserisci la tua età');
console.log(anni);

if(anni>=18){
    document.write('Sei maggiorenne, non ci sono problemi ');
}
else{
    document.write('Ecco contenuti più adatti a te');
    location.href = 'https://it.bandainamcoent.eu/dragon-ball/dragon-ball-the-breakers';
}