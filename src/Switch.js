/**
 * switch se usa cuando hay varios posibles valores exactos para comparar.
 * Evalúa una expresión y ejecuta el bloque que coincida con un caso.
 * Se usa break para salir del bloque y evitar que siga ejecutando los demás casos.
 */


//nombres de los meses por su número
const numeroMes = 1

switch (numeroMes) {
    case 1:
        console.log("Enero")
        break;
    case 2:
        console.log("Febrero")
        break;
    case 3:
        console.log("Marzo")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Mayo")
        break;
    case 6:
        console.log("Junio")
        break;
    case 7:
        console.log("Julio")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Septiembre")
        break;
    case 10:
        console.log("Octubre")
        break;
    case 11:
        console.log("Noviembre")
        break;
    case 12:
        console.log("Diciembre")
        break;
    default:
        console.log("El valor ingresado no tiene un mes asignado")
        break;
}