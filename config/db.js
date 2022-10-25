const sequelize = require('./seq')
const UserModel = require('../models/user')
const { DataTypes } = require('sequelize')
const user = require('../models/user')
const colors = require('colors')

const User = UserModel(sequelize, DataTypes)


const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexión exitosa'.bgMagenta.green)
        //Select
        // const users = await User.findAll();
        // console.log(users)
        // const marcos = await User.create({
        //     name: 'Marcos',
        //     email: 'Marcos.123@gmail.com',
        //     password: '0988'
        // });
        // console.log("ID:", marcos.id);

        // const user = await User.findByPk(marcos.id);
        // console.log(user)
    } catch (error) {
        console.error(error)
    }
}

//ejecutar
connectDB()

module.exports = connectDB