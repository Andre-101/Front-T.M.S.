const nameInput = document.getElementById('nameInput'); 
const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');

const signupButton = document.getElementById('signupButton');
const measureButton = document.getElementById('measureButton');

const logoutButton = document.querySelector('footer button');
const measurementsDiv = document.getElementById('measurements');

const URL_BASE = "http://127.0.0.1:8080";

// Eventos
signupButton.addEventListener('click', signup);
measureButton.addEventListener('click', measure);
logoutButton.addEventListener('click', logout);

// Funciones
function signup() {
    let name = nameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;

    let patient = {
        name: name,
        age: age,
        gender: gender
    };
    console.log(patient);
    postUser(patient);
}

function logout() {
    window.location.href = "http://127.0.0.1:5501/loginInicialApp.html";
}

async function postUser(patient) {
    let json = JSON.stringify(patient);
    console.log(json);

    let response = await fetch(URL_BASE + '/user/createPatient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });

    let body = await response.json();
    console.log(body);
    alert(body.description);
}

async function measure() {
    const response = await fetch(URL_BASE + '/startMeasurement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();
    console.log(data);
    displayMeasurements(data.readings);
}

function displayMeasurements(readings) {
    measurementsDiv.innerHTML = '<h3>Mediciones</h3>';
    readings.forEach(reading => {
        measurementsDiv.innerHTML += `<p>t: ${reading.t}, x: ${reading.x}</p>`;
    });
}
