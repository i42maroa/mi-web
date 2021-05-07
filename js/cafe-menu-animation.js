"use strict";

const cafe_boton = document.querySelector(".navbar-cafe");
const imagen_boton = document.querySelector(".gota-agua");

const nav = document.querySelector(".navbar-menu-cafe");
const navContenedor = document.querySelector(".navbar");
const cafeHecho = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cafe");
const cafeHechoTitulo = document.querySelector(".navbar-menu-cafe__parte-dinero h1");
const cafeIzq = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cambIzq");
const cafeDer = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cambDer");

const section_sobre = document.querySelector("#section-sobre");
const section_sobre_h3 = document.querySelector(".section-sobre__explicacion h3");
const section_sobre_p = document.querySelectorAll(".section-sobre__explicacion p");

const section_tecnologia = document.querySelector("#section-tecnologia");
const section_tecnologia_h3 = document.querySelector(".section-tecnologia__skills h3");
const section_tecnologia_p = document.querySelectorAll(".section-tecnologia_grid-container__element p ");

const section_trabajo = document.querySelector("#section-trabajo");
const section_trabajo_h3 = document.querySelector("#section-trabajo h3");
const section_trabajo_p_anio = document.querySelectorAll(".anio p");
const section_trabajo_p_texto = document.querySelectorAll(".section-trabajo__grid-text");
const section_trabajo_pacman_body = document.querySelector(".pacman-body");
const section_trabajo_pacman_mouth = document.querySelector(".pacman-mouth .pacman");
const section_trabajo_circuloG = document.querySelectorAll(".circulo");
const section_trabajo_circuloP = document.querySelectorAll(".circulo-pequeño");

const section_contacto = document.querySelector("#section-contacto");
const section_contacto_h3 = document.querySelector("#section-contacto h3");
const section_contacto_a = document.querySelectorAll("#section-contacto a");
const section_contacto_p = document.querySelectorAll("#section-contacto p");
const section_contacto_i = document.querySelectorAll("#section-contacto i");
const section_contacto_boton = document.querySelector(".section-contacto__CURRICULUM");

const footer = document.querySelector(".footer");
const footer_p = document.querySelector(".footer p");
const footer_solid = document.querySelector(".solid");

var reproducir = new Audio();
reproducir.src = "audio/cafetera.mp3";


let contCoffe = 0
let cafes = [];
let colores = [];

const cargarCafes = async(documentUrl) => {
    await fetch(documentUrl)
        .then((res) =>
            res.json())
        .then((res) => {
            cafes = res.cafes;
        })
        .catch(() => console.log(`Document ${documentUrl} not found.`))
}

const cargarColores = async(documentUrl) => {
    await fetch(documentUrl)
        .then((res) =>
            res.json())
        .then((res) => {
            colores = res.colores;
        })
        .catch(() => console.log(`Document ${documentUrl} not found.`))
}

cargarCafes("js/cafes.txt");
cargarColores("js/colores-sections.txt");


cafe_boton.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
        cafe_boton.style.display = "none";

    } else {
        nav.style.display = "none";
        navContenedor.style.background = "none";
    }
});


const changeColorSection = (section, h3, color, p = undefined) => {
    section.style.background = color.colB;
    section.style.border = `thick solid ${color.colB}`;
    h3.style.color = color.colH3;
    if (p !== undefined) {
        for (let x = 0; x < p.length; x++) {
            p[x].style.color = color.colP;
        }
    }
}

const changePacman = (color) => {
    section_trabajo_pacman_body.style.background = color.colPac;
    section_trabajo_pacman_mouth.style.background = color.colPacM;
    section_trabajo_pacman_mouth.style.border = "thick solid " + color.colPacM;

    for (let x = 0; x < section_trabajo_circuloG.length; x++) {
        section_trabajo_circuloG[x].style.background = color.colPac;
    }

    for (let x = 0; x < section_trabajo_circuloP.length; x++) {
        section_trabajo_circuloP[x].style.background = color.colPac;
    }
}

const changeCoffeInMachine = (cafe) => {
    cafeHecho.style.backgroundImage = `url("${cafe.url}")`;
    imagen_boton.style.backgroundImage = `url("${cafe.url}")`;
    cafeHechoTitulo.textContent = cafe.nombre;
}

//SELECCIONAR CAFE
cafeHecho.addEventListener("click", () => {
    nav.style.display = "none";
    navContenedor.style.background = "none";
    cafe_boton.style.display = "flex";

    changeColorSection(section_sobre, section_sobre_h3, colores[contCoffe].colores_sections[0], section_sobre_p);

    changeColorSection(section_tecnologia, section_tecnologia_h3, colores[contCoffe].colores_sections[1], section_tecnologia_p);

    changeColorSection(section_trabajo, section_trabajo_h3, colores[contCoffe].colores_sections[2], section_trabajo_p_anio);

    for (let x = 0; x < section_trabajo_p_texto.length; x++) {
        section_trabajo_p_texto[x].style.color = colores[contCoffe].colores_sections[2].colP;
    }
    changePacman(colores[contCoffe].colores_sections[2]);


    changeColorSection(section_contacto, section_contacto_h3, colores[contCoffe].colores_sections[3], section_contacto_p);

    for (let x = 0; x < section_contacto_a.length; x++) {
        section_contacto_a[x].style.color = colores[contCoffe].colores_sections[3].colA;
    }

    for (let x = 0; x < section_contacto_i.length; x++) {
        section_contCoffeacto_i[x].style.color = colores[contCoffe].colores_sections[3].colA;
    }

    footer.style.background = colores[contCoffe].colores_sections[4].colB;
    footer_p.style.color = colores[contCoffe].colores_sections[4].colP;
    footer_solid.style.background = colores[contCoffe].colores_sections[4].colS;

    //Reproduce el sonido de la máquina
    reproducir.volume = 0.5;
    reproducir.play();
});

//MODIFICAR AL CAFE DE LA IZQUIERDA
cafeIzq.addEventListener("click", () => {
    (contCoffe <= 0) ? contCoffe = 3: contCoffe--;
    changeCoffeInMachine(cafes[contCoffe]);
});

//MODIFICAR AL CAFE DE LA DERECHA
cafeDer.addEventListener("click", () => {
    contCoffe = (contCoffe + 1) % 4;
    changeCoffeInMachine(cafes[contCoffe]);
});