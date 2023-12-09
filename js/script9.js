function contarDivisibles() {
    var resultado = "Números divisibles por 6 hasta 200:<br>";

    // Conteo de 1 a 200 para divisibles por 6
    for (var i = 1; i <= 200; i++) {
        if (i % 6 === 0) {
            resultado += i + " ";
        }
    }

    resultado += "<br><br>Números divisibles por 8 de forma regresiva desde 200 hasta 20:<br>";

    // Conteo regresivo de 200 a 20 para divisibles por 8
    for (var j = 200; j >= 20; j--) {
        if (j % 8 === 0) {
            resultado += j + " ";
        }
    }

    document.getElementById('result9').innerHTML = resultado;
}
