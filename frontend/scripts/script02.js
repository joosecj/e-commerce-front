let form2 = document.querySelector('#form2');
let msg = document.querySelectorAll('.alerta');
let campos = document.querySelectorAll('.texto');
let nome = document.querySelector('#nome');

function setError(index) {
    campos[index].style.border = '2px solid red';
    msg[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '2px solid green';
    msg[index].style.display = 'none';
}

function validarNome() {
    if(campos[0].value.length < 2) {
        setError(0);
    } else {
        removeError(0);
    }
}

function validarMensagem() {
    if(campos[1].value.length < 6) {
        setError(1);
    } else {
        removeError(1);
    }
}

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    validarNome();
    validarMensagem();
});

