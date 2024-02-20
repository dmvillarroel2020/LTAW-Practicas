const http = require('http');

const PUERTO = 9090;

//-- Texto HTML
const pagina = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Happy Server!</title>
</head>
<body style="background-color: lightblue">
    <h1 style="color: green">HAPPY SERVER!!!</h1>
</body>
</html>
`

const server = http.createServer((req, res) => {

    console.log("Petición recibida")
  
    //-- Generar respuesta
    //-- Código: Error. No encontrado
    res.statusCode = 404;
    res.statusMessage = "Not Found :-(";
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el ANGRY Server\n");
    res.end()
  
  });

server.listen(PUERTO);

console.log("SERVIDOR TIENDA DE CAMISETAS DE FÚTBOL. Escuchando en puerto: " + PUERTO);