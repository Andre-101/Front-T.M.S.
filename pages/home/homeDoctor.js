const btn = document.querySelector("#btn");
const logout = document.querySelector("#log_out");
const sidebar = document.querySelector(".sidebar");

const URL_BASE= "http://127.0.0.1:8080";

//EVENTOS
btn.onclick = async () => sidebar.classList.toggle("active");
logout.onclick = async () => {localStorage.removeItem('user'); goout();}

logstatus();

//FUNCIONES
function logstatus() {
    if(localStorage.getItem('user') === null) {
        goout();
    }
}
function goout(){
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "../login/loginInicialApp.html";
}

