const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const container = document.getElementById('container');


const URL_BASE = "http://127.0.0.1:8080";

//EVENTOS
searchButton.addEventListener('click', search);


//FUNCIONES
async function getUsers(){
    let response = await fetch(URL_BASE+"/user/list"); //HTTP Request
    let users = await response.json();

    users.forEach(user => {
        let userContainer = document.createElement('div')
        let userTittle = document.createElement('h3')
        let userSubtittle = document.createElement('small')
        let userAction = document.createElement('button');

        userContainer.appendChild(userTittle);
        userContainer.appendChild(userSubtittle);
        userContainer.appendChild(userAction);

        userTittle.innerHTML = user.name;
        userSubtittle.innerHTML = user.email;
        userAction.innerHTML = 'Eliminar';

        userAction.addEventListener('click', function(){
            //alert("user to delete a " + user.id);

            deleteUserById(user.id);
        });

        container.appendChild(userContainer);
    });

}

async function deleteUserById(id){
    let response = await fetch(URL_BASE+'/user/delete/'+id, {
        method: 'DELETE'
    });
    let message = await response.json();
    console.log(message);
    location.href = "index.html"
}