// Es un comentario de linea simple
/*
   Este es un comentario de 
   multiples lineas
   en javascript.
*/

//Variables
var miEdad = 34
let edadMama  = "55";
var PI = 3.1516;

var _correo;
var $direccion;
var mi_celular;

//Constante
const mes = 10;

//Operadores aritmeticos

var numeroUno = 10;
var numeroDos = 20;
console.log(numeroUno + numeroDos);
console.log(numeroUno - numeroDos);
console.log(numeroUno * numeroDos);
console.log(numeroDos ** 3);
console.log(numeroDos / numeroUno);
console.log(numeroDos % numeroUno);

// Cadenas de texto;
var nombres = "Oscar Julian";
let apellidos = 'Gil Bernal';

console.log(nombres);
console.log(apellidos);

//Booleanos
var bandera = true;
var otraBandera = false;

// undefined
var correoElectronico;
console.log(correoElectronico);

// Concatenación
console.log(nombres + " " + apellidos);

//Operadores de incremento y decremento
numeroUno++;
numeroUno++;
numeroUno--;

console.log(numeroUno);

//Operadores de igualdad
var miNumeroCel = 12312321;

//Igual
if(miNumeroCel == 12312321){}
//Diferente
else if(miNumeroCel != 12312321){}
//Mayor que
else if(miNumeroCel > 1){}
//Menor que
else if(miNumeroCel < 1){}
// Menor o igual que
else if(miNumeroCel <= 1){}
// Mayor o igual que
else if(miNumeroCel >= 1){}

//Operador ternario
var dato = miNumeroCel == 10 ? "bien"  :  "mal";
console.log(dato);

// if - else if -else
//And logico
if(miNumeroCel == 12312321 && numeroUno < 1){
    //Aca va codigo
    console.log("Ejecuto el if");
}
else if(miNumeroCel < 10){
    //Aca va codigo
    console.log("Ejecuto el else if");
}
else{
    //Aca va codigo
    console.log("Ejecuto el else");
}

//OR logico

if(miNumeroCel == 12312321 || numeroUno < 1){
    //Aca va codigo
    console.log("Ejecuto el if");
}
else if(miNumeroCel < 10){
    //Aca va codigo
    console.log("Ejecuto el else if");
}
else{
    //Aca va codigo
    console.log("Ejecuto el else");
}

var bandera = true;
//Operador de inversion o negacion
if(!bandera){
    //Aca va codigo
    console.log("Ejecuto el if bandera");
}
else{
    console.log("Ejecuto el else bandera");
}












