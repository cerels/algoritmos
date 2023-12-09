function calcularCostoGalletas() {
    // Obtener valor del formulario
    var cantidadGalletas = parseInt(document.getElementById('quantity').value);

    // Precio y cantidad por paquete
    var precioPorPaquete = 3500;
    var cantidadPorPaquete = 15;

    // Calcular costo total
    var costoTotal = (cantidadGalletas / cantidadPorPaquete) * precioPorPaquete;

    // Mostrar resultado
    var resultado = `Cantidad de Galletas: ${cantidadGalletas}<br>
                     Costo Total: $${costoTotal.toFixed(2)}`;

    document.getElementById('result7').innerHTML = resultado;
}
