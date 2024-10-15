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
document.getElementById('estado').addEventListener('change', function() {
    const estado = this.value;
    const cidadeSelect = document.getElementById('cidade');
    
    // Limpa as opções atuais de cidade
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    
    // Define as cidades para cada estado (exemplo com alguns estados)
    const cidadesPorEstado = {
        'SP': ['São Paulo', 'Campinas', 'Santos'],
        'RJ': ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
        'MG': ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'],
        'ES': ['Vitória', 'Vila Velha', 'Guarapari']
        // Adicione mais estados e cidades conforme necessário
    };
    
    // Adiciona as cidades relacionadas ao estado selecionado
    if (cidadesPorEstado[estado]) {
        cidadesPorEstado[estado].forEach(function(cidade) {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    }
});

// ---------- VALIDAÇÃO LINK PARA MÚSICA OU VÍDEO ---------- //
let linkMusica = document.getElementById('link_musica');
let linkMusicaLabel = document.querySelector('label[for="link_musica"]');
let linkMusicaHelper = document.getElementById('link-musica-helper');

mostrarPopUp(linkMusica, linkMusicaLabel);

// Validar valor do input
linkMusica.addEventListener("change", function(evento) {
    
  
let valor = evento.target.value;

    // Simples validação de URL
const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol   
'((([a-z\\d](?!-))([a-z\\d-]{0,61}[a-z\\d])?\\.)+[a-z]{2,6}|'+ // domain name     
'localhost|'+ // localhost 
'\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|'+ // IPv4
'\\[?[a-f\\d]*:[a-f\\d:]+\\]?)'+ // IPv6 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path  
'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
'(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if (urlPattern.test(valor)) {
        linkMusica.classList.remove("error");
        linkMusica.classList.add("correct");
        linkMusicaHelper.classList.remove("visible");
    } else {
        linkMusica.classList.remove("correct");
        linkMusica.classList.add("error");
        linkMusicaHelper.innerText = "Por favor, insira um link válido para música ou vídeo.";
        linkMusicaHelper.classList.add("visible");
    }
});

    
function showForm(formType) {
    // Esconde todos os formulários
    document.getElementById('form-estabelecimento').style.display = 'none';
    document.getElementById('form-musico').style.display = 'none';
    document.getElementById('form-cliente').style.display = 'none';

    // Mostra o formulário selecionado
    if (formType === 'estabelecimento') {
        document.getElementById('form-estabelecimento').style.display = 'block';
    } else if (formType === 'musico') {
        document.getElementById('form-musico').style.display = 'block';
    } else if (formType === 'cliente') {
        document.getElementById('form-cliente').style.display = 'block';
    }
}

// Mostra o primeiro formulário por padrão (opcional)
window.onload = function() {
    showForm('estabelecimento'); // Escolha qual formulário mostrar por padrão
};
