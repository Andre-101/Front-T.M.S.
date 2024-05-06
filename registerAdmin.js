const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupAdminButton = document.getElementById('signupAdminButton');
const logoutButton = document.getElementById('logoutButton');

const URL_BASE = "http://127.0.0.1:8080"; //cambiar URL 

//EVENTOS
signupAdminButton.addEventListener('click', signup);
logoutButton.addEventListener('click', logout);

//Comentario

//FUNCIONES
function signup(){
    let name = nameInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;

    let user = {
        name: name,
        password: password,
        email: email
    };
    console.log(user);
    postUser(user);
}


//FUNCIONES
function logout(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5500/Front-TMS/loginInicialApp.html";
}

async function postUser(user){
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    //HTTP REquest
    let response = await fetch(URL_BASE+'/user/createAdmin',{
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