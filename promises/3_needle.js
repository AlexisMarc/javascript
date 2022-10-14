const needle = require('needle')

const url = 'https://pokeapi.co/api/v2/type'
needle('get', url )
.then((response)=>{
    return response.body.results
}).then((dato)=>{
    dato.forEach((tipo) => {
    console.log(`tipo: ${tipo.name}`)
    console.log('*****************')
    });
})
.catch((error)=>{
    console.log(error)
})