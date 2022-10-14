
function llamarAlumno(alumno, callback){
    let llamadaAlumno =`Llamando a alumno: ${alumno}`
    // callback
    callback(llamadaAlumno)
}

//callback ejecutar
const imprimir=(texto) =>{
    console.log(texto);
}

//invocar la funcion principal llamarAlumno
llamarAlumno("Marcos Rincón", imprimir)