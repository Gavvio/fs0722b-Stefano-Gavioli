fetch("assets/Abbigliamento.json")
    .then(function(response) {
    return response.json();
    })
    .then(function(myJson) {
        let autunno=document.querySelector('#autunno');
        let inverno=document.querySelector('#inverno');
        let primavera=document.querySelector('#primavera');
        let estate=document.querySelector('#estate');
        let coloreSfondo;
    for(let i=0;i<myJson.length;i++)
    {
       let vestito= new Vestito(myJson[i].id,myJson[i].codprod,myJson[i].collezione,myJson[i].capo,myJson[i].modello,myJson[i].quantita,myJson[i].colore,myJson[i].prezzoivaesclusa,myJson[i].prezzoivainclusa,myJson[i].disponibile,myJson[i].saldo)
       if(vestito.colore=='nero')
       {
        coloreSfondo='black';
       }
       else if(vestito.colore=='rosso'){
        coloreSfondo='#FF0800'
       }
       else if(vestito.colore=='beige'){
        coloreSfondo='#caaa81'
       }
       else if(vestito.colore=='verde'){
        coloreSfondo='#00FF40'
       }
       else if(vestito.colore=='blu'){
        coloreSfondo='#0047AB'
       }
       else if(vestito.colore=='rosa'){
        coloreSfondo='#F08080'
       }
       else if(vestito.colore=='arancione'){
        coloreSfondo='#FF4500'
       }
       else if(vestito.colore=='bordeaux'){
        coloreSfondo='#721225'
       }
       else if(vestito.colore=='grigio'){
        coloreSfondo='#808082'
       }
       else if(vestito.colore=='viola'){
        coloreSfondo='#720e9e'
       }
       else if(vestito.colore=='azzurro'){
        coloreSfondo='#00FFFF'
       }

       let scelta;
       if(vestito.collezione=="autunno")
       {
        scelta=autunno;
       }
       if(vestito.collezione=="inverno")
       {
        scelta=inverno;
       }
       if(vestito.collezione=="primavera")
       {
        scelta=primavera
       }
       if(vestito.collezione=="estate")
       {
        scelta=estate
       }
       scelta.innerHTML+=`
       <div class="col-3 my-3">
       <div class="card" style="background-color:${coloreSfondo}; border:none">
       <div class="card-body text-center text-white">
         <h5 class="card-title mb-2">${(vestito.capo).toUpperCase()}</h5>
         <p class="card-text lh-2">Collezione:${vestito.collezione}</p>
         <p class="card-text lh-2">Colore:${vestito.colore}</p>
         <p class="card-text lh-2">Prezzo iniziale:${vestito.prezzoIvaInclusa}€</p>
         <p class="card-text lh-2">sconto:${vestito.saldo}%</p>
         <p class="card-text lh-2">prezzo scontato:${vestito.getAcquistoCapo()}€</p>
         <button class="border rounded bg-white">acquista</button>
       </div>
       </div> 
       </div> 
       `
    }
    })

    class Vestito{
        id:number;
        codprod:number;
        collezione:string;
        capo:string;
        modello:number;
        quantita:number;
        colore:string;
        prezzoIvaEsclusa:number;
        prezzoIvaInclusa:number;
        disponibile:string;
        saldo:number;
        constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoIvaEsclusa:number,prezzoIvaInclusa:number,disponibile:string,saldo:number){
            this.id=id;
            this.codprod=codprod;
            this.collezione=collezione;
            this.capo=capo;
            this.modello=modello;
            this.quantita=quantita;
            this.colore=colore;
            this.prezzoIvaEsclusa=prezzoIvaEsclusa;
            this.prezzoIvaInclusa=prezzoIvaInclusa;
            this.disponibile=disponibile;
            this.saldo=saldo;
        }
        getSaldoCapo(){
            return this.prezzoIvaInclusa*this.saldo/100;
        }
        getAcquistoCapo(){
            return JSON.parse(parseFloat(JSON.stringify(this.prezzoIvaInclusa-this.getSaldoCapo())).toPrecision(3));
        }
    }
    