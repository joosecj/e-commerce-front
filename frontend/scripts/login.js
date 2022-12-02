let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let span = document.querySelector('#alerta-email');
let spanSenha = document.querySelector('#alerta-senha');
let emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

email.addEventListener('keyup', ()=> {
    if(!emailRegex.test(email.value)) {
        email.setAttribute('style', 'color: red');
        span.setAttribute('style', 'display: block');
    } else {
        email.setAttribute('style', 'color: green');
        span.setAttribute('style', 'display: none');
    }
})

senha.addEventListener('keyup', ()=> {
    if(senha.value.length < 3 || senha.value.length > 8) {
        spanSenha.setAttribute('style', 'display: block');
    } else {
        spanSenha.setAttribute('style', 'display: none');
    }
})