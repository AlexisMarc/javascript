const needle = require('needle')

const url = 'https://api.covid19api.com/'
needle('get', url )
.then((dato)=>{
    console.log(dato.body.countryRoute.Name)
})
.catch((error)=>{
    console.log(error)
})