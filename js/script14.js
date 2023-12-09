function sumarMultiplosDeTres() {
    var numeros = generarNumerosAleatorios();
    var sumaMultiplosTres = 0;

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 === 0) {
            sumaMultiplosTres += numeros[i];
        }
    }

    var resultado = `Números generados: ${numeros.join(', ')}<br>
                     Suma de múltiplos de 3: ${sumaMultiplosTres}`;

    document.getElementById('result14').innerHTML = resultado;
}

function generarNumerosAleatorios() {
    var numeros = [];

    for (var i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }

    return numeros;
}
