const btn = document.querySelector("#btn");
const logout = document.querySelector("#log_out");
const sidebar = document.querySelector(".sidebar");
const adduser = document.querySelector('#addUserButton');
const URL_BASE = "http://127.0.0.1:8080";

//EVENTOS
btn.onclick = async () => sidebar.classList.toggle("active");
adduser.onclick = async () => registerUser();
document.addEventListener('DOMContentLoaded', renderTable());
logout.onclick = async () => {localStorage.removeItem('user'); goto();}


//FUNCIONES

async function fetchData() {
    // Recuperar el objeto Doctor desde localStorage
    const user = localStorage.getItem('user');
    if (!user) {
        console.error('No login found in localStorage');
        goto();
    }

    let response = await fetch(URL_BASE + '/doctor/list/' + JSON.parse(user).id);

    if (response.status === 200) {
        return response.json();
    } else {
        alert(data.description);
    }
}
  
async function renderTable() {
    fetchData().then(users => {
        if (!users) return;  // Si no hay datos, detener la ejecución aquí

        const tableBody = document.getElementById('doctorTable');
        //tableBody.innerHTML = ""; // Limpiar la tabla antes de re-renderizar
        console.log(users);

        users.forEach((user, index) => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const ageCell = row.insertCell(1);
            const genderCell = row.insertCell(2);
            const actionCell = row.insertCell(3);

            nameCell.innerHTML = user.name;
            ageCell.innerHTML = user.age;
            genderCell.innerHTML = user.gender;
            actionCell.innerHTML = `<button onclick="editUser(${user.id})"><i class='bx bx-edit'></i></button>
                                    <button onclick="deleteUser(${user.id})"><i class='bx bx-trash'></i></button>`;
        });
    }).catch(error => {
        console.error('Failed to render table:', error);
    });
}

async function registerUser() {
    location.href = '../register/registerPatient.html';
}

function editUser(index) {
    // Aquí podría ir una función para editar un usuario
    console.log("Editar usuario con índice:", index);
}

async function deleteUser(id) {
    let response = await fetch(URL_BASE+'/patient/delete/'+ JSON.parse(localStorage.getItem('user')).id + '/' + id, {
        method: 'DELETE'
    });
    let message = await response.json();
    alert(message);
    location.href = "listPatient.html";
}

async function goto() {
    location.href = '../../index.html';
}