// funcion para validar vacio
function validarVacio(valor) {
  let vacio = "";
  if (valor == vacio) {
    return true;
  } else return false;
}
// clases metodo constructor
class curso {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
// const de 'cursos.push'
const cursos = [];
cursos.push(
  new curso(1, "Habilidad", 50),
  new curso(2, "Obediencia", 30),
  new curso(3, "Discapacidad", 100)
);
// variable 'mostrar cursos'
let mostrarCursos = (arr) => {
  message = "";
  arr.forEach(
    (curso) => (message += `${curso.nombre} - $ ${curso.precio} USD` + "\n")
  );
  return message;
};
// variable de carrito y seleccion
let carrito = [];
let seleccion = prompt(
  "Bienvenid@ A continuación nuestra lista de cursos, ¿desea continuar? \nEscriba una opcion: si o no."
);
console.log(seleccion);
// ciclo para validar vacio de seleccion
while (validarVacio(seleccion)) {
  alert("por favor, complete este espacio");
  seleccion = prompt("ingrese un caracter: si o no.");
}
// // ciclo para validar que el usuario ingrese el  caracter correcto
while (seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no") {
  alert("por Favor ingrese un caracter valido");
  seleccion = prompt("escriba una opcion: si o no");
}
// condicion si el usuario escribe "SI"
if (seleccion.toLowerCase == "si") {
}
// Condicion si el usuario "NO" desea continuar
else if (seleccion.toLowerCase() == "no") {
  alert("Gracias por visitarnos");
  alert("Recargue la pagina o presione F5, para seguir Interactuando");
}
// Si el usuario desea continuar seguira por esta linea de codigo.
while (seleccion != "no") {
  let curso = prompt(
    "Agrega un curso a tu carrito: \n" + mostrarCursos(cursos)
  );
  while (
    curso.toLowerCase() != "habilidad" &&
    curso.toLowerCase() != "obediencia" &&
    curso.toLowerCase() != "discapacidad"
  ) {
    alert("por Favor ingrese un caracter valido");
    curso = prompt("Agrega un curso a tu carrito: \n" + mostrarCursos(cursos));
  }
  // ciclo para validar vacio de "curso"
  while (validarVacio(curso)) {
    curso = prompt(
      "Por favor, complete este espacio\n" + mostrarCursos(cursos)
    );
  }
  // variable precio
  let precio = 0;
  // find
  let cursoEncontrado = cursos.find(
    (elemento) => elemento.nombre.toLowerCase() == curso.toLowerCase()
  );
  carrito.push(cursoEncontrado);
  alert(`Curso encontrado: ${cursoEncontrado.nombre}`);
  precio = cursoEncontrado.precio;
  seleccion = prompt("¿desea agregar otro curso? Escriba: si o no");
  // ciclo para validar vacio de seleccion
  while (validarVacio(seleccion)) {
    alert("por favor, complete este espacio");
    seleccion = prompt("¿desea agregar otro curso? Escriba: si o no");
  }
  while (seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no") {
    alert("por Favor Ingrese un caracter valido");
    seleccion = prompt("escriba una opcion: si o no");
  }
  // Si el usuario desea finalizar la compra le mostraremos el total de su compra por un console.log.
  while (seleccion == "no") {
    alert("Gracias por su compra, Hasta pronto");
    carrito.forEach((carritoFinal) => {
      console.log(
        `curso: ${carritoFinal.nombre}, El Total a pagar por este curso es: $${carritoFinal.precio} USD.`
      );
    });
    break;
  }
  // funcion de caracter superior
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  console.log(`el total a pagar por su compra es: $${total} USD.`);
}
