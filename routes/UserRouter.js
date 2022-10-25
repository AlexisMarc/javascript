const express = require('express')

const router = express.Router()

router.get('/', (require, response )=>{
    response.status(200).json({
        "menssage": "Hola putos"
    })
})
router.get('/:id', (require, response )=>{
    response.status(200).json({
        "menssage": `Hola putos le id es ${require.params.id}`
    })
})

router.post('/', (require, response)=>{
    response.status(201).json({
        "message":"aqui va el bootscamp"
    })
})
router.put('/:id', (require, response)=>{
    response.status(200).json({
        "message":`Hola putos le id es ${require.params.id}`
    })
})

router.delete('/:id', (require, response)=>{
    response.status(200).json({
        "message":`Hola putos le id es ${require.params.id}`
    })
})
module.exports = router