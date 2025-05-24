const form = document.querySelector("#formulario");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");
const mensaje = document.querySelector("#mensaje");
const boton = document.getElementById("agregarBoton");

let tareas = [];

if(localStorage.getItem("tareas")){
    tareas = JSON.parse(localStorage.getItem("tareas"));

    mostrarTareas();
};

form.addEventListener("submit", (e)=>{
    e.preventDefault();
})

boton.addEventListener("click", () =>{
    let tarea = input.value.trim();

    if(tarea === "" || tarea.length < 3){
        mensaje.innerHTML = "Ingresa una tarea valida (mínimo 3 caracteres)";
        return;
    };
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
    input.value = "";
});

function mostrarTareas(){
    lista.innerHTML = "";

    tareas.forEach((tarea, index) =>{
        let li = document.createElement("li");
        li.innerHTML = `${tarea} <button class=\"eliminar\">Eliminar</button>`;
        lista.appendChild(li);
    })
};