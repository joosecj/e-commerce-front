let labelInputs = document.querySelectorAll('.label-inputs');
let dadosInput = document.querySelectorAll('.dados-produto');
let descricao = document.querySelector('#descricao-do-produto');
let urlRegex = /^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/;

let validUrl = false;
let validCategoria =false;
let validNome = false;
let validPreco = false;
let validDescricao = false;


dadosInput[0].addEventListener('keyup', ()=> {
    if(!urlRegex.test(dadosInput[0].value)) {
        labelInputs[0].setAttribute('style', 'color: red');
        validUrl = false;
    } else {
        labelInputs[0].setAttribute('style', 'color: green');
        validUrl = true;
    }
});

dadosInput[1].addEventListener('keyup', ()=> {
    if(dadosInput[1].value.length < 3) {
        labelInputs[1].setAttribute('style', 'color: red');
        validCategoria = false;
    } else {
        labelInputs[1].setAttribute('style', 'color: green');
        validCategoria = true;
    }
});

dadosInput[2].addEventListener('keyup', ()=> {
    if(dadosInput[2].value.length < 3) {
        labelInputs[2].setAttribute('style', 'color: red');
        validNome = false;
    } else {
        labelInputs[2].setAttribute('style', 'color: green');
        validNome = true;
    }
});

dadosInput[3].addEventListener('keyup', ()=> {
    if(dadosInput[3].value.length < 3) {
        labelInputs[3].setAttribute('style', 'color: red');
        validPreco = false;
    } else {
        labelInputs[3].setAttribute('style', 'color: green');
        validPreco = true;
    }
});

descricao.addEventListener('keyup', ()=> {
    if(descricao.value.length < 5) {
        descricao.setAttribute('style', 'color: red');
        validDescricao = false;
    } else {
        descricao.setAttribute('style', 'color: green');
        validDescricao = true;
    }
});

function adicionar() {
    if(validUrl && validCategoria && validNome && validPreco && validDescricao) {
        alert('Usuário cadastrado com sucesso!');
    } else {
        alert('Preencha os dados corretamente!');
    }
};
