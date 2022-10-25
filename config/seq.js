const Sequelize = require('sequelize')

//definir porfavor objeto sequelize de conexión:
const sequelize = new Sequelize(
    'ficha_2465880',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql',
        port:'3307'
    }
)

module.exports = sequelize