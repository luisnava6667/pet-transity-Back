import { generarId, generarJWT } from '../helpers/index.js'
import { emailRecuperar, emailRegistro } from '../helpers/sendEmail.js'
const newEntrie = async (req, res, model, tipo) => {
  const { email } = req.body
  const existeUsuario = await model.findOne({ email })
  if (existeUsuario)
    return res.status(400).send('Ya hay un usuario registrado con ese email')
  try {
    const usuario = new model(req.body)
    usuario.token = generarId(usuario._id)
    await usuario.save()
    emailRegistro(usuario)
    res.json({
      msg: 'Usuario creado con exito, por favor revisa tu email para activar tu cuenta'
    })
  } catch (error) {
    console.log(error)
  }
}
const newPassword = async (req, res, model) => {
  const { token } = req.params
  const { password } = req.body
  const usuario = await model.findOne({ token })
  if (usuario) {
    usuario.password = password
    usuario.token = ''
    await usuario.save()

    res.json({
      msg: 'Contraseña actualizada con exito'
    })
  } else {
    return res.status(400).send('Token invalido')
  }
}
const authenticated = async (req, res, model) => {
  const { email, password } = req.body
  const usuario = await model.findOne({ email })
  if (!usuario) return res.status(400).send('Email o contraseña incorrectos')
  if (!usuario.confirmado) return res.status(400).send('Usuario no confirmado')
  if (await usuario.matchPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario._id),
      img: usuario.img
    })
  } else {
    return res.status(400).send('Email o contraseña incorrectos')
  }
}
const confirm = async (req, res, models) => {
  const { token } = req.params

  try {
    let usuario = null

    for (const model of models) {
      usuario = await model.findOne({ token })
      if (usuario) break
    }

    if (!usuario) return res.status(400).send('Token inválido')

    usuario.confirmado = true
    usuario.token = ''
    await usuario.save()

    res.json({
      msg: 'Usuario confirmado con éxito'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al confirmar el usuario' })
  }
}
const checkToken = async (req, res, model) => {
  const { token } = req.params
  const tokenValido = await model.findOne({ token })
  if (tokenValido) {
    res.json({
      msg: 'Token valido'
    })
  } else {
    return res.status(400).send('Token invalido')
  }
}

const forgetPassword = async (req, res, model) => {
  const { email } = req.body
  const usuario = await model.findOne({ email })
  if (!usuario) return res.status(400).send('Email no registrado')
  try {
    usuario.token = generarId(usuario._id)
    await usuario.save()
    console.log(usuario)
    emailRecuperar(usuario)
    res.json({
      msg: 'Se ha enviado un email para reestablecer tu contraseña'
    })
  } catch (error) {
    console.log(error)
  }
}
export {
  newEntrie,
  authenticated,
  confirm,
  checkToken,
  forgetPassword,
  newPassword
}
