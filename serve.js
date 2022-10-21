const express = require('express')
const detenv = require('dotenv')
const colors = require('colors')


detenv.config({
    path: './config_env/config.env'
})
//1 crear el objeto app
const app = express()

//2 crear una ruta de prueba

const bootscampRoutes = require('./routes/BootcampRouter')


app.get('/api/v1/bootscamps', (require, response )=>{
    response.status(200).json({
        "menssage": "Hola putos"
    })
})

app.get('/api/v1/bootscamps/:id', (require, response )=>{
    response.status(200).json({
        "menssage": `Hola putos le id es ${require.params.id}`
    })
})

app.post('/api/v1/bootscamps', (require, response)=>{
    response.status(201).json({
        "message":"aqui va el bootscamp"
    })
})
app.put('/api/v1/bootscamps/:id', (require, response)=>{
    response.status(200).json({
        "message":`Hola putos le id es ${require.params.id}`
    })
})

app.delete('/api/v1/bootscamps/:id', (require, response)=>{
    response.status(200).json({
        "message":`Hola putos le id es ${require.params.id}`
    })
})

//3 ejecular servidor de desarrollo de express
app.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciado `)
})