const colunas = document.querySelector(".column");

//variavel para armazenar o item atual arrastado
let ItemArrastado = null;

//Adiciona um ouvinte ao evento "dragstart" a cada elemento com a classe "collumn"
colunas.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        //Define o item sendo arrastado
        ItemArrastado = e.target;

        //Adiciona a classe "dragging" ao item para destaca-lo visualmente
        ItemArrastado.classList.add("dragging");
    });


    item.addEventListener("dragged", () => {
        ItemArrastado.classList.remove("dragging");

        ItemArrastado = null;
    });
});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com a classe "collumn"
colunas.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault(); //previne o comportamento padrao de dragover verifica se há um item sendo arrastado

        if (!ItemArrastado) return;

        const aplicarDepois = getNewPosition(item, eclienteY);

        //insere o item arrastado após o de refetencia ou início da coluna
        if (aplicarDepois) {
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        } else {
            item.prepend(ItemArrastado);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoudingClientRect();
        const boxCenterY = box.top + box.height / 2;

        //verifica se a posição do mouse esta acima do centro do item de referencia

        if (posY >= boxCenterY) result = refer_card;
    }

    return result;
}