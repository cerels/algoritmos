function calcularPromedioLista() {
    var numeros = generarNumerosAleatorios(20);
    var promedio = calcularPromedio(numeros);

    var resultado = `Números generados: ${numeros.join(', ')}<br>
                     Promedio de la Lista: ${promedio.toFixed(2)}`;

    document.getElementById('result21').innerHTML = resultado;
}

function generarNumerosAleatorios(cantidad) {
    var numeros = [];

    for (var i = 0; i < cantidad; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }

    return numeros;
}

function calcularPromedio(lista) {
    var suma = lista.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);

    return suma / lista.length;
}
