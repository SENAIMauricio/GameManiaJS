//----------FORMULÁRIO-------------//

var entrar = document.getElementById('entrar');
var msgValidacao = document.getElementById('msg-validacao');
var msgInvalidacao = document.getElementById('msg-invalidacao');
var azulLogin = document.getElementById('azul-login');

function validarFormulario() {

    entrar.addEventListener("click",function(){
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        if((email !== null && email !== undefined && email !== '') 
        && (senha !== null && senha !== undefined && senha !== '')) {
            msgValidacao.style.zIndex = '2';
        } else {
            msgInvalidacao.style.zIndex = '2';
        };
    });

    msgValidacao.addEventListener("mouseout",function(){
        window.open('index.html','_self');
    })

    msgInvalidacao.addEventListener("mouseout",function(){
        msgInvalidacao.style.zIndex = '0';
    })

};

validarFormulario();


