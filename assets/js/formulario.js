
// funcion para calcular vacio
function validarVacio(valor) {
  let vacio = "";
  // condicion para validar vacio
  if (valor == vacio) {
    return true;
  } else return false;
}
// declaracion de Variable nombre
let nombre = prompt("cual es tu nombre?");
console.log("nombre del solicitante: ", nombre);
// ciclo para validar vacio de la variable 'nombre'.
while (validarVacio(nombre)) {
  alert("por favor, complete este espacio");
  nombre = prompt("cual es tu nombre?");
  console.log("nombre del solicitante: ", nombre);
}
// declaracion de Variable edad
let edad = parseInt(prompt("que edad tienes?"));
console.log("edad del solicitante: ", edad);
// ciclo para validar vacio de la variable 'edad'.
while (validarVacio(edad) || isNaN(edad)) {
  edad = parseInt(prompt("ingrese una edad valida"));
  console.log("edad del solicitante: ", edad);
}
// condicion para validar si la edad cumple con los requeriminetos de edad minima para adoptar al canino.
if (edad >= 25) {
  let telefono = parseInt(prompt("ingrese su numero de telefono"));
  console.log("telefono del solicitante: ", telefono);
  while (validarVacio(telefono) || isNaN(telefono)) {
    telefono = parseInt(prompt("ingrese un telefono valido"));
    console.log("telefono del solicitante: ", telefono);
  }
  // declaracion de Variable vivienda
  let vivienda = prompt("¿usted vive en un countries? responda: 'si o no' ");
  console.log("el solicitante vive en un coutry?: ", vivienda);
  // ciclo para validar vacio de variable 'vivienda'.
  while (validarVacio(vivienda)) {
    alert("por favor, complete este espacio");
    vivienda = prompt("¿usted vive en un cauntry? responda: 'si o no' ");
    console.log("el solicitante vive en un coutry?: ", vivienda);
  }
  // condicion para validar si el interesado en adoptar el canino vive en un countries, el interesado tiene que elegir 'SI o NO'.
  if (vivienda == "si" || vivienda == "Si" || vivienda == "SI") {
    alert("nos estaremos contactando en breve");
    alert("por favor, recargue la pagina con F5 para elegir otras opciones ");
  }
  if (vivienda == "no" || vivienda == "No" || vivienda == "NO") {
    alert(
      "No cumples la condicion de edad para adoptar a Shan,Estamos buscando personas que vivan en un countries. "
    );
    alert("por favor, recargue la pagina con F5 para elegir otras opciones ");
  }
  // condicion para validar si el interesado en adoptar el canino NO vive en un countries.
} else {
  alert(
    "No cumples la condicion de edad para adoptar a Shan,Estamos buscando personas mayores a 25 años"
  );
  alert("por favor, recargue la pagina con F5 para elegir otras opciones ");
}
