function calcularPositivo() {
    // Obtener valor del formulario
    var numeroNegativo = parseFloat(document.getElementById('negativeNumber').value);
  
    // Verificar si es un número negativo
    if (numeroNegativo < 0) {
      // Calcular el número positivo
      var numeroPositivo = Math.abs(numeroNegativo);
  
      // Mostrar resultado
      var resultado = `Número Negativo: ${numeroNegativo}<br>
                       Número Positivo: ${numeroPositivo}`;
  
      document.getElementById('result5').innerHTML = resultado;
    } else {
      alert("Por favor, ingrese un número negativo.");
    }
  }
  