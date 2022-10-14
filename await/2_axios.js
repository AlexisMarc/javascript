const axios = require('axios')

let config ={
    method: 'get',
    url: "https://pokeapi.co/api/v2/type"
}

async function f(){
    try {
        let responsive = await axios(config)
        responsive.data.results.forEach((tipo) => {
            console.log(`tipo: ${tipo.name}`)
            console.log('*****************')
            });
    } catch (error) {
    }
}
f()
