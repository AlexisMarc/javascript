import {materias} from "./materia.js";
import pkg from 'colors'

//metodos de los objetos arreglo
//foreach: recorre un arreglo

//Listar todo
function listar() {
    materias.forEach((materia) => {
            console.log(`materia: ${materia.nombre}`.yellow)
            console.log(`instructor: ${materia.instructor}`.yellow)
    });
}

//lista especifica
function lista(id) {
    materias.forEach((materia) => {
        if (materia.id === id) {
            console.log(`materia: ${materia.nombre}`.yellow)
            console.log(`instructor: ${materia.instructor}`.yellow)
        }
    });
}

//eliminar
function eliminar(id) {
        materias.splice(id,1);
        listar()
}

//editar
function editar(id, array) {
    materias[id]= array;
    listar()
}

const nuevo = {
    id:1,
    nombre: "Cultura fisica",
    instructor: "Luis Baquero",
    tipo: "Transversal",
    notas:[
        5.0,
        4.3,
        3.1
    ]
}

//eliminar(1);

editar(1,nuevo);

