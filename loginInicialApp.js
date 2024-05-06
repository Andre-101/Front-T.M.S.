const loginAdminButton = document.getElementById('loginAdminButton');
const loginDoctorButton = document.getElementById('loginDoctorButton');

const URL_BASE= "http://127.0.0.1:8080";

//EVENTOS
loginAdminButton.addEventListener('click', loginAdmin);
loginDoctorButton.addEventListener('click', loginDoctor);


//FUNCIONES
function loginAdmin(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5500/Front-TMS/loginAdmin.html";
}

function loginDoctor(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5500/Front-TMS/loginDoctor.html";
}


