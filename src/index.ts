// CLASE 10 - Viernes 20 de mayo de 2022 - Estructuras de Datos y Métodos
// Ejercicio OBLIGATORIO (Fecha máxima de entrega: viernes 27/5 - 23:59 h)

// Ejercicio 2: Multiplicación
/* • Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren multiplicar.
• El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos.
• Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos. */
/*
v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/
//metodo
let multiplicarArreglo = (
  v1: number[],
  v2: number[],
  longitud: number
): number[] => {
  let indice: number;
  let arregloMultiplicacion: number[] = new Array(longitud);

  for (indice = 0; indice < longitud; indice++) {
    arregloMultiplicacion[indice] = v1[indice] * v2[indice];
  }
  return arregloMultiplicacion;
};
//funcion
let cargarVector = (v: number[], cant: number) => {
  let i: number;
  for (i = 0; i < cant; i++) {
    v[i] = Number(prompt("Ingrese el valor para el vector posición: " + i));
  }
};
//la multiplicacion
let dimension: number = Number(prompt("Ingrese la longitud del arreglo: "));
let vector1: number[] = new Array(dimension);
let vector2: number[] = new Array(dimension);
let vector3: number[] = new Array(dimension);
let vector4: number[] = new Array(dimension);
let resultadoTotal: number[] = new Array(dimension);
let resultado1: number[] = new Array(dimension);
let resultado2: number[] = new Array(dimension);

cargarVector(vector1, dimension);
cargarVector(vector2, dimension);
cargarVector(vector3, dimension);
cargarVector(vector4, dimension);

resultado1 = multiplicarArreglo(vector1, vector2, dimension);
resultado2 = multiplicarArreglo(vector3, vector4, dimension);
resultadoTotal = multiplicarArreglo(resultado1, resultado2, dimension);
console.log(
  "La multiplicación de los 4 arreglos es : [" + resultadoTotal + "]"
);

//Ejercicio realizado con el soporte de la alumna Gisela Gentile---------

/*----------práctica grupal-------------Zoom 25/5/2022-------------------
let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo ")
);
let arreglo1: number[] = new Array(dimensionArreglo);
let arreglo2: number[] = new Array(dimensionArreglo);

let cargarArreglo = (vector: number[], cantidad:number) : number[] => {
for (let indice: number = 0; indice < cantidad; indice ++) {
  vector[indice] = Number (prompt ("Ingrese valor para la posición " + indice))
}
return vector
}

let multiplicarArreglo = (vector1: number[], vector2: number[], cantidad: number) : number[] => {
  let multiplicacion: number[] = new Array (cantidad);
  for (let indice: number = 0; < cantidad; indice ++) {
    multiplicacion[indice] = vector1[indice] * vector2[indice]
  }
  return multiplicacion
}
cargarArreglo(arreglo1, dimensionArreglo);
cargarArreglo(arreglo2, dimensionArreglo);

console.log ("El resultado de la multiplicación es " + multiplicarArreglo (arreglo1, arreglo2, dimension))
*/

//MULTIPLICACION
/*
arreglo1
arreglo2
arreglo3 new Array (3)

function multiplicarArreglo(arreglo1, arreglo2, arreglo3) {

  for {
    arreglo3[indice] = arreglo1[indice] * arreglo2[indice] 
  }
}

multiplicarArreglo(arreglo1, arreglo2, arreglo3)

multiplicarArreglo(arreglo4, arreglo5, arreglo6)
*/
