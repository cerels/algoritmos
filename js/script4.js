function calcularPulsaciones() {
    // Obtener valores del formulario
    var edad = parseInt(document.getElementById('age').value);
    var sexo = document.getElementById('gender').value.toLowerCase(); // Convertir a minúsculas
  
    // Calcular número de pulsaciones
    var numPulsaciones = 0;
    if (sexo === 'femenino') {
      numPulsaciones = (220 - edad) / 10;
    } else if (sexo === 'masculino') {
      numPulsaciones = (210 - edad) / 10;
    }
  
    // Mostrar resultado
    var resultado = `Edad: ${edad}<br>
                     Sexo: ${sexo.charAt(0).toUpperCase() + sexo.slice(1)}<br>
                     Número de Pulsaciones: ${numPulsaciones.toFixed(2)}`;
  
    document.getElementById('result4').innerHTML = resultado;
  }
  