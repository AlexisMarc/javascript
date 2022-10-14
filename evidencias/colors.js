const request = require('request')

const url = "https://x-colors.herokuapp.com/api/random?number=10"

request(url, {json:true}, (err, response, body)=>{
    response.body.forEach(element=>{
        console.log(`Color hex: ${element.hex}`)
        console.log(`Color hsl: ${element.hsl}`)
        console.log('---------------------')
    });
})
