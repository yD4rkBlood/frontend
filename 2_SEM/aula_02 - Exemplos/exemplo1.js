//Selecionando botão pelo ID
const botao = document.querySelector('#aumentar');
const botao2 = document.querySelector('#diminuir');
const botao3 = document.querySelector('#zerar');
const contadorElemento = document.querySelector('#contador');

//inicializando contador
let contador = 0;

//função que sera chamada pelo eventListener
function contando() {
    contador++;
    contadorElemento.textContent = contador;
}

function diminuir() {
    if (contador <= 0) {
        alert("Contador Zerado")
    } else {
        contador--;
        contadorElemento.textContent = contador;
    }
}

function zerar() {
    contador = 0;
    contadorElemento.textContent = "0";
}

//Adicionando ouvinte do evento de click
botao.addEventListener('click', contando)
botao2.addEventListener('click', diminuir)
botao3.addEventListener('click', zerar)