function calcularNumerosImparesPrecedentes() {
    var targetNumber = parseInt(document.getElementById('targetNumber').value);

    if (isNaN(targetNumber)) {
        document.getElementById('result22').innerHTML = "Por favor, ingrese un número válido.";
        return;
    }

    var numerosImpares = [];
    var numeroActual = targetNumber - 1; // Comenzar con el número precedente

    while (numerosImpares.length < 5) {
        if (numeroActual % 2 !== 0) {
            // Agregar número impar a la lista
            numerosImpares.push(numeroActual);
        }
        numeroActual--;
    }

    var resultado = `Número N: ${targetNumber}<br>
                     5 Primeros Números Impares Precedentes: ${numerosImpares.reverse().join(', ')}`;

    document.getElementById('result22').innerHTML = resultado;
}
