/**
 * Se usa if para tomar decisiones basadas en condiciones lógicas.
 * Podemos agregar múltiples condiciones con else if.
 * Con else definimos qué hacer si ninguna condición se cumple.
 */

//somos mayores de edad
const edad = 17

if (edad >= 18) {
    console.log(`Usted es mayor de edad, ya que su edad es: ${edad}`)
} else {
    console.log(`Usted no es mayor de edad, ya que su edad es: ${edad}`)
}

console.log("")
console.log("------------------------------------------------")

//notas
const nota = 55

if (nota <= 100 && nota >= 70){
    console.log(`Su nota es ${nota}, usted tiene una calificación sobresaliente!`)
} else if (nota < 70 && nota >= 61) {
    console.log(`Su nota es ${nota}, usted ha aprobado!`)
} else if (nota < 61 && nota >= 50) {
    console.log(`Su nota es ${nota}, usted ha reprobado y tiene derecho a recuperación`)
} else {
    console.log(`Su nota es ${nota}, usted ha reprobado y no tiene derecho a recuperación`)
}