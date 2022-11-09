document.querySelector('#aggiungi')
.addEventListener('click', function(){

    let testo=document.querySelector('#text');

    let div=document.createElement('div');
    div.classList.add('todo');

    let span = document.createElement('span');
    span.textContent = testo.value;
    span.classList.add('span');

    let completato = document.createElement('button');
    completato.textContent = 'Completato';
    completato.classList.add('completato');

    completato.addEventListener('click', ()=> {
    div.classList.add('completatoAzione');
    });

    let elimina = document.createElement('button');
    elimina.textContent='Elimina';
    elimina.classList.add('elimina');

    elimina.addEventListener('click',function(){
        div.remove()
    });
    

    div.append(span, completato, elimina);
    document.querySelector('#lista').append(div);

    testo.value = '';   
});