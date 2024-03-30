<?php
// Obtener los datos del formulario de pedido
$nombreUsuario = $_POST['nombre_usuario'];
$direccionEnvio = $_POST['direccion_envio'];
$numeroTarjeta = $_POST['numero_tarjeta'];

// Cargar el contenido actual del archivo tienda.json
$tiendaJSON = file_get_contents('tienda.json');
$tiendaData = json_decode($tiendaJSON, true);

// Crear un nuevo objeto de pedido
$pedidoNuevo = array(
    "nombre_usuario" => $nombreUsuario,
    "direccion_envio" => $direccionEnvio,
    "numero_tarjeta" => $numeroTarjeta
);

// Agregar el nuevo pedido al arreglo de pedidos en tiendaData
$tiendaData['pedidos'][] = $pedidoNuevo;

// Guardar los datos actualizados en el archivo tienda.json
file_put_contents('tienda.json', json_encode($tiendaData, JSON_PRETTY_PRINT));

// Redirigir de vuelta a la página de checkout o a otra página de confirmación
header("Location: checkout.html");
exit();
?>
