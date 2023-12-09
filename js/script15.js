function calcularPotenciasYSuma() {
    var potencias = calcularPotenciasDeTres(30);
    var sumaPotencias = calcularSumaPotencias(potencias);

    var resultado = `Potencias de 3: ${potencias.join(', ')}<br>
                     Suma de las Potencias: ${sumaPotencias}`;

    document.getElementById('result15').innerHTML = resultado;
}

function calcularPotenciasDeTres(cantidad) {
    var potencias = [];

    for (var i = 0; i < cantidad; i++) {
        potencias.push(Math.pow(3, i));
    }

    return potencias;
}

function calcularSumaPotencias(potencias) {
    return potencias.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);
}
