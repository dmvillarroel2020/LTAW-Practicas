document.addEventListener('DOMContentLoaded', function() {
    fetch('clientes.json')
        .then(response => response.json())
        .then(data => {
            const ultimoPedido = data[data.length - 1];
            const pedidoDetalles = document.getElementById('pedidoDetalles');

            const direccionEnvio = document.createElement('p');
            direccionEnvio.textContent = `Dirección de Envío: ${ultimoPedido.direccion_envio}`;
            pedidoDetalles.appendChild(direccionEnvio);

            const contenidoCarrito = document.createElement('p');
            contenidoCarrito.textContent = `Contenido del Carrito: ${ultimoPedido.contenido_carrito}`;
            pedidoDetalles.appendChild(contenidoCarrito);

            const fechaPedido = document.createElement('p');
            fechaPedido.textContent = `Fecha del Pedido: ${ultimoPedido.fecha}`;
            pedidoDetalles.appendChild(fechaPedido);
        })
        .catch(error => console.error('Error fetching pedido:', error));
});
