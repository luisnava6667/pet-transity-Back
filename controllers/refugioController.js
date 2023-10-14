import Refugio from '../models/Refugio.js'
import {
  authenticated,
  checkToken,
  confirm,
  forgetPassword,
  newEntrie,
  newPassword
} from './controllers.js'

const nuevoRegfugio = async (req, res) => {
  await newEntrie(req, res, Refugio)
}
const autenticarRegfugio = async (req, res) => {
  await authenticated(req, res, Refugio)
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
  nuevoRegfugio,
  autenticarRegfugio,
  comprobarTokenRegfugio,
  olvidePasswordRegfugio,
  nuevoPasswordRegfugio,
  perfilRegfugio
}
