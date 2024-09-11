document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        // Impede o envio do formulário se houver erros
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        // Valida o nome
        const nomeInput = document.getElementById("nome");
        const nomeLabel = document.querySelector("label[for='nome']");
        if (nomeInput.value.trim() === "") {
            nomeLabel.style.border = "2px solid red";
            isValid = false;
        } else {
            nomeLabel.style.border = "2px solid green";
        }

        // Valida o email
        const emailInput = document.getElementById("email");
        const emailLabel = document.querySelector("label[for='email']");
        if (!validateEmail(emailInput.value)) {
            emailLabel.style.border = "2px solid red";
            isValid = false;
        } else {
            emailLabel.style.border = "2px solid green";
        }

        // Valida o telefone
        const telefoneInput = document.getElementById("telefone");
        const telefoneLabel = document.querySelector("label[for='telefone']");
        if (telefoneInput.value.trim() === "") {
            telefoneLabel.style.border = "2px solid red";
            isValid = false;
        } else {
            telefoneLabel.style.border = "2px solid green";
        }

        // Valida o link de música
        const linkInput = document.getElementById("link_musica");
        const linkLabel = document.querySelector("label[for='link_musica']");
        if (!validateURL(linkInput.value)) {
            linkLabel.style.border = "2px solid red";
            isValid = false;
        } else {
            linkLabel.style.border = "2px solid green";
        }

        // Valida a senha e a confirmação
        const senhaInput = document.getElementById("senha");
        const confirmaSenhaInput = document.getElementById("confirma-senha");
        const senhaLabel = document.querySelector("label[for='senha']");
        const confirmaSenhaLabel = document.querySelector("label[for='confirma-senha']");

        if (senhaInput.value !== confirmaSenhaInput.value || senhaInput.value.trim() === "") {
            senhaLabel.style.border = "2px solid red";
            confirmaSenhaLabel.style.border = "2px solid red";
            isValid = false;
        } else {
            senhaLabel.style.border = "2px solid green";
            confirmaSenhaLabel.style.border = "2px solid green";
        }

        return isValid;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateURL(url) {
        const urlPattern = /^(https?:\/\/)?([\w\d-]+\.){1,}\.[\w]{2,}(\/.*)?$/;
        return urlPattern.test(url);
    }
});
