//Un metodo o funcion es un bloque de codigo que se ejecuta cuando se llama.
//funcion sin parametros
function sumar(){
    console.log(3+4);
}

//Llamado a la funcion.
sumar();

function sumarDos(numero1,numero2,numero3){
    console.log(numero1+numero2+numero3);
}

sumarDos(100,200,600);

function restar(numero1,numero2){
    var resultado = numero1 - numero2;
    return resultado;
}

var resultadoResta = restar(200,100);
console.log(resultadoResta);

//Funciones anonimas
let anonima = function(listoDepartamentos){
    console.log("Se ejecuto el bloque de codigo de la función anonima");
    document.write("<h1>Se ejecuto la funcion anonima</h1>");
    for (let index = 0; index < listoDepartamentos.length; index++) 
    {
        document.write("<h3>" + listoDepartamentos[index] + "</h3>");
    }
}

//Llamado a la funcion anonima
anonima(departamentos);

//Funciones arrow o funciones flecha

let funcionFlecha = () => {
    console.log("LLamado a la funcion flecha");
}
funcionFlecha();

let funcionFlechaParametros = (parametroUno,parametroDos) => {
    console.log("LLamado a la funcion flecha con parametros");
    console.log(parametroUno + parametroDos);
}

funcionFlechaParametros("Oscar","Julian");

//Funciones de autoinvocación;
(function(){
    console.log("Ejecute el bloque de la funcion de autoinvocacion");
})();


//Funciones de autoinvocación con parametros;
(function(parametroUno){
    console.log("Ejecute el bloque de la funcion de autoinvocacion " + parametroUno);
})("Oscar");




