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
export {
  nuevoUsuario,
  autenticar,
  comprobarToken,
  olvidePassword,
  nuevoPassword,
  perfil
}
