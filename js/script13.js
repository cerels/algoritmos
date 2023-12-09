function contarDivisiblesYClasificar() {
    var a = 1;
    var resultado = "Números divisibles por 4 o 5 hasta 1500:<br>";

    while (a <= 1500) {
        if (a % 4 === 0 || a % 5 === 0) {
            resultado += `${a} - `;
            resultado += (a % 2 === 0) ? "Es par<br>" : "Es impar<br>";
        }
        a++;
    }

    document.getElementById('result13').innerHTML = resultado;
}
