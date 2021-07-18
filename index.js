/*1. Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

2. dado 2 los siguentes arrays: 
[1,2,3,4,5,6] y ["1", "2", "3"]
Concatenar ambos arrays en uno solo
3. 
En este ejercicio vas a escribir el código en el editor online. Intenta realizar el siguiente script :

Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual

El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

*/

/*2. dado 2 los siguentes arrays: 
[1,2,3,4,5,6] y ["1", "2", "3"]
Concatenar ambos arrays en uno solo*/

var array1=[1,2,3,4,5,6]
var array2=["1", "2", "3"]

const array3=array1.concat(array2);
console.log(array3)


/*1. Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.*/


const calcularDatosArreglo=(arreglo)=>{
    var numMenor=arreglo[0]
    var numMayor=arreglo[0]
    var suma=0;
    var media=0;

    for(i=0;i<arreglo.length;i++){
        if (arreglo[i]<numMenor){
            numMenor=arreglo[i];
        }
        if(numMayor<arreglo[i]){
            numMayor=arreglo[i]
        }
        suma=suma+arreglo[i]
    }
    
    media=suma/arreglo.length
    
    console.log(`El numero menor del arreglo es ${numMenor}`)
    console.log( `El numero mayor del arreglo es ${numMayor}`)
    console.log( `La media del arreglo es ${media}`)
}
var nums=[ 6,3,4,10]
calcularDatosArreglo(nums)







