function calcularDescuento1() {
    // Obtener valores del formulario
    var nombreProducto = document.getElementById('productName1').value;
    var claveProducto = document.getElementById('productKey1').value;
    var precioOriginal = parseFloat(document.getElementById('productPrice1').value);
  
    // Calcular descuento
    var descuento = 0;
    if (claveProducto === '01') {
      descuento = 0.10; // 10%
    } else if (claveProducto === '02') {
      descuento = 0.20; // 20%
    }
  
    // Calcular precio con descuento
    var precioConDescuento = precioOriginal - (precioOriginal * descuento);
  
    // Mostrar resultado
    var resultado = `Nombre del Producto: ${nombreProducto}<br>
                     Clave del Producto: ${claveProducto}<br>
                     Precio Original: $${precioOriginal.toFixed(2)}<br>
                     Precio con Descuento: $${precioConDescuento.toFixed(2)}`;
  
    document.getElementById('result1').innerHTML = resultado;
  }
  