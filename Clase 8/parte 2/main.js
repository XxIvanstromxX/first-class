let esAzul = false;

function alternarColor(){
    document.body.style.backgroundColor = esAzul ? "white" : "skyblue";
    esAzul = !esAzul;
}

document.getElementById("toggleColor").onclick = alternarColor;

const colorBoxes = document.querySelectorAll(".color-box");

const fondoOriginal = document.body.style.backgroundColor || "white";

function cambiarColor(color){
    document.body.style.backgroundColor = color;
}

function restaurarFondo(){
    document.body.style.backgroundColor = fondoOriginal;
}

colorBoxes.forEach(box => {
    box.addEventListener("mouseover", () =>{
        cambiarColor(box.style.backgroundColor);
        console.log(box.style.backgroundColor);
    });
    box.addEventListener("mouseout", restaurarFondo);
    console.log(document.body.style.backgroundColor);
});


const boton2 = document.getElementById("botonDos");

boton2.addEventListener("click", () =>{
    console.log("numero", boton2.value);
})
