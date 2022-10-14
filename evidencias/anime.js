const axios = require('axios')

let config ={
    method: 'get',
    url: "https://animechan.vercel.app/api/random"
}

async function f(){
    try {
        let responsive = await axios(config)
        console.log(responsive.data) 
    } catch (error) {
    }
}
f()
