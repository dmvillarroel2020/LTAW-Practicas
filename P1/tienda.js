const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PUERTO = 7070;

// Rutas de los archivos HTML y CSS
const pagina_main_path = 'index.html';
const pagina_error_path = 'error.html';
const prod1_path = 'prod1.html';
const prod2_path = 'prod2.html';
const prod3_path = 'prod3.html';
const estilo_css_path = 'estilo.css';

// Ruta del directorio donde se encuentran las imágenes
const directorio_imagenes = 'imagenes';

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

    // Obtener la ruta del archivo solicitado
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
            // Verificar si se solicita una imagen
            if (req.url.startsWith(`/${directorio_imagenes}/`)) {
                filePath = path.join(__dirname, req.url);
            } else {
                // Si la ruta no coincide con ninguna de las anteriores, se asume un recurso no encontrado
                filePath = pagina_error_path;
            }
    }

    // Determinar el tipo de contenido en función de la extensión del archivo
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
    }

    // Servir el archivo correspondiente
    if (contentType.startsWith('text') || contentType === 'application/javascript') {
        // Archivos de texto o JavaScript
        const contenido = await leerArchivo(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(contenido);
    } else {
        // Archivos binarios (imágenes)
        servirArchivo(req, res, filePath, contentType);
    }
});

server.listen(PUERTO, () => {
    console.log(`Servidor en ejecución en el puerto ${PUERTO}`);
});
