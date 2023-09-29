function animarProgresso() {
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");
    var fakedownloadImage = $("#fakedownload");
    var downloadreadyImage = $("#downloadready");
    var realdownloadButton = $("#realdownload");
    var alertdownload = $("#alertdownload");

    var intervalo = setInterval(function () {
        if (progresso >= 100) {
            clearInterval(intervalo);
            barraProgresso.hide();
            fakedownloadImage.attr("src", "https://cyberlaws.net/wp-content/uploads/2021/12/download-button-gif-12.gif");
            fakedownloadImage.show();
            downloadreadyImage.attr("src", "https://3.bp.blogspot.com/-9OH0lDPuCQo/U-yCnj1G5CI/AAAAAAAAAmU/ZCWvhD3Bkws/s1600/animated-download-button.gif");
            downloadreadyImage.show();
            realdownloadButton.removeClass("d-none");
            alertdownload.removeClass("d-none");
        } else {
            progresso++;
            barra.css("width", progresso + "%");
        }
    }, 50);
}