function intercambiarVariables() {
    var variable1 = parseFloat(document.getElementById('variable1').value);
    var variable2 = parseFloat(document.getElementById('variable2').value);

    // Intercambiar valores usando una variable temporal
    var temp = variable1;
    variable1 = variable2;
    variable2 = temp;

    var resultado = `Variable 1 después del intercambio: ${variable1}<br>
                     Variable 2 después del intercambio: ${variable2}`;

    document.getElementById('result18').innerHTML = resultado;
}
