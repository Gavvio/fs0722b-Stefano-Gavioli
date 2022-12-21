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
    return Persona;
}());
var Bagnino = /** @class */ (function (_super) {
    __extends(Bagnino, _super);
    function Bagnino(b) {
        var _this = _super.call(this, 1001, b) || this;
        _this.totaleTasse = 0;
        return _this;
    }
    Bagnino.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            this.totaleTasse = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.totaleTasse = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.totaleTasse = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.totaleTasse = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.totaleTasse = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
    };
    Bagnino.prototype.getTasseInps = function () {
        return this.totaleTasse * 40 / 100;
    };
    Bagnino.prototype.getTasseIrpef = function () {
        return this.totaleTasse * 60 / 100;
    };
    Bagnino.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.totaleTasse;
    };
    return Bagnino;
}(Persona));
var Cassiere = /** @class */ (function (_super) {
    __extends(Cassiere, _super);
    function Cassiere(b) {
        var _this = _super.call(this, 1002, b) || this;
        _this.totaleTasse = 0;
        return _this;
    }
    Cassiere.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            this.totaleTasse = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.totaleTasse = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.totaleTasse = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.totaleTasse = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.totaleTasse = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
    };
    Cassiere.prototype.getTasseInps = function () {
        return this.totaleTasse * 40 / 100;
    };
    Cassiere.prototype.getTasseIrpef = function () {
        return this.totaleTasse * 60 / 100;
    };
    Cassiere.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.totaleTasse;
    };
    return Cassiere;
}(Persona));
var Direttore = /** @class */ (function (_super) {
    __extends(Direttore, _super);
    function Direttore(b) {
        var _this = _super.call(this, 1003, b) || this;
        _this.totaleTasse = 0;
        return _this;
    }
    Direttore.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            this.totaleTasse = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.totaleTasse = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.totaleTasse = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.totaleTasse = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.totaleTasse = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
    };
    Direttore.prototype.getTasseInps = function () {
        return this.totaleTasse * 40 / 100;
    };
    Direttore.prototype.getTasseIrpef = function () {
        return this.totaleTasse * 60 / 100;
    };
    Direttore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.totaleTasse;
    };
    return Direttore;
}(Persona));
var Calciatore = /** @class */ (function (_super) {
    __extends(Calciatore, _super);
    function Calciatore(b) {
        var _this = _super.call(this, 1004, b) || this;
        _this.totaleTasse = 0;
        return _this;
    }
    Calciatore.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            this.totaleTasse = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.totaleTasse = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.totaleTasse = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.totaleTasse = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.totaleTasse = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
    };
    Calciatore.prototype.getTasseInps = function () {
        return this.totaleTasse * 40 / 100;
    };
    Calciatore.prototype.getTasseIrpef = function () {
        return this.totaleTasse * 60 / 100;
    };
    Calciatore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.totaleTasse;
    };
    return Calciatore;
}(Persona));
var Riccone = /** @class */ (function (_super) {
    __extends(Riccone, _super);
    function Riccone(b) {
        var _this = _super.call(this, 1005, b) || this;
        _this.totaleTasse = 0;
        return _this;
    }
    Riccone.prototype.getUtileTasse = function () {
        if (this.codredd == 1001) {
            this.totaleTasse = (this.redditoAnnuoLordo * 5) / 100;
        }
        else if (this.codredd == 1002) {
            this.totaleTasse = (this.redditoAnnuoLordo * 10) / 100;
        }
        else if (this.codredd == 1003) {
            this.totaleTasse = (this.redditoAnnuoLordo * 15) / 100;
        }
        else if (this.codredd == 1004) {
            this.totaleTasse = (this.redditoAnnuoLordo * 20) / 100;
        }
        else if (this.codredd == 1005) {
            this.totaleTasse = (this.redditoAnnuoLordo * 25) / 100;
        }
        else {
            console.log("there's been an error");
        }
    };
    Riccone.prototype.getTasseInps = function () {
        return this.totaleTasse * 40 / 100;
    };
    Riccone.prototype.getTasseIrpef = function () {
        return this.totaleTasse * 60 / 100;
    };
    Riccone.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.totaleTasse;
    };
    return Riccone;
}(Persona));
var bagnino = new Bagnino(13000);
console.log(bagnino.getUtileTasse(), bagnino.totaleTasse, bagnino.getTasseInps(), bagnino.getTasseIrpef(), bagnino.getRedditoAnnuoNetto());
var cassiere = new Cassiere(20000);
console.log(cassiere.getUtileTasse(), cassiere.totaleTasse, cassiere.getTasseInps(), cassiere.getTasseIrpef(), cassiere.getRedditoAnnuoNetto());
var direttore = new Direttore(50000);
console.log(direttore.getUtileTasse(), direttore.totaleTasse, direttore.getTasseInps(), direttore.getTasseIrpef(), direttore.getRedditoAnnuoNetto());
var calciatore = new Calciatore(60000);
console.log(calciatore.getUtileTasse(), calciatore.totaleTasse, calciatore.getTasseInps(), calciatore.getTasseIrpef(), calciatore.getRedditoAnnuoNetto());
var riccone = new Riccone(100000);
console.log(riccone.getUtileTasse(), riccone.totaleTasse, riccone.getTasseInps(), riccone.getTasseIrpef(), riccone.getRedditoAnnuoNetto());
