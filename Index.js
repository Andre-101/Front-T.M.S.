//CONTANTES

const usertype = document.querySelector("#usertype");
const login = document.querySelector("#login");


//VARIABLES GLOBALES

let goto = "";


//ACCIONES INICIALES

changeDirection();


//EVENTOS

usertype.addEventListener("change", changeDirection);
login.addEventListener('click', loginDir);


//FUNCIONES

function changeDirection(){
    if(usertype.checked) {
        goto = "pages/login/loginAdmin.html";
        console.log("ok");
    } else {
        goto = "pages/login/loginDoctor.html";
        console.log("no");
    }
}

function loginDir(){
    window.location.href = goto;
}

