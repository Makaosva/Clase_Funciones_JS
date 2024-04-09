/*------------DIFERENCIA ENTRE TIPOS DE VARIABLE -----------*/

/* VAR */
//Se repite su declaracion
var prueba = "Aqui se declara";
console.log(prueba, "<------Primera Declaracion var");
var prueba = "Aca tambien se declara pero rompe todo";
console.log(prueba, "<--------Segunda declaracion var");

/* LET */
//Se declara una sola vez y despues puede cambiar su valor PERO NO VOLVER a DECLARAR
let intento = "aca declaro let";
console.log(intento, "<------Primera Declaracion let");
//let intento =""
intento = "modificando let";
console.log(intento, "<--------Segunda declaracion let");

/* CONST */
//Se declara y no se puede modificar su valor
const fija = "Soy un valor fijo";
console.log(fija, "<------Primera Declaracion const");
/*fija = "modificado";
console.log(fija, "<--------Segunda declaracion const");*/

/* ----- su alcance ----*/

let variableGlobal = "Existo en todas partes";

if (true) {
  let variableLocal = "Solo existo dentro del bloque";
  console.log(variableLocal, "<------Dentro del bloque de codigo");
  console.log(variableGlobal, "<------Dentro del bloque de codigo");
}

console.log(variableGlobal, "<------Fuera del bloque de codigo");
//console.log(variableLocal, "<------Fuera del bloque de codigo");

/*-----------FUNCIONE----------*/
//Una funcion es una maquina perfecta donde uno le va a dar instrucciones y la misma se va a repetir las veces que uno la llame

function pintarMorado(params) {
  let elemento = document.querySelector("body");
  elemento.style.backgroundColor = "rgb(50, 18, 121)";
}

//Ejecutar la funcion
//pintarMorado();

function pintarTitulo() {
  let elemento = document.querySelector("h1");
  elemento.style.color = "rgb(122, 4, 4)";
}

function pintarParrafo() {
  let elemento = document.querySelector("p");
  elemento.style.color = "rgb(0, 163, 200)";
}

/* Utilizando parametros  */

function pintarFondoP(color) {
  let elemento = document.querySelector("p");
  elemento.style.backgroundColor = color;
}

//para llamarla pintarFondoP("green")

/* Multiples parametros  */

// function pintar(color, tag) {
//   let elemento = document.querySelector(tag);
//   elemento.style.backgroundColor = color;
// }
//para llamarla pintar("red","h1")

/* Valores por defecto  */
function pintar(color = "red", tag = "body") {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
}

/*   Orden de los parametros    */
function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  console.log(
    `Hola soy ${nombreCompleto}, tengo ${edad} años. Me dedico a ${vocacion} en la ciudad de ${ciudad}`
  );
}
