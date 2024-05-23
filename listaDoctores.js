const container = document.getElementById('container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');



const URL_BASE= "http://127.0.0.1:8080";

let alfa = 10;
let beta = "Velociraptors";
let gamma = false;

console.log(beta);

//EVENTOS
searchButton.addEventListener('click', search);

getUsers();

//FUNCIONES
async function deleteUserById(id){
    let response = await fetch(URL_BASE+'/doctor/delete/'+id, {
        method: 'DELETE'
    });
    let message = await response.json();
    console.log(message);
    location.href = "listaDoctores.html"
}

async function getUsers(){
    let response = await fetch(URL_BASE+"/doctor/list"); //HTTP Request
    let doctors = await response.json();

    doctors.forEach(doctor => {
        let doctorContainer = document.createElement('div');
        let doctorTittle = document.createElement('h3');
        let doctorSubtittle = document.createElement('small');
        let doctorAction = document.createElement('button');

        doctorContainer.appendChild(doctorTittle);
        doctorContainer.appendChild(doctorSubtittle);
        doctorContainer.appendChild(doctorAction);

        doctorTittle.innerHTML = doctor.name;
        doctorSubtittle.innerHTML = doctor.email;
        doctorAction.innerHTML = 'Eliminar';

        doctorAction.addEventListener('click', function(){
            //alert("user to delete a " + user.id);

            deleteUserById(doctor.id);
        });

        container.appendChild(doctorContainer);
    });
}




