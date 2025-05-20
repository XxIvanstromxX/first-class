
const input = document.getElementById("colorInput");

input.oninput = function(){
    document.body.style.backgroundColor = input.value;
};

const boton = document.addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
})