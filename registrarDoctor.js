const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupButton = document.getElementById('signupButton');

//EVENTOS
signupButton.addEventListener('click', signup);



//FUNCIONES
function signup(){
    let name = nameInput.value;
    let password = passInput.value;
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
}


