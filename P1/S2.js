console.log('EJEMPLO 1: Hola mundo en Node.js')

/* Este es un ejemplo de comentario multilínea
   El objeto console está disponible directamente
   desde node.js, sin tener que importar nada */

//-- Imprimir un mensaje en la consola
console.log("¡Hola Mundo!");


//-- --------------------------------------------


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


//-- --------------------------------------------


console.log("");
console.log('EJEMPLO 3: Ejemplo de bucles')

//-- Definiendo una constante: Número de mensajes
const N = 10; 

//-- Bucle para imprimir N mensajes
for (i = 0; i < N; i++) {
    console.log("Mensaje " + i);
}


//-- --------------------------------------------


console.log("");
console.log('EJEMPLO 4: Objetos literales')

//-- Definiendo un objeto con varias propiedades y valores
const objeto1 = {
    nombre: "Objeto-1",
    valor: 10,
    test: true
};

//-- Imprimiendo las propiedades del objeto
console.log("Nombre: " + objeto1.nombre);
console.log("Valor: " + objeto1.valor);
console.log("Test: " + objeto1.test);

//-- También te puedes referir a las propiedades
//-- usando su nombre entre comillas
console.log("");
console.log("Nombre: " + objeto1["nombre"]);
console.log("Valor: " + objeto1["valor"]);
console.log("Test: " + objeto1["test"]);

//-- Comprobar si un objeto tiene una propiedad
if ("test" in objeto1) {
    console.log("\nTiene propiedad test");
}

//-- Recorrer todas las propiedades
console.log("");
for (prop in objeto1) {
    console.log(`Propiedad: ${prop} --> Valor: ${objeto1[prop]}`);
}

//-- Forma abreviada para obtener constantes
//-- con las propiedades del objeto
const { valor, nombre } = objeto1;

console.log("");
console.log("Nombre: " + nombre);
console.log("Valor: " + valor);


//-- --------------------------------------------


console.log("");
console.log('EJEMPLO 5: Arrays literales')

//-- Ejemplo de arrays literales

//-- Crear una lista (array) de 4 elementos
const a = [1,3,5,7];

//-- Mostrar el elemento 3
console.log("Elemento 3: " + a[2]);

//-- Recorrer todos los elementos
for (i in a) {
    console.log(`a[${i}] = ${a[i]}`);
}

//-- Imprimir el numero total de elementos
console.log("Cantidad de elementos: " + a.length);


//-- --------------------------------------------


console.log("");
console.log('EJEMPLO 6: Funciones')

//-- Ejemplo de definicion de funciones

//-- Se definen 4 funciones sin parámetros
//-- de diferentes formar

//-- Definición clásica
function mi_funcion1() {
    console.log("Mi funcion 1!!");
}

//-- Se define una función y se asigna a una variable
const mi_funcion2 = function() {
    console.log("Mi funcion2....");
}

//-- Otra forma de hacer lo anterior, pero con una
//-- notación abreviada
const mi_funcion3 = () => {
    console.log("Mi funcion3....")
}

//-- Definición de funciones dentro de un 
//-- objeto literal
const b = {
    x : 10,
    f4 : function() {
        console.log("Mi funcion4!!!");
    },
    f5: () => {
        console.log("Mi funcion 5!!!");
    }
}

//-- Llamando a las funciones
mi_funcion1()
mi_funcion2()
mi_funcion3()
b.f4()
b.f5()

//-- --------------------------------------------


console.log("");
console.log('EJEMPLO 7: Paso de parámetros')

//-- Ejemplo de paso de parametros a funciones

//-- Recibe dos parámetros y devuelve su suma
function suma(x,y) {
    //-- devolver la suma
    return x+y;
  }
  
  //-- Recibe un parámetro y lo imprime por la consola
  function mensaje(msg) {
    console.log(msg);
  }
  
  //-- Funcion que no recibe parametros
  function saluda() {
      mensaje("HOLA!!");
  }
  
  //-- Funcion que recibe una funcion como parametro
  //-- y simplemente la llama 
  function call(func) {
    console.log("--> Funcion recibida");
  
    //-- Llamar a la funcion pasada como argumento
    func();
  }
  
  //-- Llamar a suma
  let c = suma(2,3);
  
  //-- Probando la funcione mensaje
  mensaje("Prueba")
  mensaje(c);
  
  //-- Probando la funcion call
  call(saluda);
  
  //-- Se le pasa como parametro una funcion
  //-- que se define dentro de los parametros, vez de 
  //-- fuera
  call( () => {
    mensaje("HOLI!!")
  });


//-- --------------------------------------------


console.log("");
console.log('Temporizadores')

//-- Ejemplo de uso de un temporizador

//-- Función a ejecutar tras un tiempo
//-- Función de retrollamada del temporizador
function tarea1() {
    console.log("Tarea 1 completada!");
}


//-- Llamada retardada mediante temporizador
//-- Cuando transcurran 1000 ms se llama a la función tarea 1
setTimeout(tarea1, 1000);

//-- Esta estructura también es muy típica: incluir la función 
//-- de retrollamada directamente en el parémtro, en vez de definirla
//-- fuera
setTimeout( () => {
    console.log("Tarea 2 completada!");
}, 2000);

console.log("Esperando a que terminen las tareas");

//-- Esta función de retrollamada se invoca cada 200ms
//-- Se guarda su identificador en la variable id par
//-- poder quitar el temporizador con ClearInterval 
let id = setInterval( () => {
    console.log("Tic...");
}, 200 );

//-- Al cabo de 3 segundos se desactiva el temporizador
setTimeout( ()=> {
  clearInterval(id)
  console.log("Stop!");
}, 3000);