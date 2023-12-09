function calcularDescuentoSupermercado() {
    // Obtener valores del formulario
    var numeroEscogido = parseInt(document.getElementById('randomNumber').value);
    var totalCompra = parseFloat(document.getElementById('totalPurchase').value);
  
     // Calcular descuento
  var descuento = 0;
  if (numeroEscogido <= 5) {
    descuento = 0.20; // 20%
  } else if (numeroEscogido <= 10) {
    descuento = 0.15; // 15%
  }
  
    // Calcular monto de descuento
    var montoDescuento = totalCompra * descuento;
  
    // Mostrar resultado
    var resultado = `Número Escogido: ${numeroEscogido}<br>
                     Total de la Compra: $${totalCompra.toFixed(2)}<br>
                     Descuento Aplicado: ${descuento * 100}%<br>
                     Monto de Descuento: $${montoDescuento.toFixed(2)}`;
  
    document.getElementById('result3').innerHTML = resultado;
  }
  