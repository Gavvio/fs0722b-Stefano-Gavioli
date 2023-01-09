var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(codice, soldi) {
        this.codredd = codice;
        this.redditoAnnuoLordo = soldi;
        this.tasseInps = 0;
        this.tasseIrpef = 0;
    }
    Persona.prototype.getTasseInps = function (tasse) {
        return tasse * 40 / 100;
    };
    Persona.prototype.getTasseIrpef = function (tasse) {
        return tasse * 60 / 100;
    };
    Persona.prototype.getRedditoAnnuoNetto = function (tasse) {
        return this.redditoAnnuoLordo - tasse;
    };
    return Persona;
}());
var Bagnino = /** @class */ (function (_super) {
    __extends(Bagnino, _super);
    function Bagnino(b) {
        return _super.call(this, 1001, b) || this;
    }
    Bagnino.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
            return 0;
        }
    };
    return Bagnino;
}(Persona));
var Cassiere = /** @class */ (function (_super) {
    __extends(Cassiere, _super);
    function Cassiere(b) {
        return _super.call(this, 1002, b) || this;
    }
    Cassiere.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
            return 0;
        }
    };
    return Cassiere;
}(Persona));
var Direttore = /** @class */ (function (_super) {
    __extends(Direttore, _super);
    function Direttore(b) {
        return _super.call(this, 1003, b) || this;
    }
    Direttore.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
            return 0;
        }
    };
    return Direttore;
}(Persona));
var Calciatore = /** @class */ (function (_super) {
    __extends(Calciatore, _super);
    function Calciatore(b) {
        return _super.call(this, 1004, b) || this;
    }
    Calciatore.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
            return 0;
        }
    };
    return Calciatore;
}(Persona));
var Riccone = /** @class */ (function (_super) {
    __extends(Riccone, _super);
    function Riccone(b) {
        return _super.call(this, 1005, b) || this;
    }
    Riccone.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            return (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            return (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            return (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            return (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            return (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
            return 0;
        }
    };
    return Riccone;
}(Persona));
var bagnino = new Bagnino(13000);
console.log(bagnino.getUtileTasse(), bagnino.getTasseInps(bagnino.getUtileTasse()), bagnino.getTasseIrpef(bagnino.getUtileTasse()), bagnino.getRedditoAnnuoNetto(bagnino.getUtileTasse()));
var cassiere = new Cassiere(20000);
console.log(cassiere.getUtileTasse(), cassiere.getTasseInps(cassiere.getUtileTasse()), cassiere.getTasseIrpef(cassiere.getUtileTasse()), cassiere.getRedditoAnnuoNetto(cassiere.getUtileTasse()));
var direttore = new Direttore(50000);
console.log(direttore.getUtileTasse(), direttore.getTasseInps(direttore.getUtileTasse()), direttore.getTasseIrpef(direttore.getUtileTasse()), direttore.getRedditoAnnuoNetto(direttore.getUtileTasse()));
var calciatore = new Calciatore(60000);
console.log(calciatore.getUtileTasse(), calciatore.getTasseInps(calciatore.getUtileTasse()), calciatore.getTasseIrpef(calciatore.getUtileTasse()), calciatore.getRedditoAnnuoNetto(calciatore.getUtileTasse()));
var riccone = new Riccone(100000);
console.log(riccone.getUtileTasse(), riccone.getTasseInps(riccone.getUtileTasse()), riccone.getTasseIrpef(riccone.getUtileTasse()), riccone.getRedditoAnnuoNetto(riccone.getUtileTasse()));
