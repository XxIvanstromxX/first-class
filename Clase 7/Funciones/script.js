//Estructura basica de una función
/*
function nombreFuncion(parametros){
    //Codigo a ejecutar
}

nombreFuncion(12);
*/

//Funcion sin parametros
function saludar(){
    console.log("Hola, programadores");
}

saludar();


//Funcion con parametros (recive valores)
function sumar(a, b){
    console.log("La suma es: ", a + b);
}

sumar(12, 9);

//Funcion con retorno de valores
function multiplicar(a, b){
    let multi = a * b;

    return multi;
}

let resultado = multiplicar(4, 3);
console.log("El resultado de la multiplicacion es: ", resultado)

//Funciones de flecha (Arrow Functions)
const sumarFlecha = (a, b) => a + b;

let resultadoSumaFlecha = sumarFlecha(24, 32);

console.log("La suma en flecha es igual a: ",resultadoSumaFlecha)