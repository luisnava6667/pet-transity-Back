import express from 'express'
import checkRefugio from '../middleware/checkRefugio.js'
import { deletePet, newPet, obtenerPets, petId, updatePet } from '../controllers/index.js'
const router = express.Router()

router.post('/', checkRefugio, newPet)
router.get('/', checkRefugio, obtenerPets)

router
  .route('/:id')
  .get(checkRefugio, petId)
  .put(checkRefugio, updatePet)
  .delete(checkRefugio, deletePet)
export default router
