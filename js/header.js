const header = document.querySelector("header");
const gota_agua = document.querySelector(".gota-agua");


header.addEventListener("click", () => {
    gota_agua.style.display = "flex";
    header.addClass('header-desaparecer');
});

header.addEventListener('wheel', function() {
    gota_agua.style.display = "flex";
    header.style.display = "none";
});

header.special.swipe.handleSwipe