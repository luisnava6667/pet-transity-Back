import { Usuario } from '../models/index.js'
import { generarId, generarJWT } from '../helpers/index.js'
const nuevoUsuario = async (req, res) => {
  const { email } = req.body
  const existeUsuario = await Usuario.findOne({ email })
  if (existeUsuario)
    return res.status(400).send('Ya hay un usuario registrado con ese email')
  try {
    const usuario = new Usuario(req.body)
    usuario.token = generarId(usuario._id)
    await usuario.save()
    res.json({
      msg: 'Usuario creado con exito, por favor revisa tu email para activar tu cuenta'
    })
  } catch (error) {
    console.log(error)
  }
}

const autenticar = async (req, res) => {
  const { email, password } = req.body
  const usuario = await Usuario.findOne({ email })
  if (!usuario) return res.status(400).send('Email o contraseña incorrectos')
  if (!usuario.confirmado) return res.status(400).send('Usuario no confirmado')
  if (await usuario.matchPassword(password)) {
    res.json({
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
      token: generarJWT(usuario._id)
    })
  } else {
    return res.status(400).send('Email o contraseña incorrectos')
  }
}
const confirmar = async (req, res) => {
  const { token } = req.params
  const usuario = await Usuario.findOne({ token })
  if (!usuario) return res.status(400).send('Token invalido')
  try {
    usuario.confirmado = true
    usuario.token = ''
    await usuario.save()
    res.json({
      msg: 'Usuario confirmado con exito'
    })
  } catch (error) {
    console.log(error)
  }
}
const olvidePassword = async (req, res) => {
  const { email } = req.body
  const usuario = await Usuario.findOne({ email })
  if (!usuario) return res.status(400).send('Email no registrado')
  try {
    usuario.token = generarId(usuario._id)
    await usuario.save()
    res.json({
      msg: 'Se ha enviado un email para reestablecer tu contraseña'
    })
  } catch (error) {
    console.log(error)
  }
}

const comprobarToken = async (req, res) => {
  const { token } = req.params
  const tokenValido = await Usuario.findOne({ token })
  if (tokenValido) {
    res.json({
      msg: 'Token valido'
    })
  } else {
    return res.status(400).send('Token invalido')
  }
}
const nuevoToken = async (req, res) => {
  const { token } = req.params
  const params = req.body
  const usuario = await Usuario.findOne({ token })
  if (usuario) {
    usuario.password = params.password
    usuario.token = ''
    await usuario.save()
    res.json({
      msg: 'Contraseña actualizada con exito'
    })
  } else {
    return res.status(400).send('Token invalido')
  }
}
const perfil = async (req, res) => {
  const { usuario } = req
  res.json(usuario)
}
export {
  nuevoUsuario,
  autenticar,
  confirmar,
  comprobarToken,
  nuevoToken,
  olvidePassword,
  perfil
}
