function realizarDescuentos() {
    // Obtener valor del formulario
    var salarioEmpleado = parseFloat(document.getElementById('salary').value);

    // Definir límite para el descuento
    var limiteSalario = 1200000;

    // Calcular descuentos solo si el salario es menor o igual al límite
    var descuentoPension = 0;
    var descuentoSalud = 0;

    if (salarioEmpleado <= limiteSalario) {
        // Porcentaje de descuento para pensión y salud
        var porcentajeDescuentoPension = 0.05; // 5%
        var porcentajeDescuentoSalud = 0.03;   // 3%

        // Calcular descuentos
        descuentoPension = salarioEmpleado * porcentajeDescuentoPension;
        descuentoSalud = salarioEmpleado * porcentajeDescuentoSalud;
    }

    // Mostrar resultado
    var resultado = `Salario del Empleado: $${salarioEmpleado.toFixed(2)}<br>
                     Descuento de Pensión: $${descuentoPension.toFixed(2)}<br>
                     Descuento de Salud: $${descuentoSalud.toFixed(2)}`;

    document.getElementById('result11').innerHTML = resultado;
}
