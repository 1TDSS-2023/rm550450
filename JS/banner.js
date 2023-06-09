let tmp = "";

//ARROW FUNCTION - diferenca eh q eh declarada como variavel "mudaCor". fora isso, o uso eh o mesmo
const mudaCor = () => {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    const elemCabecalho = document.querySelector(".cabecalho");

    elemCabecalho.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; //rgb eh um metodo com 3 parametros com as paletas de cores.

    tmp = setTimeout(mudaCor, 1000);
};

mudaCor();

function mudaBanner() {
    const img1 = document.querySelector(".banner-1 img");
    const img2 = document.querySelector(".banner-2 img");

    let nr = Math.ceil(Math.random() * 3);
    img1.src = "./img/banner-lateral-" + nr + ".png";

    nr = Math.ceil(Math.random() * 3);
    img2.src = "./img/banner-lateral-" + nr + ".png";

    setTimeout(mudaBanner, 2000);
}

mudaBanner();

function luz() {
    const imgLampada = document.querySelector(".conteudo img");
    const botaLigaDesliga = document.querySelector("#meu-botao");

    if (imgLampada.alt == "Lampada desligada") {
        imgLampada.alt = "Lampada ligada";
        imgLampada.src = "./img/pic_bulbon.gif";
        botaLigaDesliga.textContent = "DESLIGAR";
    } else {
        imgLampada.alt = "Lampada desligada";
        imgLampada.src = "./img/pic_bulboff.gif";
        botaLigaDesliga.textContent = "LIGAR";
    }
}
