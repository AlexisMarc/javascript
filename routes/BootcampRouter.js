const express = require('express')

const router = express.Router()

router.get('/api/v1/bootscamps', (require, response )=>{
    response.status(200).json({
        "menssage": "Hola putos"
    })
})