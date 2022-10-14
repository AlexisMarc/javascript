const needle = require('needle')

const url = 'https://pokeapi.co/api/v2/type'
needle('get', url )

async function f(){
    try {
        let responsive = await needle('get', url)
        responsive.body.results.forEach((tipo) => {
            console.log(`tipo: ${tipo.name}`)
            console.log('*****************')
            });
    } catch (error) {

    }
}
f()

