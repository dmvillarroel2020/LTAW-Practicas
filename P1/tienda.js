const http = require('http');
const fs = require('fs').promises; // Importar el módulo fs para leer archivos

const PUERTO = 9090;

// Rutas de los archivos HTML
const pagina_main_path = 'index.html';
const pagina_error_path = 'error.html';
const prod1_path = 'prod1.html';
const prod2_path = 'prod2.html';
const prod3_path = 'prod3.html';

// Función para leer archivos HTML
async function leerArchivoHTML(path) {
    try {
        const contenido = await fs.readFile(path, 'utf-8');
        return contenido;
    } catch (error) {
        console.error(`Error al leer el archivo ${path}:`, error);
        return null;
    }
}

const server = http.createServer(async (req, res) => {
    console.log("Petición recibida!");

    let code = 200;
    let code_msg = "OK";
    let page;

    const url = new URL(req.url, 'http://' + req.headers['host']);

    switch (url.pathname) {
        case '/':
            page = await leerArchivoHTML(pagina_main_path);
            break;
        case '/prod1.html':
            page = await leerArchivoHTML(prod1_path);
            break;
        case '/prod2.html':
            page = await leerArchivoHTML(prod2_path);
            break;
        case '/prod3.html':
            page = await leerArchivoHTML(prod3_path);
            break;
        default:
            code = 404;
            code_msg = "Not Found";
            page = await leerArchivoHTML(pagina_error_path);
    }

    res.statusCode = code;
    res.statusMessage = code_msg;
    res.setHeader('Content-Type', 'text/html');
    res.write(page || ''); // Si la página es null (no se pudo leer el archivo), envía una cadena vacía
    res.end();
});

server.listen(PUERTO);

console.log("Servidor en ejecución en el puerto:", PUERTO);
