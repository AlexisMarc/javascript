//objeo de conexión
const sequelize = require('../config/seq')
//DataTypes
const { DataTypes, ValidationError } = require('sequelize')
//el modelo
const CourseModel = require('../models/courses')
//crear el objeto usuario
const Course = CourseModel(sequelize, DataTypes)

//get:obtener datos
exports.traerCourse = async (req, res) => {

    try {
        const courses = await Course.findAll();
        res.status(200).json({
            "success": true,
            "data": courses
        })
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//obtener recursos por id 
exports.traerCoursePorId = async (req, res) => {

    try {
        const CourseId = await Course.findByPk(req.params.id)
        //si usuario no existe
        if (!CourseId) {
            res.status(422).json(
                {
                    "success": false,
                    "errors": [
                        "uusario no exite"
                    ]
                }
            )
        }
        else {
            res.status(200).json({
                "success": true,
                "data": CourseId
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}

//POST: crear un nuevo recurso
exports.crearCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json({
            "success": true,
            "data": newCourse
        })
    } catch (error) {


        if (error instanceof ValidationError) {
            //poner los mensajes de error en una variable
            const errores = error.errors.map((e) =>
                e.message
            )
            res.status(422)
                .json({
                    "success": false,
                    "errors": errores
                })
        } else {
            //errores de servidor
            res.status(500).json({
                "success": false,
                "errors": "error de servidor"
            })

        }

    }
}


//put-patch 
exports.actualizarCourse = async (req, res) => {
    try {
        const upCourse = await Course.findByPk(req.params.id)
        if (!upCourse) {
            //response de usuario no encontrado
            res.status(422)
                .json({
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                })
        } else {
            //actualizar usuario por id
            await Course.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            //consultar datos actualizados
            const CourseAct = await Course.findByPk(req.params.id)

            res.status(200).json({
                "success": true,
                "data": CourseAct
            })
        }
    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }
}

//DELETE: borara usuario 
exports.eliminarCourse = async (req, res) => {
    try {
        const u = await Course.findByPk(req.params.id)
        if (!u) {
            //response de usuario no encontrado
            res.status(422)
                .json({
                    "success": false,
                    "errors": [
                        "usuario no existe"
                    ]
                })
        } else {
            await Course.destroy({
                where: {
                    id: req.params.id
                }
            })
            //response
            res.status(200).json({
                "success": true,
                "data": u
            })  
        }

    } catch (error) {
        res.status(500).json({
            "success": false,
            "errors": "error de servidor"
        })
    }

}