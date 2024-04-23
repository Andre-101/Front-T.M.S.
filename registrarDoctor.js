const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupButton = document.getElementById('signupButton');

const URL_BASE = "http://127.0.0.1:5501/registrarDoctor.html"; //cambiar URL 

//EVENTOS
signupButton.addEventListener('click', signup);



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

async function postUser(user){
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    let response = await fetch(URL_BASE+'/doctor/create',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: json
    });

    console.log(response);
    location.href = "registrarDoctor.html"
}


