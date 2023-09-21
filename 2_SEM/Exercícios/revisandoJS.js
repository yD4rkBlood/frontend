function validarDados() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var cidade = document.getElementById("cidade").value;
    var alertdados = document.getElementById("alertdados");
    var dados = document.getElementById("dados");

    if (nome === "" || idade === "" || cidade === "") {
        dados.innerText = "Preencha todos os campos!";
        dados.classList.add("text-danger")
    } else if (idade <- 0) {
        dados.innerText = "Tu nem nasceu ainda mané";
        dados.classList.add("text-danger")
    } else if (idade > 100) {
        dados.innerText = "Como você ainda está vivo?";
        dados.classList.add("text-danger")
    } else {
        dados.innerText = "Nome: " + nome + "\nIdade: " + idade + "\nCidade: " + cidade;
        dados.classList.add("text-success")
    }
    alertdados.classList.remove("d-none");
}

function limparDados() {
    document.getElementById("alertdados").classList.add("d-none");
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("cidade").value = "";
}
