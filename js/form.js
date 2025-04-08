document.addEventListener("DOMContentLoaded", () => {
    const checkboxLGPD = document.getElementById("lgpd");
    const botaoEnviar = document.getElementById("enviar");

    // Garante que o botão esteja desabilitado inicialmente
    botaoEnviar.disabled = true;

    checkboxLGPD.addEventListener("change", () => {
        botaoEnviar.disabled = !checkboxLGPD.checked;
    });
});

class Contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    const dados = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    console.log(dados);
    Enviar(dados);
}

function Enviar(dados) {
    if (dados.nome !== "") {
        alert('Obrigado sr(a) ' + dados.nome + ', os seus dados foram encaminhados com sucesso.');
        window.location.reload();
    }
}
