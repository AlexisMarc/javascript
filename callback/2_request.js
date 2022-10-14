const request = require('request')

const url = "https://pokeapi.co/api/v2/type"

request(url, {json:true}, (err, response, body)=>{
    response.body.results.forEach(element=>{
        console.log(`url: ${element.url}`)
        console.log(`Tipo: ${element.name}`)
        console.log('---------------------')
    });
})
