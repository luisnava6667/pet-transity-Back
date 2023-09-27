const {
    Usuario,
    Refugio,
} = require('../models/index');
const jwt = require('jsonwebtoken')

const registrar = async (req, res) => {
    // const {email} = req.body
    //evitar registros duplicados 

    try {
        res.json({
            msg:'Usuario creado con exito, por favor revisa tu email para activar tu cuenta',
        })
    } catch (error) {
        console.log(error);
    }
    // const existeUsuario = await Usuario.findOne({email})
    // if(existeUsuario) return res.status(400).send('El usuario ya existe')

    // try {
    //     const usuario = new Usuario(req.body)

    //     usuario.token = jwt.sign({_id: usuario._id.toString()}, process.env.JWT_KEY)
    //     await usuario.save()
    //     res.json({
    //         msg:'Usuario creado con exito, por favor revisa tu email para activar tu cuenta',
    //     })

    // } catch (error) {
    //     console.log(error);       
    // }
}

const autenticar = async (req, res) => {
    try {
        const {email, password} = req.body
        const usuario = await Usuario.findByCredentials(email, password)
        const token = jwt.sign({_id: usuario._id.toString()}, process.env.JWT_KEY)
        usuario.token = token
        await usuario.save()
        res.json({
            usuario,
            token
        })
    } catch (error) {
        res.status(400).send('Error al autenticar')
    }
}

module.exports = {
    registrar,
    autenticar
}