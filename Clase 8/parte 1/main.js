
const input = document.getElementById("colorInput");

input.oninput = function(){
    document.body.style.backgroundColor = input.value;
};

input.onchange = function(){
    console.log(input.value);
}

