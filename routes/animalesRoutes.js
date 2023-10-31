import express from 'express'
import {
  deletePet,
  newPet,
  obtenerPets,
  petId,
  updatePet
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
import checkRefugio from '../middleware/checkRefugio.js'
const router = express.Router()

router.post('/', checkAuth(Refugio), newPet)
router.get('/', obtenerPets)

router
  .route('/:id')
  .get(checkAuth(Refugio), petId)
  .put(checkAuth(Refugio), updatePet)
  .delete(checkAuth(Refugio), deletePet)
export default router
