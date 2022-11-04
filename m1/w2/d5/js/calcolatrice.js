/*
Ho deciso di usare "data-simbolo" per poter visualizzare sullo schermo della calcolatrice i due simboli "x" e "÷", così facendo l'utente vede
le operazioni con i simboli a cui è abituato mentre nella mia stringa separatamente salvata ci saranno i simboli corretti per le operazioni
su javascript ossia "*" e "/"
*/

var res='';
function display(elemento){
    //nella stringa che mostro all'utente uso l'attributo value che contiene in quei 2 casi "x" e "÷"
    document.getElementById('result').value += elemento.value;
    //nella stringa che mi tengo da parte uso l'attributo personalizzato che contiene in quei 2 casi "*" e "/"
    res += elemento.getAttribute('data-simbolo');
}

function risultato(){
    //questa parte controlla se sono stati usati operatori
    var cont=true;
    console.log(res);
    for(var i=0;i<res.length;i++)
    {
        if(res[i]=='+'){
            cont=false;
        }
        else if(res[i]=='-'){
            cont=false;
        }
        else if(res[i]=='/'){
            cont=false;
        }
        else if(res[i]=='*'){
            cont=false;
        }
    }
    if(cont)
    {
        document.getElementById('result').value='Inserisci un operatore';
        return;
        //piccola nota a margine, non abbiamo fatto il return durante le lezioni ma so essere un modo valido per interrompere la funzione (anche se in questo caso non ritorno niente)
    }
    //questa parte risolve il bug dell'operatore premuto 2 o più volte
    for(var i=0;i<res.length;i++)
    {
        if(res[i]=='+' && res[i+1]=='+')
        {
            res=res.replace('+',' ')
        }
        if(res[i]=='-' && res[i+1]=='-')
        {
            res=res.replace('-',' ')
        }
        if(res[i]=='/' && res[i+1]=='/')
        {
            res=res.replace('/',' ')
        }
        if(res[i]=='*' && res[i+1]=='*')
        {
            res=res.replace('*',' ')
        }
    }
    document.getElementById('result').value=eval(res);
}

function reset(){
    document.getElementById('result').value='';
    res='';
}