const corSelecionada = document.querySelector("#corSelecionada");
const exibirCor = document.querySelector("#exibirSelecao");

//função para atualizar a cor exibida

function atualizarCor() {

    //atribui o valor da seleção na variável
    const corSelecionadaValue = corSelecionada.value;

    exibirCor.textContent = `Selected Color: ${corSelecionada.value}`

    //Usar cor no estilo da div
    exibirCor.style.color = corSelecionadaValue;
}

//Adicionado ouvinte de change
corSelecionada.addEventListener('change', atualizarCor)

atualizarCor(); 