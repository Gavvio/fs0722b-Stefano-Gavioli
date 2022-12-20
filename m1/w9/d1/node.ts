var a: number = Math.floor(Math.random() * (100 - 1) + 1);
var b: number = Math.floor(Math.random() * (100 - 1) + 1);
function giocoRandom(a:number, b:number):void{
    console.log("il giocatore 1 ha detto "+a);
    console.log("il giocatore 2 ha detto "+b);
    var numeroCasuale: number = Math.floor(Math.random() * (100 - 1) + 1);
    console.log("il numero casuale è "+numeroCasuale)
    if (a == numeroCasuale) {
        console.log("il giocatore 1 ha azzeccato");
    }
    else if (b == numeroCasuale) {
        console.log("il giocatore 2 ha azzeccato");
    }
    else {
        if (Math.abs(a - numeroCasuale) > Math.abs(b - numeroCasuale)) {
            console.log("nessuno ha azzeccato ma il giocatore 2 è andato più vicino");
        }
        else {
            console.log("nessuno ha azzeccato ma il giocatore 1 è andato più vicino");
        }
    }
}
giocoRandom(a,b);