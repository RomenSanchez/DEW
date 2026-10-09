/***********************************************************
* METODOS DE ACCESO AL DOM
*
*
* getElementById   
* getElementsByClassName
* getElementsByTagName
*
* querySelector
* querySelectorAll
* 
***********************************************************/              


/**************************************** 
 * Accedemos al DOM con getElementById()
 * 
*****************************************/

document.getElementById("capa-container").innerHTML += `<p>He accedido a la capa por Id y he añadido este párrafo</p>`

/**************************************** 
 * Accedemos al DOM seleccionando los nodos con una determinada clase
 * 
*****************************************/

let elementos = document.getElementsByClassName("capa")
console.log(elementos)
elementos[1].innerHTML = "DEW"


// Ejemplo de consulta de un elemento que tiene dos clases CSS

elementos = document.getElementsByClassName("capa border-primary")
console.log(elementos)

/**************************************** 
 * Accedemos al DOM con getElementsByTagName()
 * 
*****************************************/

let capas = document.getElementsByTagName("div")
console.log(capas)

// Ejemplo conbinando metodos

let capaNoticias = document.getElementById("capa-noticias")
let noticias = capaNoticias.getElementsByTagName("p")


console.log("Tenemos " + noticias.length + " noticias en el portal")


// Vamos a crear un nuevo nodo HTML que representará una noticia

let ultimaNoticia = document.createElement("p")
ultimaNoticia.textContent = "Esta es la ÚLTIMA NOTICIA ..."

// Añadimos la noticia al FINAL -pequeño apunte mio, este metodo es para añadir algo que hemos creado, al documento que ya teniamos-.
capaNoticias.appendChild(ultimaNoticia)

// Vamos a añadir una noticia al comienzo
let noticiaDestacada = document.createElement("p")
noticiaDestacada.textContent = "Esta es la noticia DESTACADA ..."

// Añadimos la noticia al comienzo
capaNoticias.prepend(noticiaDestacada)

// Vamos a insertar una noticia antes de un nodo especifico
let noticiaIntermedia = document.createElement("p")
noticiaIntermedia.textContent = "Esta noticia va ANTES de la mitad ..."

capaNoticias.insertBefore(noticiaIntermedia, capaNoticias.children[noticias.length/2])

/**************************************** 
 * Accedemos al DOM con querySelector() y querySelectorALL()
 * 
*****************************************/


// Accedemos al elemento del DOM por su ID usando #
let capaContainer = document.querySelector('#capa-container')
console.log(capaContainer)

// Accedemos al elemento cuya class es "capa" y nos devuelve el primero

let primeraCapa = document.querySelector('.capa')
console.log(primeraCapa)

// Accedemos a los elementos cuya class es "capa" y nos devuelve un array

let allCapas = document.querySelectorAll('.capa')
console.log(allCapas)

// Hacemos la misma consulta que hicimos con getElementByClassName de
// Un elemento con dos clases CSS

let dosClases = document.querySelector('.capa.border-primary')
console.log(dosClases)

// Vamos a acceder jerarquicamente usando atributo class

let hijo = document.querySelector('.padre .hijo')
console.log(hijo)

// Vamos a acceder jerarquicamente usando atributo class

let hijos = document.querySelectorAll('.padre .hijo')
console.log(hijos)

// Simplemente por ver como hacerlo con getElementsByClassName()

let padres = document.getElementsByClassName('padre')

let primerHijo = padres[0].getElementsByClassName('hijo')
console.log(primerHijo[0]) 

 // Vamos a crear un manejador de eventos para ver su funcionamiento

 const parrafo = document.getElementById('texto')
 const btnTexto = document.getElementById('cambiarTexto')

 // Añadimos un manejador de eventos el cual espera dos elementos dentro del parentesis
 
  function cambiarTexto(){
    parrafo.textContent = "BOOOOOOOOOOOOOOOOOOM!!"
 }

 btnTexto.addEventListener('click', cambiarTexto)

