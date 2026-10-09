
let nota = 7.5

// Compruebo que la nota sea valida
function esNotaValida (nota) {
    return typeof nota == "number" && nota >= 0 && nota <= 10; 
}

// Obtengo la nota
function obtenerResultado (nota) { 
    return nota >= 5 ? "HAS APROBADO" : "HAS SUSPENDIDO";
}

// Obtengo el color
function obetenerColor (nota) {
    return nota >= 5 ? "green" : "red"
}

// Obtengo la calificacion
function  obtenerCalificaciones (nota) {
    return nota >= 9 
    ? "SOBRESALIENTE"
    : nota >= 7
    ? "NOTABLE"
    : nota >= 6
    ? "BIEN"
    : nota >= 5
    ? "APROBADO" 
    : "SUSPENDIDO";
}

// Muestro el resultado
function mostrarResultado(nota){
    const resultado = document.querySelector(".resultado");
    const calificacion = document.querySelector(".calificacion");

    resultado.textContent = obtenerResultado(nota);

    resultado.style.color = obetenerColor(nota);

    calificacion.textContent = obtenerCalificaciones(nota);
}

// Compruebo la nota
if (esNotaValida(nota)) {

    mostrarResultado(nota);

}else {
    const resultado = document.querySelector(".resultado");
    const calificacion = document.querySelector(".calificacion");

    resultado.textContent = "ERROR";
    resultado.style.color = "red";

    calificacion.textContent = "La nota no es válida";

}