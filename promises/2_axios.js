const axios = require('axios')

let config ={
    method: 'get',
    url: "https://pokeapi.co/api/v2/type"
}

axios(config)
    .then((response)=>{
        return response.data.results
    }).then((dato)=>{
        dato.forEach((tipo) => {
        console.log(`tipo: ${tipo.name}`)
        console.log('++++++++++++++++++')
        });
    })
    .catch((error)=>{
        console.log(error)
    })