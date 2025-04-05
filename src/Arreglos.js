/**
 * El for se usa para repetir instrucciones un número específico de veces.
 * Los arreglos (arrays) almacenan una colección ordenada de elementos.
 * Los elementos se acceden mediante un índice numérico, que empieza en 0.
 * Combinados, for + arrays permiten recorrer y procesar listas.
 */

const numeros = [4, 2, 6, 8, 3, 7, 2]
const frutas = ["Manzana", "Naranjas", "Peras"]
const materias = Array(3)
materias[0] = "Programación"
materias[1] = "Bases de datos"
materias[2] = "Ciberseguridad"

console.log(numeros)
console.log(frutas)
console.log(materias)

for (let index = 0; index <= frutas.length - 1; index++) {
    frutas[index] = frutas[index].toUpperCase();
    const element = frutas[index];
    console.log(element)
}

console.log(frutas)
console.log("--------------------------------------------")
for (const element of materias) {
    console.log(element)
}