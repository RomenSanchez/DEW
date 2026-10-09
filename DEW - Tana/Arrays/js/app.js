// ARRAY INICIAL DE PRODUCTOS

const productos = [
    {id:1, nombre: "Manzanas", precio: 1.2},
    {id:2, nombre: "Plátano", precio: 0.99},
    {id:3, nombre: "Naranja", precio: 1.1},
    {id:4, nombre: "Pera", precio: 1.35},
    {id:5, nombre: "Sandia", precio: 3.5},
    {id:6, nombre: "Manzana Golden", precio: 1.45},
    {id:7, nombre: "Manzana Reineta", precio: 1.6},
]

console.log("Inventario original de productos")
console.table(productos)

// Añadir un producto al final del array

productos.push({id:8, nombre:"Melón", precio: 4.2})

console.log("Inventario después de usar PUSH")
console.table(productos)

// Eliminar el último producto

productos.pop()

console.log("Inventario después de usar PUSH")
console.table(productos)

// Añadimos un elemento por el principio

productos.unshift({id:0, nombre: "Kiwi", precio:2})

console.log("Inventario después de usar UNSHIFT")
console.table(productos)

// Eliminar el primer elemento

productos.shift()

console.log("Inventario V5 de productos")
console.table(productos)

// Buscar y filtrar elemento

// Encontrar los que contengan "manzana" en el nombre

const manzana = productos.filter((p) => p.nombre.includes ("Manzana"))

console.log("Manzanas de nuestro inventario")
console.table(manzana)

const manzana2 = productos.filter((p) => p.nombre === "Manzana")
console.log("Unicamente sale el que tenga manzana estrictamente")
console.table(manzana2)

// Encontrar producto cuyo nombre exacto es naranja
const encontrado = productos.find(p => p.nombre === "Naranja")
console.log("naranja")
console.table(encontrado)

// Filtrar los precios que cuestan mas de 1.20
const precio = productos.filter((p) => p.precio > 1.2)
console.log(precio)
console.table(precio)

// MÉTODOS PARA TRASNFORMAR DATOS

const frutas = productos.map(p => p.nombre)
console.log("Frutas: ", frutas)

// Calcular el precio total de todos los productos
const total = productos.reduce((acum, p) => acum + p.precio, 0)
console.log(`Suma total de los precios: ${total.toFixed(2)}`)

// Ordenar elementos
// Atención al spreat operator que hace copia simple a primer nivel

//const ordenados = productos.sort((a,b) => a.precio - b.precio)
const ordenados = {...productos}.sort((a,b) => a.precio - b.precio)
console.log("Array de productos ordenados")
console.table(ordenados)

console.log("Array ORIGINAl DE PRODUCTOS")
console.table(productos)