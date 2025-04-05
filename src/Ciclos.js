/**
 * Bucle: ¿Cuándo se usa?
 * while: Cuando no sabemos cuántas veces repetir algo. La condición se evalúa antes de cada repetición.
 * do...while: Igual que while, pero siempre se ejecuta al menos una vez, ya que la condición se evalúa después.
 * for: Permite realizar iteraciones sobre sentencias una cantidad definida de veces
 */


const palabra = "JavaScript"
let vecesRepeticion = 11

while (vecesRepeticion <= 10) {
    console.log(palabra)
    vecesRepeticion++;
}

console.log(vecesRepeticion)

console.log("")
console.log("------------------------------------------------")

const palabraDoWhile = "Python"
let vecesRepeticionDoWhile = 11

do {
    console.log(palabraDoWhile)
    vecesRepeticionDoWhile++;
} while (vecesRepeticionDoWhile <= 10);
console.log(vecesRepeticionDoWhile)


console.log("")
console.log("------------------------------------------")

const tablaMultiplicar = 5
for (let index = 1; index <= 10; index++) {
    const producto = tablaMultiplicar * index
    console.log(`${tablaMultiplicar} x ${index} = ${producto}`)
}