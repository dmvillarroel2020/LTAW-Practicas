const http = require('http');

//-- Definir el puerto a utilizar
const PUERTO = 8070;

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("Petición recibida!");

  //-- Enviar una respuesta:. Siempre es la misma respuesta
  //-- Con el método res.write() se escribe el mensaje en el 
  //-- cuerpo de la respuesta
  res.write("Soy el Happy server!!\nFunciona correctamente");

  //-- Terminar la respuesta y enviarla
  res.end();
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Happy server activado!. Escuchando en puerto: " + PUERTO);  //-- Enviar una respuesta:. Siempre es la misma respuesta  //-- Enviar una respuesta:. Siempre es la misma respuesta