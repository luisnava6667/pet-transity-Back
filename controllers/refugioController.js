import Refugio from '../models/Refugio.js'
import {
  authenticated,
  checkToken,
  confirm,
  forgetPassword,
  newEntrie,
  newPassword
} from './controllers.js'
const getAllRefugios = async (req, res) => {
  const refugios = await Refugio.find()
  res.json(refugios)
}
const nuevoRegfugio = async (req, res) => {
  await newEntrie(req, res, Refugio)
}
const autenticarRegfugio = async (req, res) => {
  await authenticated(req, res, Refugio)
}
const getRefugioById = async (req, res) => {
  const { id } = req.params
  const refugio = await Refugio.findById(id)
  if (!refugio) {
    return res.status(404).json({ msg: 'Refugio no encontrado' })
  }
  res.status(200).json(refugio)
}

const olvidePasswordRegfugio = async (req, res) => {
  await forgetPassword(req, res, Refugio)
}
const comprobarTokenRegfugio = async (req, res) => {
  await checkToken(req, res, Refugio)
}
const nuevoPasswordRegfugio = async (req, res) => {
  await newPassword(req, res, Refugio)
}

const perfilRegfugio = async (req, res) => {
  const { usuario } = req
  res.json(usuario)
}
const updateRegfugio = async (req, res) => {
  if (!req.usuario?.id)
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  const { id } = req.usuario
  const usuario = await Refugio.findById(id)
  if (!usuario) return res.status(400).send('Usuario no encontrado')
  try {
    usuario.razon_social = req.body.razon_social
    usuario.avatar = req.body.avatar
    usuario.direccion = req.body.direccion
    usuario.piso = req.body.piso
    usuario.unidad = req.body.unidad
    usuario.provincia = req.body.provincia
    usuario.comuna = req.body.comuna
    usuario.barrio = req.body.barrio
    usuario.codigoPostal = req.body.codigoPostal
    usuario.estado_refugio = req.body.estado_refugio
    usuario.web = req.body.web
    usuario.whatsApp = req.body.whatsApp
    usuario.youtube = req.body.youtube
    usuario.instagram = req.body.instagram
    usuario.facebook = req.body.facebook
    await usuario.save()
    res.json({
      msg: 'Usuario actualizado con exito'
    })
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar el usuario' })
  }
}
export {
  getAllRefugios,
  getRefugioById,
  nuevoRegfugio,
  autenticarRegfugio,
  
  comprobarTokenRegfugio,
  olvidePasswordRegfugio,
  nuevoPasswordRegfugio,
  updateRegfugio,
  perfilRegfugio
}
