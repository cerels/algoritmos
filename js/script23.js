function verificarMultiplosDeTres() {
    var numerosImpares = [];
    var numeroActual = 10;

    while (numerosImpares.length < 5) {
        if (numeroActual % 2 !== 0) {
            // Agregar número impar a la lista
            numerosImpares.push(numeroActual);
        }
        numeroActual++;
    }

    var sonMultiplosDeTres = numerosImpares.map(function (numero) {
        return `${numero} - ${numero % 3 === 0 ? 'Sí' : 'No'}`;
    });

    var resultado = `Cinco primeros números impares:<br>${sonMultiplosDeTres.join('<br>')}`;

    document.getElementById('result23').innerHTML = resultado;
}
