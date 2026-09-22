// let nameu = "jhon";
// let age = 25;
// let isEnrolled = true;
// let subjetcs = ["programacion","base de datos","IA"];

// //acceder a la informacion
// console.log(typeof(nameu));
// console.log(typeof(age));
// console.log(typeof(isEnrolled));
// console.log(typeof(subjetcs));

// console.log(Array.isArray(subjetcs));

// console.log(subjetcs.map(function (s){return typeof(s)}));

// subjetcs.forEach(function (elements){
//     console.log(elements);
// })


let estudiante = {
    "nombre":"mencho",
    "age": 25,
    "esActivo": true,
    "materias": ["programacion", "BD", "IA"],
}

console.log(typeof(estudiante));
//accedemos a los datos especificos

console.log("el nombre del estudiante es:", estudiante.nombre)
console.log("¿Esta inscrito?", estudiante.esActivo)
console.log("La primera materia es:", estudiante.materias[0])
console.log("La cantidad de materias:", estudiante.length)

//mostraremos el objeto completo
console.log("el estudiante completo es :", estudiante);
console.table(estudiante);
