/*
PROFESORES-B

En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
- M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.
Función: porcProfesSexoEnCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una
letra).

Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.
*/

let profesores = [
    {categoría: 1, nombre: 'Gladys', sexo: 'F'},
    {categoría: 2, nombre: 'Pepito', sexo: 'M'},
    {categoría: 4, nombre: 'Petunia', sexo: 'F'},
    {categoría: 1, nombre: 'Alfredo', sexo: 'M'},
    {categoría: 5, nombre: 'Milagros', sexo: 'F'},
    {categoría: 2, nombre: 'Ricardo', sexo: 'M'},
    {categoría: 3, nombre: 'Cesar', sexo: 'M'},
    {categoría: 4, nombre: 'Luisa', sexo: 'F'},
    {categoría: 2, nombre: 'Luis', sexo: 'M'},
];
function profesoresCategoria(profesores, categoria) {
    return profesores.filter((profesor) => profesor.categoria === categoria);
}
function porcProfesSexoEnCategoria(profesores, categoria, sexo) {
    const profesoresEnCategoria = profesoresCategoria(profesores, categoria);
    const totalProfesoresEnCategoria = profesoresEnCategoria.length;
    
    if(totalProfesoresEnCategoria === 0) return 0;

    const profesoresDelSexo = profesoresEnCategoria.filter((profesor) => profesor.sexo === sexo);
    const totalProfesoresDelSexo = profesoresDelSexo.length;

    return (totalProfesoresDelSexo / totalProfesoresEnCategoria) * 100;
}

let salida = document.getElementById('salida');

salida.innerHTML = "El porcentaje de profesores de sexo F en la categoria 1 es: " + porcProfesSexoEnCategoria(profesores, 1, 'F')+"%";