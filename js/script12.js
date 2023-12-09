function calcularTotalGanado() {
    // Obtener valores del formulario
    var salarioMensual = parseFloat(document.getElementById('monthlySalary').value);
    var diasTrabajados = parseInt(document.getElementById('workedDays').value);

    // Calcular salario diario
    var salarioDiario = salarioMensual / 30;

    // Calcular total ganado
    var totalGanado = salarioDiario * diasTrabajados;

    // Mostrar resultado
    var resultado = `Salario Mensual del Empleado: $${salarioMensual.toFixed(2)}<br>
                     Días Trabajados: ${diasTrabajados}<br>
                     Salario Diario: $${salarioDiario.toFixed(2)}<br>
                     Total Ganado: $${totalGanado.toFixed(2)}`;

    document.getElementById('result12').innerHTML = resultado;
}
