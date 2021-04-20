const cafe_boton = document.querySelector(".navbar-cafe");
const imagen_boton = document.querySelector(".gota-agua");

const nav = document.querySelector(".navbar-menu-cafe");
const navContenedor = document.querySelector(".navbar");
const cafeHecho = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cafe");
const cafeHechoTitulo = document.querySelector(".navbar-menu-cafe__parte-dinero h1");

const cafeIzq = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cambIzq");
const cafeDer = document.querySelector(".navbar-menu-cafe__parte-dinero__pantalla-cambDer");



const cafes = [
	{
		nombre: "EXPRESSO",
		url: "img/cafes/cafe-solo.png",
    url2:"img/cafes/cafe-solo2.png"
	},{
		nombre: "LATTE",
		url: "img/cafes/capuccino.png",
    url2:"img/cafes/capuccino-2.png"
	},{
		nombre: "IRLANDÉS",
		url: "img/cafes/irlandes.png",
    url2:"img/cafes/irlandes-2.png"
	},{
		nombre: "LECHE",
		url: "img/cafes/leche.png",
    url2:"img/cafes/leche-2.png"
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


cafeHecho.addEventListener("click", () => {  
  nav.style.display = "none";
  navContenedor.style.background = "none";
    cafe_boton.style.display = "flex";

    var reproducir = new Audio();
  reproducir.src= "audio/cafetera.mp3";
  reproducir.volume = 0.5;
    reproducir.play();
});

cafeIzq.addEventListener("click", () => {  
  if(cont==0)
      cont=3;
    else
      cont--;

  cafeHecho.style.backgroundImage = "url(\""+ cafes[cont].url + "\")";
  

  imagen_boton.style.backgroundImage = "url(\""+ cafes[cont].url + "\")";
  imagen_boton.onmouseover = function() {
 
    this.style.backgroundImage = "url(\""+ cafes[cont].url2 + "\")";
}


  cafeHechoTitulo.textContent = cafes[cont].nombre;
  
});

cafeDer.addEventListener("click", () => {  
  if(cont==3)
      cont=0;
    else
      cont++;

  cafeHecho.style.backgroundImage = "url(\""+cafes[cont].url+"\")";


  imagen_boton.style.backgroundImage = "url(\""+cafes[cont].url+"\")";
  imagen_boton.onmouseover = function() {
    this.style.backgroundImage = "url(\""+ cafes[cont].url2 + "\")";
  }
 

  cafeHechoTitulo.textContent = cafes[cont].nombre;
});
