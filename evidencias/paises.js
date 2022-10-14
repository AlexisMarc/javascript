const needle = require('needle')

const url = 'https://restcountries.com/v3.1/all'
needle('get', url )

async function f(){
    try {
        let responsive = await needle('get', url)
        responsive.body.forEach(pais => {
            console.log(`Pais: ${pais.name.common}`)
            console.log('*****************')
            });
    } catch (error) {

    }
}
f()

