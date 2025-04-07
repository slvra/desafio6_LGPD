
let check;

if (document.getElementById("lgpd").checked) {
    document.getElementById("enviar").disabled = false;
}

class contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

  check = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);

            console.log(check);
            Enviar();
}

function Enviar() {

    if (check.nome != "") {
        alert('Obrigado sr(a) ' + check.nome + ' os seus dados foram encaminhados com sucesso');
            window.location.reload();
    }
}


Function Interface () {
    let el = document.getElementById("lgpd");
    if (el.checked) {
        document.getElementById("enviar").disabled = false;
        el.classList.remove('desabilitado');

    } else 
        document.getElementById("enviar").disabled = true;
        l.classList.add('testando');
    console.log(el.checked);
}