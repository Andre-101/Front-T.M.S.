const btn = document.querySelector("#btn");
const logout = document.querySelector("#log_out");
const sidebar = document.querySelector(".sidebar");
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPassword = document.getElementById('confirmPassword');
const registerForm = document.getElementById('registerForm');
const URL_BASE= "http://127.0.0.1:8080";


//EVENTOS
document.getElementById('registerForm').addEventListener('submit', () => fieldsCheck());
btn.onclick = async () => sidebar.classList.toggle("active");
logout.onclick = async () => {localStorage.removeItem('user'); goout();}

//FUNCIONES
async function fieldsCheck() {
    // Prevent the form from submitting
    event.preventDefault();

    // Validación de coincidencia de contraseña
    if (passwordInput.value !== confirmPassword.value) {
        alert('Las contraseñas no coinciden');
        event.preventDefault(); // Prevenir el envío si las contraseñas no coinciden
        return;
    }

    signup();
}

function signup() {
    let name = nameInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;

    let user = {
        username: name,
        password: password,
        email: email
    };

    console.log(user);
    postUser(user);
}

async function postUser(user) {
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    //HTTP REquest
    let response = await fetch(URL_BASE + '/user/create', {
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