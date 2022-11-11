const express = require('express')
const detenv = require('dotenv')
const colors = require('colors')
const listendpoints = require('express-list-endpoints')

const connectDB = require('./config/db')

detenv.config({
    path: './config_env/config.env'
})

const BootcampRoutes = require('./routes/BootcampRouter')
const UserRouter = require('./routes/UserRouter')
//1 crear el objeto app

const app = express()

app.use(express.json())

connectDB()

//2 crear una ruta de prueba

app.use('/api/v1/bootcamps' , BootcampRoutes)
app.use('/api/v1/user' , UserRouter)

console.log(listendpoints(app))

//3 ejecular servidor de desarrollo de express
app.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciado `)
})