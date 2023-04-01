// interacccion con el solicitante
let vacio = "";
let nombre = prompt("cual es tu nombre?");
console.log("nombre del solicitante: ", nombre);

while (nombre == vacio) {
alert ("por favor, complete este espacio");
nombre = prompt("cual es tu nombre?");
}
let edad = parseInt(prompt("que edad tienes?"));
console.log("edad del solicitante: ", edad);
while (edad == vacio || isNaN(edad)){
  edad = parseInt(prompt("ingrese una edad valida"));
}
if (edad >= 25) {
} else {
  alert("comprate un peluche");

  }


  let telefono = parseInt(prompt("ingrese su numero de telefono"));
console.log("telefono del solicitante: ", telefono);

while (telefono == vacio) {
  alert ("por favor, complete este espacio");
  telefono = parseInt(prompt("ingrese su numero de telefono"));  }

// let vivienda = prompt("usted vive en un cauntry? responda: 'si o no' ");
// console.log("el solicitante vive en un coutry?: ", vivienda);
// if (vivienda == "si" || vivienda == "Si" || vivienda == "SI"){
//   // ejecutando el codigo solo si la condicion es verdadera
//   alert("nos estaremos contactando en breve");
// }
// if (vivienda == "no"|| vivienda == "No" || vivienda == "NO") {
//   alert("no eres legible para adoptar a chan");
// }
// .........................
// let telefono =  parseInt( prompt ("ingrese su numerod e telefono"));
// console.log (telefono);
