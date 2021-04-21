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
const section_tecnologia_p = document.querySelectorAll(".section-tecnologia_grid-container__element p");

const section_trabajo = document.querySelector("#section-trabajo");
const section_trabajo_h3 = document.querySelector("#section-trabajo h3");
const section_trabajo_p_anio = document.querySelectorAll(".anio p");
const section_trabajo_p_texto = document.querySelectorAll(".section-trabajo__grid-text");

const section_contacto = document.querySelector("#section-contacto");
const section_contacto_h3 = document.querySelector("#section-contacto h3");
const section_contacto_a = document.querySelectorAll("#section-contacto a");
const section_contacto_p = document.querySelectorAll("#section-contacto p");



var reproducir = new Audio();
reproducir.src = "audio/cafetera.mp3";

const colorBlanco = "#f8f4e1";
const colorMarron = "#4e3620";
const colorMarroncete = "#897853";

const cafes = [{
    nombre: "EXPRESSO",
    url: "img/cafes/cafe-solo.png",
    url2: "img/cafes/cafe-solo2.png"
}, {
    nombre: "LATTE",
    url: "img/cafes/capuccino.png",
    url2: "img/cafes/capuccino-2.png"
}, {
    nombre: "IRLANDÉS",
    url: "img/cafes/irlandes.png",
    url2: "img/cafes/irlandes-2.png"
}, {
    nombre: "LECHE",
    url: "img/cafes/leche.png",
    url2: "img/cafes/leche-2.png"
}]

const colores = [{
        "nombre": "EXPRESSO",
        "colores_sections": [{
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colP": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colP": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colP_A": colorBlanco,
                "colP_T": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colA": colorBlanco,
                "colP": colorBlanco
            }
        ]
    }, {
        "nombre": "LATTE",
        "colores_sections": [{
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colP": colorMarron
            },
            {
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colP": colorMarron
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colP_A": colorBlanco,
                "colP_T": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colA": colorBlanco,
                "colP": colorBlanco
            }
        ]
    }, {
        "nombre": "IRLANDÉS",
        "colores_sections": [{
                "colB": colorMarroncete,
                "colH3": colorBlanco,
                "colP": colorBlanco
            },
            {
                "colB": colorMarroncete,
                "colH3": colorBlanco,
                "colP": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colP_A": colorBlanco,
                "colP_T": colorBlanco
            },
            {
                "colB": colorMarron,
                "colH3": colorBlanco,
                "colA": colorBlanco,
                "colP": colorBlanco
            }
        ]
    }, {
        "nombre": "LECHE",
        "colores_sections": [{
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colP": colorMarron
            },
            {
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colP": colorMarron
            },
            {
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colP_A": colorMarron,
                "colP_T": colorMarron
            },
            {
                "colB": colorBlanco,
                "colH3": colorMarron,
                "colA": colorMarron,
                "colP": colorMarron
            }
        ]
    }


]





var cont = 0

cafe_boton.addEventListener("click", () => {
    if (nav.style.display === "none") {
        nav.style.display = "flex";
        cafe_boton.style.display = "none";

    } else {
        nav.style.display = "none";
        navContenedor.style.background = "none";
    }
});

//SELECCIONAR CAFE
cafeHecho.addEventListener("click", () => {
    nav.style.display = "none";
    navContenedor.style.background = "none";
    cafe_boton.style.display = "flex";

    section_sobre.style.background = colores[cont].colores_sections[0].colB;
    section_sobre_h3.style.color = colores[cont].colores_sections[0].colH3;
    for (var x = 0; x < section_sobre_p.length; x++) {
        section_sobre_p[x].style.color = colores[cont].colores_sections[0].colP;
    }

    section_tecnologia.style.background = colores[cont].colores_sections[1].colB;
    section_tecnologia_h3.style.color = colores[cont].colores_sections[1].colH3;

    for (var x = 0; x < section_tecnologia_p.length; x++) {
        section_tecnologia_p[x].style.color = colores[cont].colores_sections[1].colP;
    }

    section_trabajo.style.background = colores[cont].colores_sections[2].colB;
    section_trabajo_h3.style.color = colores[cont].colores_sections[2].colH3;

    for (var x = 0; x < section_trabajo_p_anio.length; x++) {
        section_trabajo_p_anio[x].style.color = colores[cont].colores_sections[2].colP_A;
    }

    for (var x = 0; x < section_trabajo_p_texto.length; x++) {
        section_trabajo_p_texto[x].style.color = colores[cont].colores_sections[2].colP_T;
    }

    section_contacto.style.background = colores[cont].colores_sections[3].colB;
    section_contacto_h3.style.color = colores[cont].colores_sections[3].colH3;

    for (var x = 0; x < section_contacto_a.length; x++) {
        section_contacto_a[x].style.color = colores[cont].colores_sections[3].colA;
    }
    for (var x = 0; x < section_contacto_p.length; x++) {
        section_contacto_p[x].style.color = colores[cont].colores_sections[3].colP;
    }

    //Reproduce el sonido de la máquina
    reproducir.volume = 0.5;
    reproducir.play();
});

//MODIFICAR AL CAFE DE LA IZQUIERDA
cafeIzq.addEventListener("click", () => {
    if (cont == 0)
        cont = 3;
    else
        cont--;

    cafeHecho.style.backgroundImage = "url(\"" + cafes[cont].url + "\")";
    imagen_boton.style.backgroundImage = "url(\"" + cafes[cont].url + "\")";
    imagen_boton.onmouseover = function() {
        this.style.backgroundImage = "url(\"" + cafes[cont].url2 + "\")";
    }
    cafeHechoTitulo.textContent = cafes[cont].nombre;
});

//MODIFICAR AL CAFE DE LA DERECHA
cafeDer.addEventListener("click", () => {
    if (cont == 3)
        cont = 0;
    else
        cont++;

    cafeHecho.style.backgroundImage = "url(\"" + cafes[cont].url + "\")";

    imagen_boton.style.backgroundImage = "url(\"" + cafes[cont].url + "\")";
    imagen_boton.onmouseover = function() {
        this.style.backgroundImage = "url(\"" + cafes[cont].url2 + "\")";
    }
    cafeHechoTitulo.textContent = cafes[cont].nombre;
});