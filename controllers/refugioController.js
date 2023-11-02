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
const changeState = async (req, res) => {
  const { id, estado } = req.body
  const refugio = await Refugio.findById(id)
  if (!refugio) {
    return res.status(404).json({ msg: 'Refugio no encontrado' })
  }
  refugio.estado = estado
  await refugio.save()
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
export {
  getAllRefugios,
  getRefugioById,
  nuevoRegfugio,
  autenticarRegfugio,
  changeState,
  comprobarTokenRegfugio,
  olvidePasswordRegfugio,
  nuevoPasswordRegfugio,
  perfilRegfugio
}
