import express from 'express'
import {
  autenticarRegfugio,
  comprobarTokenRegfugio,
  getAllRefugios,
  nuevoPasswordRegfugio,
  nuevoRegfugio,
  olvidePasswordRegfugio,
  perfilRegfugio
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.post('/', nuevoRegfugio)
router.get('/all', getAllRefugios)
router.post('/login', autenticarRegfugio)
router.post('/olvide-password', olvidePasswordRegfugio)
router
  .route('/olvide-password/:token')
  .get(comprobarTokenRegfugio)
  .post(nuevoPasswordRegfugio)
router.get('/perfil', checkAuth(Refugio), perfilRegfugio)
export default router
