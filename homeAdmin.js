const logoutButton = document.getElementById('logoutButton');

const URL_BASE= "http://127.0.0.1:8080";

//EVENTOS
logoutButton.addEventListener('click', logout);


//FUNCIONES
function logout(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "http://127.0.0.1:5500/Front-TMS/login.html";
}

