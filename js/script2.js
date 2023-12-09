function calcularTotalPagar() {
    // Obtener valores del formulario
    var cantidadCamisas = parseInt(document.getElementById('shirtQuantity').value);
    var precioCamisa = 25000;
  
    // Calcular descuento
    var descuento = 0;
    if (cantidadCamisas >= 3) {
      descuento = 0.20; // 20%
    } else {
      descuento = 0.10; // 10%
    }
  
    // Calcular total a pagar
    var totalPagar = cantidadCamisas * precioCamisa - (cantidadCamisas * precioCamisa * descuento);
  
    // Mostrar resultado
    var resultado = `Cantidad de Camisas: ${cantidadCamisas}<br>
                     Precio por Camisa: $${precioCamisa.toFixed(2)}<br>
                     Descuento Aplicado: ${descuento * 100}%<br>
                     Total a Pagar: $${totalPagar.toFixed(2)}`;
  
    document.getElementById('result2').innerHTML = resultado;
  }
  