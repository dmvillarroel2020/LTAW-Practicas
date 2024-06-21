document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pedidoId = urlParams.get('pedido_id');

    fetch('clientes.json')
        .then(response => response.json())
        .then(data => {
            const pedido = data[pedidoId];
            const pedidoDetalles = document.getElementById('pedidoDetalles');

            const direccionEnvio = document.createElement('p');
            direccionEnvio.textContent = `Dirección de Envío: ${pedido.direccion_envio}`;
            pedidoDetalles.appendChild(direccionEnvio);

            const contenidoCarrito = document.createElement('p');
            contenidoCarrito.textContent = `Contenido del Carrito: ${pedido.contenido_carrito}`;
            pedidoDetalles.appendChild(contenidoCarrito);

            const fechaPedido = document.createElement('p');
            fechaPedido.textContent = `Fecha del Pedido: ${pedido.fecha}`;
            pedidoDetalles.appendChild(fechaPedido);
        })
        .catch(error => console.error('Error fetching pedido:', error));
});
