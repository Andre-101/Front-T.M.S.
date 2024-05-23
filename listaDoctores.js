
const container = document.getElementById('container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


const URL_BASE = 'http://localhost:8080';

//EVENTOS
searchButton.addEventListener('click', search);


//FUNCIONES
async function search(){
    let email = searchInput.value;
    let response = await fetch(`${URL_BASE}/doctor/searchByEmail/${email}`);
    if(response.status === 200){

    }
    else if(response.status === 400){
        
    }
    let doctor = await response.json();
    console.log(doctor);
}


async function getDoctors() {
    try {
        let response = await fetch(`${URL_BASE}/doctor/list`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let doctors = await response.json();

        let container = document.getElementById('doctorList');

        doctors.forEach(doctor => {
            let doctorContainer = document.createElement('div');
            doctorContainer.classList.add('doctor-item');
            let doctorTitle = document.createElement('h3');
            let doctorSubtitle = document.createElement('small');
            let doctorAction = document.createElement('button');

            doctorTitle.innerHTML = doctor.username; // Mostramos el username
            doctorSubtitle.innerHTML = doctor.email;
            doctorAction.innerHTML = 'Eliminar';

            doctorAction.addEventListener('click', function(){
                deleteDoctorById(doctor.id);
            });

            doctorContainer.appendChild(doctorTitle);
            doctorContainer.appendChild(doctorSubtitle);
            doctorContainer.appendChild(doctorAction);

            container.appendChild(doctorContainer);
        });
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
}

async function deleteDoctorById(id) {
    try {
        let response = await fetch(`${URL_BASE}/doctor/delete/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        document.getElementById('doctorList').innerHTML = ''; // Limpiar la lista
        await getDoctors(); // Recargar la lista después de eliminar
    } catch (error) {
        console.error('Error deleting doctor:', error);
    }
}

document.addEventListener('DOMContentLoaded', getDoctors);
