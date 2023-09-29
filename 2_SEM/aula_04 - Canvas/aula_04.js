//Atribuir a uma variável o elemento selecionado
canvas = document.querySelector('canvas');

//Definir o tamanho do canvas
canvas.width = 800;
canvas.height = 600;

//A variavel c se torna um objeto onde
//pode ser atribuido métodos
c = canvas.getContext('2d');

//A atribuimos propriedades e métodos ao nosso objeto
//posições (X, Y, width, height)
c.fillStyle = "red";
c.fillRect(100,80,150,200);
c.fillStyle = "rgba(0,255,0,0.5)";
c.fillRect(200,100,500,100);
c.fillRect(100,400,800,100);

//Desenhando uma linha
c.beginPath();

//Posição inicio da linha
c.moveTo(50,450);
c.lineTo(700,50);
c.lineTo(500,300);
c.lineTo(500,300);
c.lineTo(800,100);
c.lineTo(700,50);
c.strokeStyle = "black";
c.stroke();
c.closePath();

//Criando um circulo
//Posições para criação
//(X, Y, raio, anguloInicial, anguloFinal)

c.beginPath();
c.arc(400, 450, 100, 0, Math.PI * 2)
c.fillStyle = "rgba(0,0,255,0.5)";
c.stroke();
c.fillStyle = "rgba(0,255,0,0.5)";
c.closePath();


//Criando um laço para criar vários circulos randomicos

for(var i = 0; i < 100; i++)
{
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    c.beginPath();
  //Math.random * 100 deixa o tamanho aleatório  
    c.arc(x, y, Math.random() * 100, 0, Math.PI *2);
    //c.fillStyle = "rgba(0,0,255,0.5)";
    c.fillStyle = "rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+",0.5)"
    c.stroke();
    c.fill();
    c.closePath();
}