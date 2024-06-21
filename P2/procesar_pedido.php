<?php
// Recibir datos del formulario
$direccion_envio = $_POST['direccion_envio'];
$numero_tarjeta = $_POST['numero_tarjeta'];
$contenido_carrito = $_POST['contenido_carrito'];

// Leer el contenido actual del archivo JSON
$filename = 'clientes.json';
$clientes = [];

if (file_exists($filename)) {
    $clientes = json_decode(file_get_contents($filename), true);
}

// Crear un nuevo pedido
$nuevo_pedido = [
    'direccion_envio' => $direccion_envio,
    'numero_tarjeta' => $numero_tarjeta,
    'contenido_carrito' => $contenido_carrito,
    'fecha' => date('Y-m-d H:i:s')
];

// Agregar el nuevo pedido al array de clientes
$clientes[] = $nuevo_pedido;

// Guardar los datos en el archivo JSON
file_put_contents($filename, json_encode($clientes, JSON_PRETTY_PRINT));

// Redirigir a la página de confirmación
header('Location: confirmacion_pedido.html');
exit();
?>
