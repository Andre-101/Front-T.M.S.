const btn = document.querySelector("#btn");
const logout = document.querySelector("#log_out");
const sidebar = document.querySelector(".sidebar");
const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const genderInput = document.getElementById('genderInput');
const registerForm = document.getElementById('registerForm');

const URL_BASE= "http://127.0.0.1:8080";

//EVENTOS
document.getElementById('registerForm').addEventListener('submit', () => fieldsCheck());
btn.onclick = async () => sidebar.classList.toggle("active");
logout.onclick = async () => {localStorage.removeItem('user'); goto();}

//FUNCIONES
async function fieldsCheck() {
    // Prevent the form from submitting
    event.preventDefault();

    const user = localStorage.getItem('user');
    if (!user) {
        console.error('No login found in localStorage');
        goto();
    }

    signup();
}

function signup() {
    let name = nameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;

    let user = {
        name: name,
        age: age,
        gender: gender,
        doctor: JSON.parse(localStorage.getItem('user'))
    };

    console.log(user);
    postUser(user);
}

async function postUser(user) {
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    //HTTP REquest
    let response = await fetch(URL_BASE + '/patient/create/' + JSON.parse(localStorage.getItem('user')).id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    });

    let body = await response.json()
    console.log(body);
    alert(body.description);
}

async function goto() {
    location.href = '../../index.html';
}