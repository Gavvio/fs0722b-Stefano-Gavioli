abstract class Persona{
    codredd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;
    constructor(codice:number,soldi:number){
        this.codredd=codice;
        this.redditoAnnuoLordo=soldi;
        this.tasseInps=0;
        this.tasseIrpef=0;
    }
}


class Bagnino extends Persona{
    totaleTasse:number;
    constructor(b:number){
        super(1001,b)
       this.totaleTasse=0;
    }
    getUtileTasse(){
        if(this.codredd == 1001){
            this.totaleTasse=(this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.totaleTasse=(this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.totaleTasse=(this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.totaleTasse=(this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.totaleTasse=(this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
    }
    getTasseInps(){
        return this.totaleTasse*40/100;
    }
    getTasseIrpef(){
        return this.totaleTasse*60/100;
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo-this.totaleTasse;
    }
}

class Cassiere extends Persona{
    totaleTasse:number;
    constructor(b:number){
        super(1002,b)
       this.totaleTasse=0;
    }
    getUtileTasse(){
        if(this.codredd == 1001){
            this.totaleTasse=(this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.totaleTasse=(this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.totaleTasse=(this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.totaleTasse=(this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.totaleTasse=(this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
    }
    getTasseInps(){
        return this.totaleTasse*40/100;
    }
    getTasseIrpef(){
        return this.totaleTasse*60/100;
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo-this.totaleTasse;
    }
}

class Direttore extends Persona{
    totaleTasse:number;
    constructor(b:number){
        super(1003,b)
       this.totaleTasse=0;
    }
    getUtileTasse(){
        if(this.codredd == 1001){
            this.totaleTasse=(this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.totaleTasse=(this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.totaleTasse=(this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.totaleTasse=(this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.totaleTasse=(this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
    }
    getTasseInps(){
        return this.totaleTasse*40/100;
    }
    getTasseIrpef(){
        return this.totaleTasse*60/100;
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo-this.totaleTasse;
    }
}

class Calciatore extends Persona{
    totaleTasse:number;
    constructor(b:number){
        super(1004,b)
       this.totaleTasse=0;
    }
    getUtileTasse(){
        if(this.codredd == 1001){
            this.totaleTasse=(this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.totaleTasse=(this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.totaleTasse=(this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.totaleTasse=(this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.totaleTasse=(this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
    }
    getTasseInps(){
        return this.totaleTasse*40/100;
    }
    getTasseIrpef(){
        return this.totaleTasse*60/100;
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo-this.totaleTasse;
    }
}

class Riccone extends Persona{
    totaleTasse:number;
    constructor(b:number){
        super(1005,b)
       this.totaleTasse=0;
    }
    getUtileTasse(){
        if(this.codredd == 1001){
            this.totaleTasse=(this.redditoAnnuoLordo * 5) / 100
        }else if(this.codredd == 1002){
            this.totaleTasse=(this.redditoAnnuoLordo * 10) / 100
        }else if(this.codredd == 1003){
            this.totaleTasse=(this.redditoAnnuoLordo * 15) / 100
        }else if(this.codredd == 1004){
            this.totaleTasse=(this.redditoAnnuoLordo * 20) / 100
        }else if(this.codredd == 1005){
            this.totaleTasse=(this.redditoAnnuoLordo * 25) / 100
        }else {
            console.log("there's been an error")
        }
    }
    getTasseInps(){
        return this.totaleTasse*40/100;
    }
    getTasseIrpef(){
        return this.totaleTasse*60/100;
    }
    getRedditoAnnuoNetto(){
        return this.redditoAnnuoLordo-this.totaleTasse;
    }
}

let bagnino = new Bagnino(13000);
console.log(bagnino.getUtileTasse(),bagnino.totaleTasse,bagnino.getTasseInps(),bagnino.getTasseIrpef(),bagnino.getRedditoAnnuoNetto());
let cassiere = new Cassiere(20000);
console.log(cassiere.getUtileTasse(),cassiere.totaleTasse,cassiere.getTasseInps(),cassiere.getTasseIrpef(),cassiere.getRedditoAnnuoNetto());
let direttore = new Direttore(50000);
console.log(direttore.getUtileTasse(),direttore.totaleTasse,direttore.getTasseInps(),direttore.getTasseIrpef(),direttore.getRedditoAnnuoNetto());
let calciatore= new Calciatore(60000);
console.log(calciatore.getUtileTasse(),calciatore.totaleTasse,calciatore.getTasseInps(),calciatore.getTasseIrpef(),calciatore.getRedditoAnnuoNetto());
let riccone = new Riccone(100000);
console.log(riccone.getUtileTasse(),riccone.totaleTasse,riccone.getTasseInps(),riccone.getTasseIrpef(),riccone.getRedditoAnnuoNetto());