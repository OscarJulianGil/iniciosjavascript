console.log("Aca inicia el archivo segunda clase.");

//Con typeof, podemos identificar el tipo de dato
//de una variable.

var numeroTres = 3;
numeroTres = "3";
//numeroTres = true;
console.log(typeof numeroTres);

if(typeof numeroTres == "number"){
    console.log("Es un numero");
}
else{
    console.log("No es un numero");
}

//Arrays

//Inicializamos un array en javascript
var myArray = [];
var otroArray = ["Nissan","Toyota","Mazda","Chevrolet","Volvo"];
const tercerArray = ["Pedro","Juan","Pepito"];
console.log(typeof otroArray);
console.log(otroArray[0]);
console.log(otroArray[1]);
console.log(otroArray[2]);
console.log(otroArray[3]);

var municipios = new Array("choconta","chia","cota");
console.log("El tipo de municipios es: " + typeof municipios);

//Sobreescribir el dato de un indice
otroArray[0] = "Ferrari";

//DOM
document.write("<h2>" + otroArray[0] +"</h2>");
document.write("<h2>" + otroArray[1] +"</h2>");
document.write("<h2>" + otroArray[2] +"</h2>");
document.write("<h2>" + otroArray[3] +"</h2>");

//Como obtener la longitud;
console.log("El array tiene : " + otroArray.length);

//Como adicionar un nuevo item a un array creado.
otroArray.push("BMW");

//Como obtener la longitud;
console.log("El array tiene : " + otroArray.length);










