"use strict";

let pacmanAnimation = 0;
let navbarShow = false;


const visibilitySectionAbout = (entry) => {
    if (entry[0].isIntersecting) {
        document.querySelector(".section-about__img img").style.animation = "aparecerImage 1s forwards cubic-bezier(0, 0, 0.93, 0.14)";
        document.querySelector(".section-about__text h2").style.animation = "aparecerHead 0.8s forwards";
        document.querySelector(".section-about__text-principal p").style.animation = "aparecerText 0.5s 1s forwards";
        document.querySelector(".section-about__text-principal .more-info").style.animation = "aparecerText 0.5s 1.2s forwards";

        if (!navbarShow) {
            document.querySelector(".navbar-hidden__button").style.display = "flex";
            document.querySelector(".navbar-hidden__button").style.animation = "aparecer 0.5s forwards";
            navbarShow = false;
        } else {
            document.querySelector(".navbar-hidden__button").style.animation = "desaparecer 0.5s forwards";
            setTimeout(() => document.querySelector(".navbar-hidden__button").style.display = "none", 800);
            navbarShow = true;
        }
    }
}

const visibilitySectionSkills = (entry) => {
    if (entry[0].isIntersecting) {
        document.querySelector(".section-skills-image img").style.animation = "aparecerImage2 1s forwards cubic-bezier(0, 0, 0.93, 0.14) ";
        document.querySelector(".section-skills h2").style.animation = "aparecerHead 0.8s forwards ";
        document.querySelector(".section-skills__container-skills").style.animation = "aparecerText 0.5s 1s forwards ";
        document.querySelector(".section-skills .more-info").style.animation = "aparecerText 0.5s 1.2s forwards ";

    }
}

const visibilitySectionExperience = (entry) => {
    if (entry[0].isIntersecting && pacmanAnimation == 0) {
        document.querySelector("#section-experience h2").style.animation = "aparecerHead 0.8s forwards";

        const year = document.querySelectorAll(".section-experience-lifeline-year");
        year[0].style.animation = "aparecerText 1s forwards";
        year[2].style.animation = "aparecerText 1s 3.5s forwards";

        const achieve = document.querySelectorAll(".section-experience-lifeline-achieve");
        achieve[0].style.animation = "aparecerText 1s forwards";
        achieve[1].style.animation = "aparecerText 1s 1.5s forwards";
        achieve[2].style.animation = "aparecerText 1s 3.5s forwards";
        achieve[3].style.animation = "aparecerText 1s 5.5s forwards";

        const circulos = document.querySelectorAll(".section-experience-lifeline-tinyCircule, .section-experience-lifeline-Circule");
        circulos[0].style.animation = "desaparecer 0.3s forwards";
        circulos[1].style.animation = "desaparecer 0.3s 0.8s forwards";
        circulos[2].style.animation = "desaparecer 0.3s 1.5s forwards";
        circulos[3].style.animation = "desaparecer 0.3s 2.5s forwards";
        circulos[4].style.animation = "desaparecer 0.3s 3.5s forwards";
        circulos[5].style.animation = "desaparecer 0.3s 4.5s forwards";
        circulos[6].style.animation = "desaparecer 0.3s 5.5s forwards";

        setTimeout(() => {
            circulos[0].style.animation = "aparecer 0.5s  forwards";
            circulos[2].style.animation = "aparecer 0.5s  forwards";
            circulos[4].style.animation = "aparecer 0.5s forwards";
            circulos[6].style.animation = "aparecer 0.5s  forwards";
        }, 7000);

        document.querySelector(".pacman-holder").style.animation = "move 7s linear 1 forwards";
        pacmanAnimation++;

        if (!navbarShow) {
            document.querySelector(".navbar-hidden__button").style.display = "flex";
            document.querySelector(".navbar-hidden__button").style.animation = "aparecer 0.5s forwards";
            navbarShow = false;
        } else {
            document.querySelector(".navbar-hidden__button").style.animation = "desaparecer 0.5s forwards";
            setTimeout(() => document.querySelector(".navbar-hidden__button").style.display = "none", 800);
            navbarShow = true;
        }
    }
}

const visibilitySectionContact = (entry) => {
    if (entry[0].isIntersecting) {

        document.querySelector("#section-contact h2").style.animation = "aparecerHead 0.8s forwards ";

        const red = document.querySelectorAll(".section-contact_social-element");
        red[0].style.animation = "aparecerImage 0.8s 0.5s forwards cubic-bezier(0, 0, 0.93, 0.14)";
        red[1].style.animation = "aparecerImage 0.8s 0.5s forwards cubic-bezier(0, 0, 0.93, 0.14)";
        red[2].style.animation = "aparecerImage 0.8s 0.5s forwards cubic-bezier(0, 0, 0.93, 0.14)";

        const redP = document.querySelectorAll(".section-contact_social-element p");
        redP[0].style.animation = "aparecerText 0.5s 1s forwards";
        redP[1].style.animation = "aparecerText 0.5s 1s forwards";
        redP[2].style.animation = "aparecerText 0.5s 1s forwards";

        document.querySelector(".section-contact_button").style.animation = "aparecerText 1s 1s forwards ";

        document.querySelector("#section-contact p").style.animation = "aparecerText 1s 2s forwards ";
    }
}

const observerSectionAbout = new IntersectionObserver(visibilitySectionAbout, { threshold: 0.4 });
observerSectionAbout.observe(document.querySelector("#section-about"));

const observerSectionSkills = new IntersectionObserver(visibilitySectionSkills, { threshold: 0.4 });
observerSectionSkills.observe(document.querySelector("#section-skills"));

const observerSectionExperience = new IntersectionObserver(visibilitySectionExperience, { threshold: 0.4 });
observerSectionExperience.observe(document.querySelector("#section-experience"));

const observerSectionContact = new IntersectionObserver(visibilitySectionContact, { threshold: 0.4 });
observerSectionContact.observe(document.querySelector("#section-contact"));