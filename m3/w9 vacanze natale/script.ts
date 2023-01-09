let base: HTMLInputElement = document.querySelector('#base');
let altezza: HTMLInputElement = document.querySelector('#altezza');
let raggio: HTMLInputElement = document.querySelector('#raggio');
let apotema: HTMLInputElement = document.querySelector('#apotema');
let stampa: HTMLInputElement = document.querySelector('#print');
let bottone: HTMLButtonElement = document.querySelector('#button');
let input: HTMLInputElement = document.querySelector('#input');
let cerchio: HTMLDivElement = document.querySelector('#cerchio');
let cerchio_2d: HTMLDivElement = document.querySelector('#cerchio-figura-2d')
let triangolo: HTMLDivElement = document.querySelector('#triangolo');
let triangolo_2d: HTMLDivElement = document.querySelector('#triangolo-figura-2d')
let quadrato: HTMLDivElement = document.querySelector('#quadrato');
let quadrato_2d: HTMLDivElement = document.querySelector('#quadrato-figura-2d');
let quadrato_3d: HTMLDivElement = document.querySelector('#quadrato-figura-3d');
let rettangolo: HTMLDivElement = document.querySelector('#rettangolo');
let rettangolo_2d: HTMLDivElement = document.querySelector('#rettangolo-figura-2d')
let pentagono: HTMLDivElement = document.querySelector('#pentagono');
let pentagono_2d: HTMLDivElement = document.querySelector('#pentagono-figura-2d');
let esagono: HTMLDivElement = document.querySelector('#esagono');
let esagono_2d: HTMLDivElement = document.querySelector('#esagono-figura-2d');

enum Figure {
    Cerchio = 1,
    Triangolo = 2,
    Quadrato = 3,
    Rettangolo = 4,
    Pentagono = 5,
    Esagono = 6
}

class Dati {
    base: any = 0;
    altezza: any = 0;
    raggio: any = 0;
    apotema: any = 0;
    constructor(a: any, b: any, c: any, d: any) {
        this.base = a;
        this.altezza = b;
        this.raggio = c;
        this.apotema = d;
    }
}

function Mostra(option: HTMLInputElement) {
    stampa.innerHTML = '';
    cerchio.style.display = 'none';
    cerchio_2d.style.display = 'none';
    triangolo.style.display = 'none';
    triangolo_2d.style.display = 'none';
    quadrato.style.display = 'none';
    quadrato_2d.style.display = 'none'
    quadrato_3d.style.display = 'none'
    rettangolo.style.display = 'none';
    rettangolo_2d.style.display = 'none'
    pentagono.style.display = 'none';
    pentagono_2d.style.display = 'none'
    esagono.style.display = 'none'
    esagono_2d.style.display = 'none'
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
let figura: Figure;

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
        rettangolo_2d.style.display = 'block'
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
        stampa.innerHTML = `L'area della tua figura è: ${CalcoloArea(dati, figura)}`
    }

}

function CalcoloArea(dati: Dati, figura: Figure): number {
    //caso del cerchio:
    if (figura == 1) {
        if (dati.raggio <= 0 || Number.isNaN(dati.raggio)) {
            alert('dati mancanti')
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return Math.pow(dati.raggio, 2) * Math.PI;
        }

    }
    //caso del triangolo
    if (figura == 2) {
        if (dati.base <= 0 || dati.altezza <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.altezza)) {
            alert('dati mancanti')
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * dati.altezza / 2;
        }

    }
    //caso quadrato
    if (figura == 3) {
        if (dati.base <= 0 || Number.isNaN(dati.base)) {
            alert('dati mancanti')
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return Math.pow(dati.base, 2);
        }

    }
    //caso rettangolo
    if (figura == 4) {
        if (dati.base <= 0 || dati.altezza <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.altezza)) {
            alert('dati mancanti')
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * dati.altezza;
        }

    }
    //caso pentagono
    if (figura == 5) {
        if (dati.base <= 0 || dati.apotema <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.apotema)) {
            alert('dati mancanti')
        }
        else {
            base.value = '';
            altezza.value = '';
            raggio.value = '';
            apotema.value = '';
            return dati.base * 5 * dati.apotema / 2;
        }
    }
    //caso esagono
    if (figura == 6) {
        if (dati.base <= 0 || dati.apotema <= 0 || Number.isNaN(dati.base) || Number.isNaN(dati.apotema)) {
            alert('dati mancanti')
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