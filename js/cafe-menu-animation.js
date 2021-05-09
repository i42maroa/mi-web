"use strict";

const cafe_boton = document.querySelector(".navbar-hidden");
const imagen_boton = document.querySelector(".navbar-hidden__button");

const nav = document.querySelector(".navbar-menu");
const navContenedor = document.querySelector(".navbar");
const botonToSection = document.querySelectorAll(".navbar-menu-sections-element a");
const cafeHecho = document.querySelector(".navbar-menu-machine-container-coffee");
const cafeHechoTitulo = document.querySelector(".navbar-menu-machine-name h5");
const cafeIzq = document.querySelector(".navbar-menu-machine-container-changeLeft");
const cafeDer = document.querySelector(".navbar-menu-machine-container-changeRight");

const section_sobre = document.querySelector("#section-about");
const section_sobre_h2 = document.querySelector(".section-about__text h2");
const section_sobre_p = document.querySelectorAll(".section-about__text p");
const section_sobre_masInfo = document.querySelector(".section-about__text p b");

const section_skill = document.querySelector("#section-skills");
const section_skill_h2 = document.querySelector(".section-skills h2");
const section_skill_p = document.querySelectorAll(".section-skills__list-skills li p");

const section_trabajo = document.querySelector("#section-experience");
const section_trabajo_h2 = document.querySelector("#section-experience h2");
const section_trabajo_p_anio = document.querySelectorAll(".section-experience-lifeline-element h3");
const section_trabajo_p_texto = document.querySelectorAll(".section-experience-lifeline-text h4");
const section_trabajo_pacman_body = document.querySelector(".pacman-body");
const section_trabajo_pacman_mouth = document.querySelector(".pacman-mouth .pacman");
const section_trabajo_circuloG = document.querySelectorAll(".section-experience-lifeline-Circule");
const section_trabajo_circuloP = document.querySelectorAll(".section-experience-lifeline-tinyCircule");

const section_contacto = document.querySelector("#section-contact");
const section_contacto_h2 = document.querySelector("#section-contact h2");
const section_contacto_a = document.querySelectorAll("#section-contact a");
const section_contacto_p = document.querySelectorAll("#section-contact p");
const section_contacto_i = document.querySelectorAll("#section-contact i");
const section_contacto_boton = document.querySelector(".section-contact_button");

const footer = document.querySelector("footer");
const footer_p = document.querySelector("footer p");
const footer_solid = document.querySelector(".footer-solid");

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


for (let x = 0; x < botonToSection.length; x++) {
    botonToSection[x].addEventListener("click", () => {
        nav.style.animation = "desapNavbar 0.8s";
        setTimeout(() => {
            nav.style.display = "none";
            cafe_boton.style.display = "flex";
            navContenedor.style.background = "none";
        }, 500);
    })
}

botonToSection

cafe_boton.addEventListener("click", () => {
    cafe_boton.style.display = "none";
    nav.style.animation = "apNavbar 0.5s";
    nav.style.display = "flex";
});


const changeColorSection = (section, h2, color, p = undefined) => {
    section.style.background = color.colB;
    section.style.border = `thick solid ${color.colB}`;
    h2.style.color = color.colH2;

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
    nav.style.animation = "desapNavbar 0.8s";
    setTimeout(() => {
        nav.style.display = "none";
        cafe_boton.style.display = "flex";
        navContenedor.style.background = "none";
    }, 500);


    changeColorSection(section_sobre, section_sobre_h2, colores[contCoffe].colores_sections[0], section_sobre_p);

    changeColorSection(section_skill, section_skill_h2, colores[contCoffe].colores_sections[1], section_skill_p);

    changeColorSection(section_trabajo, section_trabajo_h2, colores[contCoffe].colores_sections[2], section_trabajo_p_anio);

    for (let x = 0; x < section_trabajo_p_texto.length; x++) {
        section_trabajo_p_texto[x].style.color = colores[contCoffe].colores_sections[2].colP;
    }
    changePacman(colores[contCoffe].colores_sections[2]);


    changeColorSection(section_contacto, section_contacto_h2, colores[contCoffe].colores_sections[3], section_contacto_p);

    for (let x = 0; x < section_contacto_a.length; x++) {
        section_contacto_a[x].style.color = colores[contCoffe].colores_sections[3].colA;
    }

    for (let x = 0; x < section_contacto_i.length; x++) {
        section_contacto_i[x].style.color = colores[contCoffe].colores_sections[3].colA;
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


section_sobre_masInfo.addEventListener("click", () => {
    document.querySelector(".section-about__text-principal").style.display = "none";
    document.querySelector(".section-about__text-secondary").style.display = "flex";
    const second = document.querySelectorAll(".section-about__text-secondary p");

    for (let x = 0; x < second.length; x++) {
        second[x].style.animation = "aparecerText 1s forwards";
    }
})