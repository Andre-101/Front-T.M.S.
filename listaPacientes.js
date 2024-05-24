const container = document.getElementById('container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');


const URL_BASE = 'http://localhost:8080';

//EVENTOS
searchButton.addEventListener('click', search);


//FUNCIONES
async function search(){
    let name = searchInput.value;
    let response = await fetch(`${URL_BASE}/patient/searchByName/${name}`);
    if(response.status === 200){

    }
    else if(response.status === 400){
        
    }
    let patient = await response.json();
    console.log(patient);
}


async function getPatiens() {
    try {
        let response = await fetch(`${URL_BASE}/patient/list`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let patients = await response.json();

        let container = document.getElementById('patientList');

        patients.forEach(patient => {
            let patientContainer = document.createElement('div');
            patientContainer.classList.add('patient-item');
            let patientTitle = document.createElement('h3');
            let patientSubtitle = document.createElement('small');
            let patientSubtitleTwo = document.createElement('small');
            let patientAction = document.createElement('button');

            patientTitle.innerHTML = patient.name; // Mostramos el username
            patientSubtitle.innerHTML = patient.age;
            patientSubtitleTwo.innerHTML = patient.gender;
            patientAction.innerHTML = 'Eliminar';

            patientAction.addEventListener('click', function(){
                deletePatientByName(patient.name);
            });

            patientContainer.appendChild(patientTitle);
            patientContainer.appendChild(patientSubtitle);
            patientContainer.appendChild(patientSubtitleTwo);
            patientContainer.appendChild(patientAction);

            container.appendChild(patientContainer);
        });
    } catch (error) {
        console.error('Error fetching doctors:', error);
    }
}

async function deletePatientByName(name) {
    try {
        let response = await fetch(`${URL_BASE}/patient/delete/${name}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        document.getElementById('patientList').innerHTML = ''; // Limpiar la lista
        await getPatiens(); // Recargar la lista después de eliminar
    } catch (error) {
        console.error('Error deleting doctor:', error);
    }
}

document.addEventListener('DOMContentLoaded', getPatiens);
