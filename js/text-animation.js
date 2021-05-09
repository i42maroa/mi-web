"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const dataTitle = "ANTONIO MARÍN RODRÍGUEZ";
    const dataTitleText = "Ingeniero informático";

    const typeWriterH1 = (text, i) => {
        if (i < text.length) {
            if (i + 1 == text.length) {
                document.querySelector(".header-content h1").innerHTML =
                    text.substring(0, i + 1);
            } else { //quitar cursor
                document.querySelector(".header-content h1").innerHTML =
                    text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            }
            setTimeout(() => typeWriterH1(text, i + 1), 100);
        } else typeWriterH3(dataTitleText, 0);
    }

    const typeWriterH3 = (text, i) => {
        if (i < text.length) {
            document.querySelector(".header-content h2").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(() => typeWriterH3(text, i + 1), 100);
        }
    }

    typeWriterH1(dataTitle, 0);
})