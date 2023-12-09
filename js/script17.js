function calcularResiduoYCociente() {
    var dividendo = parseInt(document.getElementById('dividend').value);
    var divisor = parseInt(document.getElementById('divisor').value);

    if (divisor === 0) {
        document.getElementById('result17').innerHTML = "No se puede dividir por cero.";
        return;
    }

    var residuo = dividendo % divisor;
    var cociente = Math.floor(dividendo / divisor);

    var resultado = `Dividendo: ${dividendo}<br>
                     Divisor: ${divisor}<br>
                     Cociente: ${cociente}<br>
                     Residuo: ${residuo}`;

    document.getElementById('result17').innerHTML = resultado;
}
