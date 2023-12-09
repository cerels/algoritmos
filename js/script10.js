function calcularEdadYComparar() {
    // Obtener valores del formulario para Persona 1
    var nombrePersona1 = document.getElementById('namePerson1').value;
    var diaNacimientoPersona1 = parseInt(document.getElementById('dayOfBirthPerson1').value);
    var mesNacimientoPersona1 = parseInt(document.getElementById('monthOfBirthPerson1').value);
    var añoNacimientoPersona1 = parseInt(document.getElementById('yearOfBirthPerson1').value);

    // Obtener valores del formulario para Persona 2
    var nombrePersona2 = document.getElementById('namePerson2').value;
    var diaNacimientoPersona2 = parseInt(document.getElementById('dayOfBirthPerson2').value);
    var mesNacimientoPersona2 = parseInt(document.getElementById('monthOfBirthPerson2').value);
    var añoNacimientoPersona2 = parseInt(document.getElementById('yearOfBirthPerson2').value);

    // Obtener la fecha actual
    var fechaActual = new Date();
    var añoActual = fechaActual.getFullYear();
    var mesActual = fechaActual.getMonth() ;
    var diaActual = fechaActual.getDate();

    // Calcular la cantidad total de días vividos para Persona 1
    var fechaNacimientoPersona1 = new Date(añoNacimientoPersona1, mesNacimientoPersona1 - 1, diaNacimientoPersona1);
    var diferenciaDiasPersona1 = Math.floor((fechaActual - fechaNacimientoPersona1) / (1000 * 60 * 60 * 24));

    // Calcular la cantidad total de días vividos para Persona 2
    var fechaNacimientoPersona2 = new Date(añoNacimientoPersona2, mesNacimientoPersona2 - 1, diaNacimientoPersona2);
    var diferenciaDiasPersona2 = Math.floor((fechaActual - fechaNacimientoPersona2) / (1000 * 60 * 60 * 24));

    // Convertir días a años, meses y días
    var añosPersona1 = Math.floor(diferenciaDiasPersona1 / 365);
    var mesesRestantesPersona1 = Math.floor((diferenciaDiasPersona1 % 365) / 30);
    var diasRestantesPersona1 = (diferenciaDiasPersona1 % 365) % 30;

    var añosPersona2 = Math.floor(diferenciaDiasPersona2 / 365);
    var mesesRestantesPersona2 = Math.floor((diferenciaDiasPersona2 % 365) / 30);
    var diasRestantesPersona2 = (diferenciaDiasPersona2 % 365) % 30;

    // Mostrar resultado
    var resultado = `Edad de ${nombrePersona1}: ${añosPersona1} años, ${mesesRestantesPersona1} meses y ${diasRestantesPersona1} días<br>
                     Edad de ${nombrePersona2}: ${añosPersona2} años, ${mesesRestantesPersona2} meses y ${diasRestantesPersona2} días<br><br>`;

    if (diferenciaDiasPersona1 > diferenciaDiasPersona2) {
        resultado += `${nombrePersona1} es mayor que ${nombrePersona2}.`;
    } else if (diferenciaDiasPersona1 < diferenciaDiasPersona2) {
        resultado += `${nombrePersona2} es mayor que ${nombrePersona1}.`;
    } else {
        resultado += `${nombrePersona1} y ${nombrePersona2} tienen la misma edad.`;
    }

    document.getElementById('result10').innerHTML = resultado;
}
