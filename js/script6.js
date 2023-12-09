function convertirUnidades() {
    // Obtener valor del formulario
    var pesoKilogramos = parseFloat(document.getElementById('kilograms').value);
  
    // Calcular conversiones
    var pesoGramos = pesoKilogramos * 1000;
    var pesoToneladas = pesoKilogramos / 1000;
  
    // Mostrar resultado
    var resultado = `Peso en Kilogramos: ${pesoKilogramos} kg<br>
                     Peso en Gramos: ${pesoGramos} g<br>
                     Peso en Toneladas: ${pesoToneladas} ton`;
  
    document.getElementById('result6').innerHTML = resultado;
  }
  