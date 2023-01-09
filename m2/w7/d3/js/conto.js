function avanti(){
    setInterval(() => {
        sessionStorage.forward = Number(sessionStorage.forward) + 1
        body.innerHTML = `<h1 class=text-center>${sessionStorage.forward} seconds passed on this Session</h1>`
    }, 1000);
}
let body = document.querySelector('body')

    if (typeof(Storage) != undefined) {

        if (sessionStorage.forward){
           avanti();
        } else{
            sessionStorage.forward = 0
            avanti();
        }

} else {
    body.innerHTML = 'Il tuo browser non supporta Web Storage...'
}

       