const canvas = document.querySelector("#pintarCanvas");
canvas.width = 800;
canvas.height = 600;
const context = canvas.getContext('2d');

const corEscolhida = document.querySelector('#corEscolhida');
const botao = document.querySelector('#limpar');
let pintando = false;

canvas.addEventListener('mousedown', () => {
    pintando = true;
    context.beginPath();
})

canvas.addEventListener('mousemove', desenhar);

corEscolhida.addEventListener('input', atualizarCor);

function desenhar(event) {
    if (!pintando) return;

    const { clientX, clientY } = event;

    const { left, top } = canvas.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    context.lineTO(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);

}

function atualizarCor(event){
    context.strokeStyle = event.target.value;
}

function limpar()
{
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();
}

botao.addEventListener('click', limpar);