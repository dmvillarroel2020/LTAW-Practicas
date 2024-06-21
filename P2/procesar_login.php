<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $direccion_envio = $_POST["direccion_envio"];
    $numero_tarjeta = $_POST["numero_tarjeta"];
    $contenido_carrito = $_POST["contenido_carrito"];

    // Crear un nuevo objeto de pedido
    $pedido = array(
        "nombre_usuario" => $_SESSION["nombre_usuario"], // Suponiendo que tienes una variable de sesión para el nombre de usuario
        "direccion_envio" => $direccion_envio,
        "numero_tarjeta" => $numero_tarjeta,
        "productos" => $contenido_carrito
    );

    // Obtener los datos actuales del archivo tienda.json
    $tienda_json = file_get_contents('tienda.json');
    $tienda_data = json_decode($tienda_json, true);

    // Agregar el nuevo pedido a la lista de pedidos
    $tienda_data["pedidos"][] = $pedido;

    // Guardar los datos actualizados en tienda.json
    file_put_contents('tienda.json', json_encode($tienda_data));

    // Redirigir a la página de revisión de pedido
    header("Location: revision_pedido.html");
    exit;
} else {
    // Si el formulario no ha sido enviado, redirigir a otra página o mostrar un mensaje de error
    header("Location: error.html");
    exit;
}
?>
