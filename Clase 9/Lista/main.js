const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //Previene la actualizacion de la pagina cada que hago un submit

    const text = input.value.trim(); //Nos ayuda a quitar espacios al inicio y final de nuestro texto

    if(text === "" || text.length < 3){
        mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
        return;
    };

    const li = document.createElement("li");

    li.innerHTML = `${text} <button class=\"eliminar\">Eliminar</button>`;
    lista.appendChild(li);

    input.value = "";
});