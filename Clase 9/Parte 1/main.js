//querySelector
const titulo = document.querySelectorAll(".titulo")

console.log("El elemento seleccionado es: " + titulo[2].textContent);

//innerHTML
titulo[0].innerHTML = "Hola desde JavaScript"

titulo[1].innerHTML = "<strong>Cambie el contenido desde JS</strong>"


const cuadrado = document.querySelector(".cuadrado");

//Estilos
cuadrado.style.backgroundColor = "green";
cuadrado.style.width = "100px"
cuadrado.innerHTML = "<p>Soy un cuadrado</p>"
cuadrado.style.color = "white"


const cuadrado2 = document.getElementById("cuadrado2");

//Agregar clases
cuadrado2.classList.add("color");


const boton = document.getElementById("quitar");

//Eliminar clases
const eliminar = () => {
    cuadrado2.classList.remove("color");
}

boton.addEventListener("click", eliminar);

boton.addEventListener("click", () =>{
    console.log("Hola desde el evento");
});


//Crear elementos
const body = document.querySelector("body");

const elemento = document.createElement("ul")

elemento.classList.add("lista")

//Agregar elementos al DOM
body.appendChild(elemento);

const elementoLi = document.createElement("li");
const elementoLi2 = document.createElement("li");

elementoLi.textContent = "Elemento de la lista";
elementoLi2.textContent = "Elemento de la lista 2";

elemento.appendChild(elementoLi);
elemento.appendChild(elementoLi2);

//Eliminar elementos del DOM
elementoLi.remove();
