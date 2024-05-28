//CONSTANTES

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupButton = document.getElementById('signupButton');
const gohome = document.getElementById('gohome');


//VARIABLES GLOBALES
const URL_BASE= "http://127.0.0.1:8080";


//EVENTOS

gohome.addEventListener("click", comeback);
signupButton.addEventListener('click', login);


//FUNCIONES

async function login(){

    let loginCred = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    console.log(loginCred)

    let response =  await fetch(URL_BASE + '/loginDoctor',{
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(loginCred)
    });

    let data = await response.json();
    console.log(data);

    if(response.status === 200){
        //Almacenar el dato en el cache
        //Cache solo soporta datos primitivos

        let user = JSON.stringify(data);
        window.localStorage.setItem('user', user);
        location.href='../home/homeDoctor.html';
    }else{
        alert(data.description);
    }

}

function comeback() {
    window.location.href = "../../index.html";
}