//Declaración de un arreglo
let frutas = ["Pera","Manzana","Uva","Naranja","Melon","Fresa"];

//Bucle for
console.log("Iterando desde un for")

for(let indice = 0; indice < frutas.length; indice++){
    console.log(frutas[indice]);
};

//forEach
console.log("Iterando desde un forEach")

frutas.forEach((fruta) => {
    console.log(fruta);
});