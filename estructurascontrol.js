//Estructuras de control en javascript

var departamentos = ["Cundinamarca","Boyaca","Antioquia","Santander"];


//Ciclo for
for (let index = 0; index < departamentos.length; index++) 
{
    document.write("<h3>" + departamentos[index] + "</h3>");
}

//While

document.write("<h1>Inicio del ciclo while</h1>")

var contador = 0;

while (contador < departamentos.length) {
    document.write("<h3>" + departamentos[contador] + "</h3>");    
    contador++;
}

contador = 5;
// do while
do{
    console.log(departamentos[contador]);    
    contador++;
}while(contador < departamentos.length)

//switch

switch (contador) {
    case 1:   
        console.log("El contador esta en uno");
        break;
    case 2:
        console.log("El contador esta en dos");
        break;
    case 3:
        console.log("El contador esta en tres");
        break;
    case 6:
        console.log("El contador esta en seis");
        break;
    default:
        console.log("No encontre nada");
        break;
}

var nombreDepartamento = "BOYACA";

switch (nombreDepartamento) {
    case "BOYACA":
        console.log("El departamento es: " + nombreDepartamento);
        break;
    case "SANTANDER":
        console.log("El departamento es: " + nombreDepartamento);
        break;
    case "CUNDINAMARCA":
        console.log("El departamento es: " + nombreDepartamento);
        break;
    default:
        console.log("no encontre nombres de departamento");
        break;
}


