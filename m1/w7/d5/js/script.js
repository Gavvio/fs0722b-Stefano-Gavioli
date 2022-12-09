const div = document.querySelector('div');


fetch('json/users.json')
.then(function (response) {  
    return response.json();                     
}).then(function (json) {                        
    classe = json;
    console.log('Dati: ' + classe[0].username);
    
    for (let i = 0; i < 2; i++) {
        div.innerHTML += `<div class="card text-center ms-5 mt-5" style="width: 18rem;">
    <img src="${classe[i].profileURL}" class="card-img-top w-25 m-auto mt-3 bg-secondary rounded-circle" alt="immagine profilo">
    <div class="card-body">
      <h5 class="card-title">${classe[i].firstName} ${classe[i].lastName}</h5>
      <a href="#" class="card-link text-warning">${classe[i].email}</a>
    </div>
    </div>`
    }
}).catch(function (err) {         
    console.log('Fetch problem: ' + err.message);
});





