const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;


var x = canvas.width / 2;
var y = canvas.height / 2;
var quadrado = 50;


c.fillStyle = "black";

function desenharQuadrado() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillRect(x, y, quadrado, quadrado);

    document.querySelector('#coordenada').textContent `X = ${x} Y = ${y}`;

}

function mexerQuadrado(key) {
    switch (key) {
        case 'w':
            if (y > canvas.height)
            {
                y -= 10;
                desenharQuadrado();
            }
            break;
        case 'a':
            if (x > 0)
            {
                x -= 10;
                desenharQuadrado();
            }
            break;
        case 's':
            if (y + quadrado < canvas.width)
            {
                x -= 10;
                desenharQuadrado();
            }
            break;
        case 'd':
            if (x + quadrado > 0)
            {
                x -= 10;
                desenharQuadrado();
            }
            break;
    }
    desenharQuadrado();
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
        mexerQuadrado(key);
    }
});

desenharQuadrado();