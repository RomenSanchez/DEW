//1) Un ejemplo de función tradicional puede ser: 

function sumar(a,b) {
    return a + b;
}


// Este es el mismo ejemplo usando la sintaxis de flecha_
const sumar_flecha = (a,b) => {
    return a +b;
}


// 2) Vamos a ver una versión más simplificada, cuando la función tiene
// únicamente una expresión. -Es lo mismo que la anterior pero simplificada en una linea

const multiplicar = (a,b) => a*b

// 3) Si solo hay un parámetro de entrada

const doble = numero => numero*2; 
