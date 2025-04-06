const readline = require("readline-sync")


/**Una tienda quiere mostrar los precios finales de sus productos incluyendo el 21% de IVA. Crea
una función que reciba una lista de precios sin IVA y devuelva una nueva lista con los precios
actualizados.*/

let controlCiclo = true;
const precios = []

do {
    const precio = readline.questionFloat('Ingrese el precio del producto? ')
    precios.push(precio)

    const confirmacionNuevoPrecio = readline.question("Desea ingresar un nuevo precio? ")
    controlCiclo = confirmacionNuevoPrecio.toLowerCase() === "si";
} while (controlCiclo);


const quitarIva = preciosUsuario => preciosUsuario.map(precio => precio / 1.21)



console.log("precios con IVA", precios)
console.log("precios sin IVA", quitarIva(precios))