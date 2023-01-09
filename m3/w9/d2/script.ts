class SonAccount{
    balanceInit:number=0;
    constructor(){
   
    }
    oneDeposit(somma:number){
        this.balanceInit+=somma;
    }
    oneWithDraw(somma:number){
        this.balanceInit-=somma;
    }
    print(){
        console.log("il bilancio del conto figlio è "+this.balanceInit);
    }
}
class MotherAccount{
    balanceInit:number=0;
    constructor(){
   
    }
    twoDeposit(somma:number){
        this.balanceInit+=somma;
    }
    twoWithDraw(somma:number){
        this.balanceInit-=somma;
    }
    addInterest(){
        console.log("il bilancio del conto madre è "+(this.balanceInit+(this.balanceInit*10)/100))
    }
}
//messo export per rimuovere la notifica che mi dà errore sul nome delle classi, bho ho cercato su internet e dicevano di fare così
export{};
var figlio = new SonAccount();
var madre = new MotherAccount();
figlio.oneDeposit(35);
figlio.oneWithDraw(5);
madre.twoDeposit(56);
madre.twoWithDraw(5);
figlio.print();
madre.addInterest();