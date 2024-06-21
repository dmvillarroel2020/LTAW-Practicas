const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PUERTO = 5050;

// Rutas de los archivos HTML, CSS y JS
const pagina_main_path = 'index.html';
const pagina_error_path = 'error.html';
const prod1_path = 'prod1.html';
const prod2_path = 'prod2.html';
const prod3_path = 'prod3.html';
const estilo_css_path = 'estilo.css';

// Tipos de contenido
const tiposContenido = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
};

// Función para leer archivos
async function leerArchivo(path) {
    try {
        const contenido = await fs.readFile(path, 'utf-8');
        return contenido;
    } catch (error) {
        console.error(`Error al leer el archivo ${path}:`, error);
        return null;
    }
}

// Función para servir archivos estáticos (HTML, CSS, imágenes)
async function servirArchivo(req, res, filePath, contentType) {
    try {
        const contenido = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(contenido);
    } catch (error) {
        console.error(`Error al servir el archivo ${filePath}:`, error);
        res.writeHead(404, { 'Content-Type': 'text/html' });
        const contenidoError = await leerArchivo(pagina_error_path);
        res.end(contenidoError);
    }
}

const server = http.createServer(async (req, res) => {
    console.log("Petición recibida:", req.url);

    let filePath;
    switch (req.url) {
        case '/':
            filePath = pagina_main_path;
            break;
        case '/prod1.html':
            filePath = prod1_path;
            break;
        case '/prod2.html':
            filePath = prod2_path;
            break;
        case '/prod3.html':
            filePath = prod3_path;
            break;
        case '/estilo.css':
            filePath = estilo_css_path;
            break;
        default:
            // Verificar si se solicita un archivo de imagen
            filePath = path.join(__dirname, req.url);
    }

    const extname = path.extname(filePath);
    const contentType = tiposContenido[extname] || 'application/octet-stream';

    // Servir el archivo correspondiente
    servirArchivo(req, res, filePath, contentType);
});

server.listen(PUERTO, () => {
    console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});
