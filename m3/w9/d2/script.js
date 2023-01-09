"use strict";
exports.__esModule = true;
var SonAccount = /** @class */ (function () {
    function SonAccount() {
        this.balanceInit = 0;
    }
    SonAccount.prototype.oneDeposit = function (somma) {
        this.balanceInit += somma;
    };
    SonAccount.prototype.oneWithDraw = function (somma) {
        this.balanceInit -= somma;
    };
    SonAccount.prototype.print = function () {
        console.log("il bilancio del conto figlio è " + this.balanceInit);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount() {
        this.balanceInit = 0;
    }
    MotherAccount.prototype.twoDeposit = function (somma) {
        this.balanceInit += somma;
    };
    MotherAccount.prototype.twoWithDraw = function (somma) {
        this.balanceInit -= somma;
    };
    MotherAccount.prototype.addInterest = function () {
        console.log("il bilancio del conto madre è " + (this.balanceInit + (this.balanceInit * 10) / 100));
    };
    return MotherAccount;
}());
var figlio = new SonAccount();
var madre = new MotherAccount();
figlio.oneDeposit(35);
figlio.oneWithDraw(5);
madre.twoDeposit(56);
madre.twoWithDraw(5);
figlio.print();
madre.addInterest();
