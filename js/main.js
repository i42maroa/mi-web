"use strict";

const elements_projects = document.querySelectorAll(".project_list .card");


elements_projects.forEach(element => {  
    element.addEventListener("click", () => element.querySelector(".card_content").style.display = "flex");
})