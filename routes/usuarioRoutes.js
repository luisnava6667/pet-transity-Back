import express from 'express'
import {
  autenticar,
  comprobarToken,
  nuevoPassword,
  nuevoUsuario,
  olvidePassword,
  perfil
} from '../controllers/index.js'
import checkAuth from '../middleware/checkAuth.js'
import Usuario from '../models/Usuario.js'

const router = express.Router()

router.post('/', nuevoUsuario)
router.post('/login', autenticar)
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)
router.get('/perfil', checkAuth(Usuario), perfil)

export default router
