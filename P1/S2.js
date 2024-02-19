console.log('EJEMPLO 1: Hola mundo en Node.js')

/* Este es un ejemplo de comentario multilínea
   El objeto console está disponible directamente
   desde node.js, sin tener que importar nada */

//-- Imprimir un mensaje en la consola
console.log("¡Hola Mundo!");

console.log("");

console.log('EJEMPLO 2: variables y cómo imprimirlas')

//-- Variable numérica
let n = 3;

//-- Imprimir la variable directamente
console.log("Variable n: ", n);

//-- Valor de la variable dentro de una cadena
console.log(`Variable n: ${n} metros`);

//-- Concatenar la variable al mensaje
console.log("Variable n: " + n);

console.log("");

console.log('EJEMPLO 3: Ejemplo de bucles')

//-- Definiendo una constante: Número de mensajes
const N = 10; 

//-- Bucle para imprimir N mensajes
for (i = 0; i < N; i++) {
    console.log("Mensaje " + i);
}