//Crear un elemento en nuestro Local Storage
localStorage.setItem("nombre", "ivan");

//Obtener un elemento del Local Storage
let value = localStorage.getItem("nombre");

console.log(value);
const elemento = document.getElementById("primer");
elemento.innerHTML = value;

//Eliminar un elemento del Local Storage
localStorage.removeItem("nombre");