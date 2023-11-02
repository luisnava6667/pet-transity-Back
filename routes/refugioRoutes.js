import express from 'express'
import {
  autenticarRegfugio,
  comprobarTokenRegfugio,
  getAllRefugios,
  getRefugioById,
  changeState,
  nuevoPasswordRegfugio,
  nuevoRegfugio,
  olvidePasswordRegfugio,
  perfilRegfugio
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
import checkRefugio from '../middleware/checkRefugio.js'

const router = express.Router()

router.get('/all', getAllRefugios)
router.post('/', nuevoRegfugio)
// router.post('/state', checkAuth(Refugio), changeState)
router.post('/login', autenticarRegfugio)
router.post('/olvide-password', olvidePasswordRegfugio)
// router
router.get('/perfil', checkAuth(Refugio), perfilRegfugio)

// router.get('/view/:id', getRefugioById)
//   .route('/olvide-password/:token')
//   .get(comprobarTokenRegfugio)
//   .post(nuevoPasswordRegfugio)
export default router
