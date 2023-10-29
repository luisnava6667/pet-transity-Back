import express from 'express'
import checkRefugio from '../middleware/checkRefugio.js'
import { deletePet, newPet, obtenerPets, petId, updatePet } from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
const router = express.Router()

router.post('/', checkAuth(Refugio), newPet)
router.get('/', checkAuth(Refugio), obtenerPets)

router
  .route('/:id')
  .get(checkAuth(Refugio), petId)
  .put(checkAuth(Refugio), updatePet)
  .delete(checkAuth(Refugio), deletePet)
export default router
