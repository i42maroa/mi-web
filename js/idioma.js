"use strict"

const len_pred = "Espaniol";
let cont_leng = [];


const uploadContentLenguages = async(documentUrl) => {
    await fetch(documentUrl)
        .then((res) =>
            res.json())
        .then((res) => {
            cont_leng = res.language;
        }).then(() => changeLenguage(len_pred))
        .catch((e) => console.log(e))
}

uploadContentLenguages("../content/page-content.json");

const changeLenguage = (leng) => {
    let numI = 0;
    if (leng == cont_leng[0].name) numI = 0;
    else if (leng == cont_leng[1].name) numI = 1;

    document.querySelector(".header-content h2").textContent = cont_leng[numI].header;
    changeSectionNavbar(cont_leng[numI]);
    changeSectionAbout(cont_leng[numI].sections[0]);
    changeSectionSkills(cont_leng[numI].sections[1]);
    changeSectionExperience(cont_leng[numI].sections[2]);
    changeSectionContact(cont_leng[numI].sections[3]);
}

const changeSectionNavbar = (content) => {
    const navbar = document.querySelectorAll(".navbar-menu-sections-element p");
    navbar[0].textContent = content.sections[0].h2;
    navbar[1].textContent = content.sections[1].h2;
    navbar[2].textContent = content.sections[2].h2;
    navbar[3].textContent = content.sections[3].h2;
}

const changeSectionAbout = (content) => {
    document.querySelector(".section-about__text h2").textContent = content.h2;
    document.querySelector(".section-about__text-principal p").textContent = content.textPrincipal;

    document.querySelector(".section-about__text-principal .more-info").textContent = content.moreInfo;

    const pAbout = document.querySelectorAll(".section-about__text-secondary p");
    pAbout[0].textContent = content.p_0;
    pAbout[1].textContent = content.p_1;
    pAbout[2].textContent = content.p_2;
    pAbout[3].textContent = content.p_3;
    pAbout[4].textContent = content.p_4;
}

const changeSectionSkills = (content) => {
    document.querySelector(".section-skills h2").textContent = content.h2;

    const pH3 = document.querySelectorAll(".section-skills__container-skills-element h3");
    pH3[0].textContent = content.h3_0;
    pH3[1].textContent = content.h3_1;
    pH3[2].textContent = content.h3_2;
    pH3[3].textContent = content.h3_3;

    document.querySelector(".section-skills .more-info").textContent = content.moreInfo;
}

const changeSectionExperience = (content) => {
    document.querySelector("#section-experience h2").textContent = content.h2;

    const pH3 = document.querySelectorAll(".section-experience-lifeline-achieve");
    pH3[0].textContent = content.h3_0;
    pH3[2].textContent = content.h3_1;

    const pH4 = document.querySelectorAll(".section-experience-lifeline-achieve-show h4");
    pH4[0].textContent = content.h4_0;
    pH4[1].textContent = content.h4_1;

    const more = document.querySelectorAll(".section-experience-lifeline-achieve-show h5");
    more[0].textContent = content.moreInfo;
    more[1].textContent = content.moreInfo;
}

const changeSectionContact = (content) => {
    document.querySelector("#section-contact h2").textContent = content.h2;

    document.querySelector("#section-contact p").textContent = content.p;
}


document.querySelector(".button-lenguage-es").addEventListener("click", () => {
    changeLenguage("Espaniol");
})

document.querySelector(".button-lenguage-en").addEventListener("click", () => {
    changeLenguage("English");
})