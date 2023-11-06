import Usuario from '../models/Usuario.js'
import {
  authenticated,
  checkToken,
  confirm,
  forgetPassword,
  newEntrie,
  newPassword
} from './controllers.js'

const nuevoUsuario = async (req, res) => {
  await newEntrie(req, res, Usuario)
}
const autenticar = async (req, res) => {
  await authenticated(req, res, Usuario)
}

const olvidePassword = async (req, res) => {
  await forgetPassword(req, res, Usuario)
}
const comprobarToken = async (req, res) => {
  await checkToken(req, res, Usuario)
}
const nuevoPassword = async (req, res) => {
  await newPassword(req, res, Usuario)
}

const perfil = async (req, res) => {
  const { usuario } = req
  res.json(usuario)
}
const updateUsuario = async (req, res) => {
  if (!req.usuario?.id)
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  const { id } = req.usuario
  const usuario = await Usuario.findById(id)
  if (!usuario) return res.status(400).send('Usuario no encontrado')
  try {
    
    usuario.avatar = req.body.avatar
    usuario.direccion = req.body.direccion
    usuario.piso = req.body.piso
    usuario.unidad = req.body.unidad
    usuario.provincia = req.body.provincia
    usuario.comuna = req.body.comuna
    usuario.barrio = req.body.barrio
    usuario.direccion = req.body.direccion
    usuario.hogar = req.body.hogar
    usuario.codigoPostal = req.body.codigoPostal
    usuario.ambientes = req.body.ambientes
    usuario.patio_jardin = req.body.patio_jardin
    usuario.telefono = req.body.telefono
    usuario.mascotas = req.body.mascotas
    usuario.desc_mascotas = req.body.desc_mascotas
    usuario.estado_domicilio = req.body.estado_domicilio
    await usuario.save()
    res.json({
      msg: 'Usuario actualizado con exito'
    })
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar el usuario' })
  }
}
export {
  nuevoUsuario,
  autenticar,
  comprobarToken,
  olvidePassword,
  nuevoPassword,
  perfil,
  updateUsuario
}
