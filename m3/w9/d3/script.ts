abstract class Persona {
    codredd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(codice: number, soldi: number) {
        this.codredd = codice;
        this.redditoAnnuoLordo = soldi;
        this.tasseInps = 0;
        this.tasseIrpef = 0;
    }
    getTasseInps(tasse: number) {
        return tasse * 40 / 100;
    }
    getTasseIrpef(tasse: number) {
        return tasse * 60 / 100;
    }
    getRedditoAnnuoNetto(tasse: number) {
        return this.redditoAnnuoLordo - tasse;
    }
    abstract getUtileTasse(): number;
}


class Bagnino extends Persona {
    constructor(b: number) {
        super(1001, b)
    }
    getUtileTasse(): number {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100
        } else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100
        } else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100
        } else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100
        } else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100
        } else {
            console.log("there's been an error")
            return 0;
        }
    }

}

class Cassiere extends Persona {
    constructor(b: number) {
        super(1002, b)
    }
    getUtileTasse(): number {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100
        } else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100
        } else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100
        } else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100
        } else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100
        } else {
            console.log("there's been an error")
            return 0;
        }
    }
}

class Direttore extends Persona {
    constructor(b: number) {
        super(1003, b)
    }
    getUtileTasse(): number {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100
        } else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100
        } else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100
        } else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100
        } else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100
        } else {
            console.log("there's been an error")
            return 0;
        }
    }
}

class Calciatore extends Persona {

    constructor(b: number) {
        super(1004, b)
    }
    getUtileTasse():number{
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100
        } else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100
        } else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100
        } else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100
        } else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100
        } else {
            console.log("there's been an error")
            return 0;
        }
    }
}

class Riccone extends Persona {
    constructor(b: number) {
        super(1005, b)
    }
    getUtileTasse():number{
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100
        } else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100
        } else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100
        } else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100
        } else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100
        } else {
            console.log("there's been an error")
            return 0;
        }
    }
}

let bagnino = new Bagnino(13000);
console.log(bagnino.getUtileTasse(), bagnino.getTasseInps(bagnino.getUtileTasse()), bagnino.getTasseIrpef(bagnino.getUtileTasse()), bagnino.getRedditoAnnuoNetto(bagnino.getUtileTasse()));
let cassiere = new Cassiere(20000);
console.log(cassiere.getUtileTasse(), cassiere.getTasseInps(cassiere.getUtileTasse()), cassiere.getTasseIrpef(cassiere.getUtileTasse()), cassiere.getRedditoAnnuoNetto(cassiere.getUtileTasse()));
let direttore = new Direttore(50000);
console.log(direttore.getUtileTasse(), direttore.getTasseInps(direttore.getUtileTasse()), direttore.getTasseIrpef(direttore.getUtileTasse()), direttore.getRedditoAnnuoNetto(direttore.getUtileTasse()));
let calciatore = new Calciatore(60000);
console.log(calciatore.getUtileTasse(), calciatore.getTasseInps(calciatore.getUtileTasse()), calciatore.getTasseIrpef(calciatore.getUtileTasse()), calciatore.getRedditoAnnuoNetto(calciatore.getUtileTasse()));
let riccone = new Riccone(100000);
console.log(riccone.getUtileTasse(), riccone.getTasseInps(riccone.getUtileTasse()), riccone.getTasseIrpef(riccone.getUtileTasse()), riccone.getRedditoAnnuoNetto(riccone.getUtileTasse()));