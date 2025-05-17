function sumar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    console.log("El numero 1 es", numero1);
    console.log("El numero 2 es", numero2);

    let resultado = numero1 + numero2;
    console.log("El resultado es", resultado);

    document.getElementById("resultado").textContent = "Resultado de la suma es: " + resultado;
    console.log("La suma se hizo correctamente")
}

const resta = () => {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    
    let resultado = numero1 - numero2;

    document.getElementById("resultado").textContent = "Resultado de la resta es: " + resultado;
    console.log("La resta se hizo correctamente")
}