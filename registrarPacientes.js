const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const cedulaInput = document.getElementById('cedulaInput');
const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');

const signupButton = document.getElementById('signupButton');
const logoutButton = document.querySelector('button');

const URL_BASE = "http://127.0.0.1:8080"; // Cambiar URL 

// Eventos
signupButton.addEventListener('click', signup);
logoutButton.addEventListener('click', logout);

// Funciones
function signup(){
    let name = nameInput.value;
    let email = emailInput.value;
    let cedula = cedulaInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;

    let user = {
        name: name,
        email: email,
        cedula: cedula,
        age: age,
        gender: gender
    };
    console.log(user);
    postUser(user);
}

function logout(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5501/loginInicialApp.html";
}

async function postUser(user){
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    //HTTP REquest
    let response = await fetch(URL_BASE+'/user/createPatient',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: json
    });

    let body = await response.json()
    console.log(body);
    alert(body.description);
    //location.href = "registrarDoctor.html"
}