import express from 'express'
import {
  autenticarRegfugio,
  comprobarTokenRegfugio,
  getAllRefugios,
  getRefugioById,
  nuevoPasswordRegfugio,
  nuevoRegfugio,
  olvidePasswordRegfugio,
  perfilRegfugio,
  updateRegfugio
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
import checkRefugio from '../middleware/checkRefugio.js'

const router = express.Router()

router.get('/all', getAllRefugios)
router.post('/', nuevoRegfugio)

router.post('/login', autenticarRegfugio)
router.get('/perfil', checkAuth(Refugio), perfilRegfugio)
router.put('/update-info', checkAuth(Refugio), updateRegfugio)

// router.get('/view/:id', getRefugioById)
//   .route('/olvide-password/:token')
//   .get(comprobarTokenRegfugio)
//   .post(nuevoPasswordRegfugio)
export default router
