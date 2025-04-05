/**
 * Operadores aritméticos: +, -, *, /, %
 * Comparación: ==, ===, !=, !==, >, <, >=, <=
 * Lógicos: &&, ||, !
 * Asignación: =, +=, -=, etc.
 */


let valor1 = "10"
let valor2 = 10

//comparacion no estricta
console.log(valor1 == valor2)

//comparacion estricta
console.log(valor1 === valor2)

//comparacion-desigualdad no estricta
console.log(valor1 != valor2)


//comparacion-desigualdad estricta
console.log(valor1 !== valor2)

console.log("--------------------------------------------------------")
//comparaciones booleanas
console.log(true && false)

console.log(true || false) 

console.log(true && (!false))

console.log("---------------------------------------------------")
let monto = 10

monto += 15
monto = (monto + 15)

monto -= 15
monto = (monto - 15)

monto *= 15
monto = (monto * 15)

monto /= 15
monto = (monto / 15)