/**
 * Una función es un bloque de código reutilizable que puede recibir datos (parámetros) y devolver un resultado (return).
 * Un procedimiento es una función que no devuelve resultado, solo ejecuta instrucciones (sin return).
 * JavaScript permite crear funciones de varias formas: declaradas, expresadas y flecha (arrow).
 */


//Funciones declaradas
//procedimiento
function sumar(valor1, valor2){
    const suma = valor1 + valor2;
    console.log(`La suma es ${suma}`)
}

//funcion
function restar(valor1, valor2){
    const resta = valor1 - valor2
    return resta
}

const restarDeclarada = (valor1, valor2) => {
    const resta = valor1 - valor2
    return resta
}

const resultadoSuma = sumar(5, 10)
console.log(`El resultado de la funcion sumar es ${resultadoSuma}`)

const resultadoResta = restar(100, 25)
console.log(`El resultado de la resta es ${resultadoResta}`)

//funciones expresadas
const multiplicar = (valor1, valor2) => {
    return valor1 * valor2
}

const resultadoMultiplicar = multiplicar(25, 25)
console.log(`El resultado de la multiplicación es ${resultadoMultiplicar}`)