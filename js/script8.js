function calcularCostoCuadernos() {
    // Obtener valor del formulario
    var cantidadCuadernos = parseInt(document.getElementById('quantityNotebooks').value);

    // Precio y cantidad por paquete
    var precioPorPaquete = 75000;
    var cantidadPorPaquete = 15;

    // Calcular costo total
    var costoTotal = (cantidadCuadernos / cantidadPorPaquete) * precioPorPaquete;

    // Mostrar resultado
    var resultado = `Cantidad de Cuadernos: ${cantidadCuadernos}<br>
                     Costo Total: $${costoTotal.toFixed(2)}`;

    document.getElementById('result8').innerHTML = resultado;
}
