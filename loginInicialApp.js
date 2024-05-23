const loginAdminButton = document.getElementById('loginAdminButton');
const loginDoctorButton = document.getElementById('loginDoctorButton');

const URL_BASE= "http://127.0.0.1:8080";

//EVENTOS
loginAdminButton.addEventListener('click', loginAdminButton);
loginDoctorButton.addEventListener('click', loginDoctorButton);


//FUNCIONES
function loginAdminButton(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5501/loginAdmin.html";
}

function loginDoctorButton(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5501/loginDoctor.html";
}


