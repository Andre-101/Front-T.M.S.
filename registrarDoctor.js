const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupButton = document.getElementById('signupButton');

const URL_BASE = "https://9bf8-200-3-193-78.ngrok-free.app"; //cambiar URL 

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

    postUser(user);
}

async function postUser(user){
    //Obj a JSON
    let json = JSON.stringify(user);
    console.log(json);

    let response = await fetch(URL_BASE+'/user/create',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: json
    });

    console.log(response);
    location.href = "index.html"
}


