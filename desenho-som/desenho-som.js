"use strict";

function carregado() {

    // Prepara o canvas.
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 500);

    // Carrega o trollface.
    let figura = new Image();
    figura.onload = () => desenharTrollface(figura, ctx);
    figura.src = "Trollface.png";

    // Prepara o teclado.
    canvas.addEventListener("click", clicou);
}

function desenharTrollface(figura, ctx) {
    // Faz o desenho normal.
    ctx.drawImage(figura, 10, 10);

    // Desenha inclinado e reduzido.
    ctx.save();
    ctx.translate(400, 400);
    ctx.rotate(230 * Math.PI / 180);
    ctx.scale(0.5, -0.5);
    ctx.drawImage(figura, -figura.width / 2, -figura.height / 2);
    ctx.restore();

    // Desenha cortado.
    ctx.drawImage(figura, 90, 50, 200, 70, 380, 30, 100, 35);
}

function clicou(evento) {
    let musica = new Audio();
    musica.src = "vamos-js.mp3";
    musica.volume = 1.0;
    musica.play();
}