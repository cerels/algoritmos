function calcularSumaParesEImpares() {
    var sumaPares = 0;
    var sumaImpares = 0;

    for (var i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            // Número par
            sumaPares += i;
        } else {
            // Número impar
            sumaImpares += i;
        }
    }

    var resultado = `Suma de Números Pares: ${sumaPares}<br>
                     Suma de Números Impares: ${sumaImpares}`;

    document.getElementById('result20').innerHTML = resultado;
}
