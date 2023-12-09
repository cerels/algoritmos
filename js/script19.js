function calcularValorCentral() {
    var valorInicial = parseFloat(document.getElementById('initialValue').value);
    var valorFinal = parseFloat(document.getElementById('finalValue').value);

    var valorCentral = (valorInicial + valorFinal) / 2;

    var resultado = `Valor Central: ${valorCentral.toFixed(2)}`;

    document.getElementById('result19').innerHTML = resultado;
}
