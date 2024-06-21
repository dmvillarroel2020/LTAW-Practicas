document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const carrito = getCookie('productos'); // Asumiendo que el contenido del carrito está almacenado en una cookie llamada 'productos'
    
    if (carrito) {
        document.getElementById('contenido_carrito').value = carrito;
    }
    
    form.addEventListener('submit', function(event) {
        // Aquí podrías agregar validaciones adicionales si es necesario
    });
});

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}
