localStorage.setItem("nombre", "ivan");

let value = localStorage.getItem("nombre");

console.log(value);

const elemento = document.getElementById("primer");

elemento.innerHTML = value;

localStorage.removeItem("nombre");

let value2 = localStorage.getItem("nombre");
console.log(value2);