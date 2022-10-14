let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = 'https://pokeapi.co/api/v2/type'

const get_data = (endpoint) => {
    //definir una promesa
    let promise = new Promise((resolve, reject) => {
        //Conexión API
        let http = new XMLHttpRequest()
        //Abrir conexión a ala API
        http.open('get', endpoint)
        //Enviar la solicitud(Request)
        http.send()
        //Hacer el tratamiento de la response
        http.onload = () => {
            if (http.status === 200) {
                resolve(http.responseText)
            } else {
                reject(http.status)
            }
        }

    })

    return promise
}
const exito = (response) => {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo) => {
        console.log(`tipo: ${tipo.name}`)
        console.log('------------------')
    });
    //  console.log(JSON.parse(response).results)
}
const fallo = (status) => {
    console.log(status)
}
//envocar la función get_dat
get_data(url)
            .then((response) =>{
               exito(response)
            })
            .catch((status) =>{
                fallo(status)
            })