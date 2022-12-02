let labelInputs = document.querySelectorAll('.label-inputs');
let dadosInput = document.querySelectorAll('.dados-produto');
let descricao = document.querySelector('#descricao-do-produto');
let urlRegex = /^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/;


dadosInput[0].addEventListener('keyup', ()=> {
    if(!urlRegex.test(dadosInput[0].value)) {
        labelInputs[0].setAttribute('style', 'color: red');
    } else {
        labelInputs[0].setAttribute('style', 'color: green');
    }
});

dadosInput[1].addEventListener('keyup', ()=> {
    if(dadosInput[1].value.length < 3) {
        labelInputs[1].setAttribute('style', 'color: red');
    } else {
        labelInputs[1].setAttribute('style', 'color: green');
    }
});

dadosInput[2].addEventListener('keyup', ()=> {
    if(dadosInput[2].value.length < 3) {
        labelInputs[2].setAttribute('style', 'color: red');
    } else {
        labelInputs[2].setAttribute('style', 'color: green');
    }
});

descricao.addEventListener('keyup', ()=> {
    if(descricao.value.length < 5) {
        descricao.setAttribute('style', 'color: red');
    } else {
        descricao.setAttribute('style', 'color: green');
    }
});
