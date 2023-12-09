function calcularPromedioYMostrarGanadores() {
    var notasAlumnos = generarNotasAleatorias(5, 5);
    var promedios = calcularPromedioPorAlumno(notasAlumnos);
    var ganadores = obtenerGanadores(promedios);

    var resultado = "Notas de los Alumnos:<br>";

    for (var i = 0; i < notasAlumnos.length; i++) {
        resultado += `Alumno ${i + 1}: ${notasAlumnos[i].join(', ')} - Promedio: ${promedios[i].toFixed(2)}<br>`;
    }

    resultado += "<br>Ganadores (Promedio mayor o igual a 6):<br>";

    for (var j = 0; j < ganadores.length; j++) {
        resultado += `Alumno ${ganadores[j] + 1} - Promedio: ${promedios[ganadores[j]].toFixed(2)}<br>`;
    }

    document.getElementById('result16').innerHTML = resultado;
}

function generarNotasAleatorias(numAlumnos, numNotas) {
    var notas = [];

    for (var i = 0; i < numAlumnos; i++) {
        var alumnoNotas = [];
        for (var j = 0; j < numNotas; j++) {
            alumnoNotas.push(Math.floor(Math.random() * 10) + 1);
        }
        notas.push(alumnoNotas);
    }

    return notas;
}

function calcularPromedioPorAlumno(notasAlumnos) {
    var promedios = [];

    for (var i = 0; i < notasAlumnos.length; i++) {
        var sumaNotas = notasAlumnos[i].reduce(function (acumulador, nota) {
            return acumulador + nota;
        }, 0);
        promedios.push(sumaNotas / notasAlumnos[i].length);
    }

    return promedios;
}

function obtenerGanadores(promedios) {
    var ganadores = [];

    for (var i = 0; i < promedios.length; i++) {
        if (promedios[i] >= 6) {
            ganadores.push(i);
        }
    }

    return ganadores;
}
