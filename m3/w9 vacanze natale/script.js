let base = document.querySelector('#base');
let altezza = document.querySelector('#altezza');
let raggio = document.querySelector('#raggio');
let apotema = document.querySelector('#apotema');
let stampa = document.querySelector('#print');
let bottone = document.querySelector('#button');
let input = document.querySelector('#input');
let cerchio = document.querySelector('#cerchio');
let cerchio_2d = document.querySelector('#cerchio-figura-2d');
let triangolo = document.querySelector('#triangolo');
let triangolo_2d = document.querySelector('#triangolo-figura-2d');
let quadrato = document.querySelector('#quadrato');
let quadrato_2d = document.querySelector('#quadrato-figura-2d');
let quadrato_3d = document.querySelector('#quadrato-figura-3d');
let rettangolo = document.querySelector('#rettangolo');
let rettangolo_2d = document.querySelector('#rettangolo-figura-2d');
let pentagono = document.querySelector('#pentagono');
let pentagono_2d = document.querySelector('#pentagono-figura-2d');
let esagono = document.querySelector('#esagono');
let esagono_2d = document.querySelector('#esagono-figura-2d');
var Figure;
(function (Figure) {
    Figure[Figure["Cerchio"] = 1] = "Cerchio";
    Figure[Figure["Triangolo"] = 2] = "Triangolo";
    Figure[Figure["Quadrato"] = 3] = "Quadrato";
    Figure[Figure["Rettangolo"] = 4] = "Rettangolo";
    Figure[Figure["Pentagono"] = 5] = "Pentagono";
    Figure[Figure["Esagono"] = 6] = "Esagono";
})(Figure || (Figure = {}));
class Dati {
    constructor(a, b, c, d) {
        this.base = 0;
        this.altezza = 0;
        this.raggio = 0;
        this.apotema = 0;
        this.base = a;
        this.altezza = b;
        this.raggio = c;
        this.apotema = d;
    }
}
function Mostra(option) {
    stampa.innerHTML = '';
    cerchio.style.display = 'none';
    cerchio_2d.style.display = 'none';
    triangolo.style.display = 'none';
    triangolo_2d.style.display = 'none';
    quadrato.style.display = 'none';
    quadrato_2d.style.display = 'none';
    quadrato_3d.style.display = 'none';
    rettangolo.style.display = 'none';
    rettangolo_2d.style.display = 'none';
    pentagono.style.display = 'none';
    pentagono_2d.style.display = 'none';
    esagono.style.display = 'none';
    esagono_2d.style.display = 'none';
    if (option.value == '1') {
        base.style.display = 'none';
        altezza.style.display = 'none';
        raggio.style.display = 'block';
        apotema.style.display = 'none';
        bottone.style.display = 'block';
    }
    if (option.value == '2') {
        base.style.display = 'block';
        altezza.style.display = 'block';
        raggio.style.display = 'none';
        apotema.style.display = 'none';
        bottone.style.display = 'block';
    }
    if (option.value == '3') {
        base.style.display = 'block';
        altezza.style.display = 'none';
        raggio.style.display = 'none';
        apotema.style.display = 'none';
        bottone.style.display = 'block';
    }
    if (option.value == '4') {
        base.style.display = 'block';
        altezza.style.display = 'block';
        raggio.style.display = 'none';
        apotema.style.display = 'none';
        bottone.style.display = 'block';
    }
    if (option.value == '5') {
        base.style.display = 'block';
        altezza.style.display = 'none';
        raggio.style.display = 'none';
        apotema.style.display = 'block';
        bottone.style.display = 'block';
    }
    if (option.value == '6') {
        base.style.display = 'block';
        altezza.style.display = 'none';
        raggio.style.display = 'none';
        apotema.style.display = 'block';
        bottone.style.display = 'block';
    }
}
var dati;
let figura;
function Chiamata() {
    if (input.value == '1') {
        figura = Figure.Cerchio;
        dati = new Dati(0, 0, parseInt(raggio.value), 0);
        cerchio.style.display = 'flex';
        cerchio_2d.style.display = 'block';
    }
    if (input.value == '2') {
        figura = Figure.Triangolo;
        dati = new Dati(parseInt(base.value), parseInt(altezza.value), 0, 0);
        triangolo.style.display = 'flex';
        triangolo_2d.style.display = 'block';
    }
    if (input.value == '3') {
        figura = Figure.Quadrato;
        dati = new Dati(parseInt(base.value), 0, 0, 0);
        quadrato.style.display = 'flex';
        quadrato_2d.style.display = 'block';
        quadrato_3d.style.display = 'flex';
    }
    if (input.value == '4') {
        figura = Figure.Rettangolo;
        dati = new Dati(parseInt(base.value), parseInt(altezza.value), 0, 0);
        rettangolo.style.display = 'flex';
        rettangolo_2d.style.display = 'block';
    }
    if (input.value == '5') {
        figura = Figure.Pentagono;
        dati = new Dati(parseInt(base.value), 0, 0, parseInt(apotema.value));
        pentagono.style.display = 'flex';
        pentagono_2d.style.display = 'block';
    }
    if (input.value == '6') {
        figura = Figure.Esagono;
        dati = new Dati(parseInt(base.value), 0, 0, parseInt(apotema.value));
        esagono.style.display = 'flex';
        esagono_2d.style.display = 'block';
    }
    if (CalcoloArea(dati, figura) != 0) {
        stampa.innerHTML = `L'area della tua figura è: ${CalcoloArea(dati, figura)}`;
    }
}
function CalcoloArea(dati, figura) {
    if (figura == 1) {
        if (dati.raggio <= 0 || Number.isNaN(dati.raggio)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return Math.pow(dati.raggio, 2) * Math.PI;
        }
    }
    if (figura == 2) {
        if (dati.base <= 0 || dati.altezza <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.altezza)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * dati.altezza / 2;
        }
    }
    if (figura == 3) {
        if (dati.base <= 0 || Number.isNaN(dati.base)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return Math.pow(dati.base, 2);
        }
    }
    if (figura == 4) {
        if (dati.base <= 0 || dati.altezza <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.altezza)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * dati.altezza;
        }
    }
    if (figura == 5) {
        if (dati.base <= 0 || dati.apotema <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.apotema)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * 5 * dati.apotema / 2;
        }
    }
    if (figura == 6) {
        if (dati.base <= 0 || dati.apotema <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.apotema)) {
            alert('dati mancanti');
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * 6 * dati.apotema / 2;
        }
    }
    return 0;
}
