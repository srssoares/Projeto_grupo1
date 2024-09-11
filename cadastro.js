// ---------- VALIDAÇÃO NOME ---------- //
let nome = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

// Mostrar popup de campo obrigatório
nome.addEventListener("focus", ()=>{
    nomeLabel.classList.add('required-popup')
})


// Ocultar popup de campo obrigatório
nome.addEventListener ("blur", ()=> {
    nomeLabel.classList.remove('required-popup')
})


// Validar valor do input
nome.addEventListener("change", function(evento){
    let valor =evento.target.value
    console.log(valor)
    
    if (valor.length < 3){
        nome.classList.remove ('correct');
        nome.classList.add('error');
        nome.classList.add('visible')
        nomeHelper.innerText = "Seu nome deve conter 3 ou mais letras, digite novamente"
    }else{
        nome.classList.remove ('error');
        nome.classList.add('correct');
        nome.classList.remove('visible')

    }
})

let email = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

email.addEventListener("focus", ()=>{
    emailLabel.classList.add('required-popup')
})
email.addEventListener ("blur", ()=> {
    emailLabel.classList.remove('required-popup')
})

email.addEventListener("change", function(evento){
    let valor =evento.target.value
    console.log(valor)
    
    if (valor.included(@) && included(.com)){
        email.classList.remove ('correct');
        email.classList.add('error');
        email.classList.add('visible')
        emailHelper.innerText = "Seu email deve conter 3 ou mais letras, digite novamente"
    }else{
        email.classList.remove ('error');
        email.classList.add('correct');
        email.classList.remove('visible')

    }
})

let senha = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

senha.addEventListener("focus", ()=>{
    senhaLabel.classList.add('required-popup')
})
senha.addEventListener ("blur", ()=> {
    senhaLabel.classList.remove('required-popup')
})

senhaInput.addEventListener("change", function(evento){
    let valor =evento.target.value
    console.log(valor)
    
    if (valor.length < = 8){
        senhaInput.classList.remove ('correct');
        senhaInput.classList.add('error');
        emailInput.classList.add('visible')
        senhaHelper.innerText = "Sua senha deve conter 3 ou mais letras, digite novamente"
    }else{
        senhaInput.classList.remove ('error');
        senhaInput.classList.add('correct');
        senhaInputt.classList.remove('visible')

    }
})
// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.querySelector("#username");
console.log(usernameInput)
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
usernameInput.addEventListener("focus", ()=>{
    usernameLabel.classList.add('required-popup')
})
// Ocultar popup de campo obrigatório
usernameInput.addEventListener("blur", ()=>{
    usernameLabel.classList.remove('required-popup')
})
// Validar valor do input
usernameInput.addEventListener('change', function(evento){
    let valor = evento.target.value
    console.log(valor)

    if(valor.length < 3){
        // estilos dinãmicos caso o valor não seja válido
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error')
        usernameHelper.classList.add('visible')
        usernameHelper.innerText = "Seu nome deve conter mais do que 3 caracteres. Digite novamente."
    }else{
        // estilos dinâmicos caso o valor seja válido
        usernameInput.classList.remove('error')
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible')
    }
})
// ----------Função Mostrar PopUp---------- //

function mostrarPopUp(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener('focus', function(){
        label.classList.add('required-popup')
    })

    // Ocultar popu de campo obrigratório
    input.addEventListener('blur', function(){
        label.classList.remove('required-popup')
    })
}
mostrarPopUp(usernameInput, usernameLabel)

// ---------- VALIDAÇÃO EMAIL ---------- //
// PEGAR OS ELEMENTOS
let emailInput = document.querySelector('#email');
console.log(emailInput)
let emailLabel = document.querySelector('label[for ="email"]');
console.log(emailLabel)
let emailHelper = document.querySelector('#email-helper');

// MOSTRAR POPUP DE CAMPO OBRIGATÓRIO
mostrarPopUp(emailInput, emailLabel);

// Validar valor do input
emailInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.includes("@") && valor.includes(".com")){
        // Estilo dinâmicos caso o valor seja válido
        emailInput.classList.remove("error");
        emailHelper.classList.remove("visible");
        emailInput.classList.add("correct");
    }else {
        // Estilos dinâmicos caso o valor não seja válido
        emailInput.classList.remove("correct");
        emailHelper.classList.add("error");
        emailHelper.innerText = "E-mail inválido! Por favor coloque um email válido!"
        emailHelper.classList.add("visible")
    }
})

// ---------- VALIDAÇÃO SENHA ---------- //
// PEGAR OS ELEMENTOS da senha
let senhaInput = document.querySelector("#senha")
let senhaLabel = document.querySelector('label[for="senha"]')
let senhaHelper = document.querySelector('#senha-helper')

// MOSTRAR POPUP DE CAMPO OBRIGATÓRIO da senha
mostrarPopUp(senhaInput, senhaLabel);

// Validar valor da senha
senhaInput.addEventListener("change", function(evento){
    let valor = evento.target.value

    if(valor.length >= 8){
        // Estilos dinâmicos caso a senha seja válida
        senhaInput.classList.remove("error");
        senhaInput.classList.add("correct");
        senhaHelper.classList.remove("visible");
    } else {
        // Estilos dinâmicos caso a senha não seja válida
        senhaInput.classList.remove("correct");
        senhaInput.classList.add("error");
        senhaHelper.classList.add("visible");
        senhaHelper.innerText = "A senha deve conter pelo menos 8 caracteres.";
... (30 linhas)
Recolher
message.txt
6 KB
