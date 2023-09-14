"use strict";

function carregado() {

    // Prepara o canvas.
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lime";
    ctx.beginPath();
    ctx.fillRect(0, 0, 500, 500);

    // Prepara o teclado.
    document.addEventListener("keydown", apertouTecla);
    document.addEventListener("keyup", soltouTecla);
    canvas.addEventListener("click", clicou);
}

function apertouTecla(evento) {
    const nome = evento.code;
    const repetindo = evento.repeat;
    const setas = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (setas.includes(evento.code)) {
        evento.preventDefault();
    }

    if (repetindo) {
        console.log(`Mantendo a tecla ${nome} pressionada.`);
    } else {
        console.log(`Apertou ${nome}.`);
    }
}

function soltouTecla(evento) {
    const nome = evento.code;
    console.log(`Soltou ${nome}.`);
}

function clicou(evento) {
    const px = evento.offsetX;
    const py = evento.offsetY;
    console.log(`Clicou em (${px}, ${py}).`);
}