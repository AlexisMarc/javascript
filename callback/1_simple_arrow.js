const xmlHttpRequest = require('xmlhttprequest').XMlHttpRequest

const url = "https://pokeapi.co/api/v2/type"

//funcion para conectar a una api
//en modo asincrono
function get_data(endpoint, exito, fallo){
    //1. crear el objeto xmlhttp
    const h = new xmlHttpRequest();
    //2. establecer una conexion a la Api
    h.open('GET',   endpoint)
    //3. enviar la request a server(API)
    h.onload = function(){
        exito(h.responseText)
    }
    h.onload = ()=>{
        if (h.status === 200) {
            exito(h.responseText)
        } else {
            fallo(h.status)
        }
        exito(h.responseText)
    }
}
//function callback: exito
const exito = (response)=>{
    const tipos = JSON.parse(response).results
    tipos.forEach(element=>{
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------')
    });
}
//funcion callback fallo
const fallo = (status)=>{
    console.log(status)
}
//Invocar la fucion
get_data(url, exito, fallo)