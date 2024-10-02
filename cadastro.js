// ---------- Função Mostrar PopUp ---------- //
function mostrarPopUp(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener('focus', function() {
        label.classList.add('required-popup');
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener('blur', function() {
        label.classList.remove('required-popup');
    });
}

// ---------- VALIDAÇÃO NOME ---------- //
let nome = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

mostrarPopUp(nome, nomeLabel);

// Validar valor do input
nome.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    if (valor.length < 3) {
        nome.classList.remove('correct');
        nome.classList.add('error');
        nomeHelper.classList.add('visible');
        nomeHelper.innerText = "Seu nome deve conter 3 ou mais letras, digite novamente.";
    } else {
        nome.classList.remove('error');
        nome.classList.add('correct');
        nomeHelper.classList.remove('visible');
    }
});

// ---------- VALIDAÇÃO EMAIL ---------- //
let email = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopUp(email, emailLabel);

// Validar valor do input
email.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
        email.classList.remove("error");
        emailHelper.classList.remove("visible");
        email.classList.add("correct");
    } else {
        email.classList.remove("correct");
        email.classList.add("error");
        emailHelper.innerText = "E-mail inválido! Por favor coloque um email válido!";
        emailHelper.classList.add("visible");
    }
});

// ---------- VALIDAÇÃO TELEFONE ---------- //
let telefone = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

mostrarPopUp(telefone, telefoneLabel);

// Validar valor do input
telefone.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    // Simples validação de telefone (mínimo 10 dígitos)
    if (valor.length >= 10) {
        telefone.classList.remove("error");
        telefone.classList.add("correct");
        telefoneHelper.classList.remove("visible");
    } else {
        telefone.classList.remove("correct");
        telefone.classList.add("error");
        telefoneHelper.innerText = "Telefone inválido! Deve conter pelo menos 10 dígitos.";
        telefoneHelper.classList.add("visible");
    }
});

// ---------- VALIDAÇÃO SENHA ---------- //
let senha = document.getElementById('senha');
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById('senha-helper');

mostrarPopUp(senha, senhaLabel);

// Validar valor da senha
senha.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    if (valor.length >= 8) {
        senha.classList.remove("error");
        senha.classList.add("correct");
        senhaHelper.classList.remove("visible");
    } else {
        senha.classList.remove("correct");
        senha.classList.add("error");
        senhaHelper.innerText = "A senha deve conter pelo menos 8 caracteres.";
        senhaHelper.classList.add("visible");
    }
});

// ---------- VALIDAÇÃO CONFIRMAÇÃO DE SENHA ---------- //
let confirmaSenha = document.getElementById('confirma-senha');
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper');

mostrarPopUp(confirmaSenha, confirmaSenhaLabel);

// Validar valor da confirmação de senha
confirmaSenha.addEventListener("change", function(evento) {
    let valor = evento.target.value;

    if (valor === senha.value) {
        confirmaSenha.classList.remove("error");
        confirmaSenha.classList.add("correct");
        confirmaSenhaHelper.classList.remove("visible");
    } else {
        confirmaSenha.classList.remove("correct");
        confirmaSenha.classList.add("error");
        confirmaSenhaHelper.innerText = "As senhas não coincidem.";
        confirmaSenhaHelper.classList.add("visible");
    }
});


// ---------- VALIDAÇÃO ENDEREÇO ---------- //
let endereco = document.getElementById('endereco');
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.createElement('endereco-helper');

mostrarPopUp(endereco, enderecoLabel)

endereco.addEventListener("change", function(evento) {
    
   
let valor = evento.target.value;

    if (valor.length < 5) {
        endereco.classList.remove("error");
        endereco.classList.add("correct");
        enderecoHelper.classList.remove("visible");
        
    } 
   
else {
        endereco.classList.remove("correct");
        endereco.classList.add("error");
        enderecoHelper.innerText = "O endereço é obrigatório.";
        enderecoHelper.classList.add("visible");
    }
});
