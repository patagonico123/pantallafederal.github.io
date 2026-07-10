/*
====================================================
 Pantalla Federal
 script.js
 Versión 0.3 - Menú Inteligente
====================================================
*/

const menu = [

{
    icono:"🇦🇷",
    titulo:"Explorar provincias",
    texto:"Conocé la televisión de cada rincón del país."
},

{
    icono:"⭐",
    titulo:"Canales destacados",
    texto:"Las señales más vistas."
},

{
    icono:"📡",
    titulo:"TV Pública",
    texto:"Canales nacionales y provinciales."
},

{
    icono:"🎓",
    titulo:"Universitarios",
    texto:"Universidades públicas argentinas."
},

{
    icono:"❤️",
    titulo:"Favoritos",
    texto:"Tus canales preferidos."
}

];

const contenido = document.getElementById("contenido");

const contenedor = document.createElement("div");

contenedor.className = "menu";

menu.forEach(item=>{

const tarjeta = document.createElement("div");

tarjeta.className="card";

tarjeta.innerHTML=`

<div class="icono">${item.icono}</div>

<h2>${item.titulo}</h2>

<p>${item.texto}</p>

`;

contenedor.appendChild(tarjeta);

});

contenido.appendChild(contenedor);
