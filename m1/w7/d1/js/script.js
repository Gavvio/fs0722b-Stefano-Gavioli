/* nell'oggetto raccolgo i date relativi al nome completo e a anno,mese,giorno correnti e di nascita */
function Persona() {
    this.nome = '';
    this.eta = '';
    this.anno_nascita = '';
    this.anno_attuale = '';
    this.mese_nascita = '';
    this.mese_attuale = '';
    this.giorno_nascita = '';
    this.giorno_attuale = '';
    /* procedo a calcolare la differenza in anni e poi controllare mese e giorno per eventualmente togliere un anno dal risultato nel caso in cui non siano ancora stati compiuti */
    this.calcolaEta = function () {

        this.eta = this.anno_attuale - this.anno_nascita;
        if (this.mese_attuale < this.mese_nascita) {
            this.eta--;
        }
        else if (this.mese_attuale == this.mese_nascita && this.giorno_attuale < this.giorno_nascita) {
            this.eta--
        }
    };
}

/*variabili*/
var nome = document.querySelector('#name');
var cognome = document.querySelector('#surname');
var data = document.querySelector('#date');
var bottone = document.querySelector('#button');
var persona = new Persona();
var tabella = document.querySelector('#tabella');
var current_data = new Date();
var testo = document.querySelector('p');

/* bottone */
bottone.addEventListener('click', () => {
    if (nome.value && cognome.value && data.value) {
        /*parte nome e cognome */
        persona.nome = nome.value + ' ' + cognome.value;
        /* parte età */
        persona.anno_nascita = data.value.substring(0, 4);
        persona.anno_attuale = current_data.getFullYear();
        persona.mese_nascita = data.value.substring(5, 7);
        persona.mese_attuale = current_data.getMonth();
        persona.giorno_nascita = data.value.substring(8, 10);
        persona.giorno_attuale = current_data.getDate();
        persona.calcolaEta();
        tabella.innerHTML += '<tr> <td>' + persona.nome + '</td> <td>' + persona.eta + '</td></tr>'
        nome.value = '';
        cognome.value = '';
        data.value = '';
        testo.innerHTML = '';
    }
    else {
        testo.innerHTML = '<h3>INSERISCI TUTTI I DATI!</h3>'
    }
});

