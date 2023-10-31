import express from 'express'
import {
  deletePet,
  newPet,
  obtenerMiPets,
  obtenerPets,
  myPetId,
  petId,
  updatePet
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
import checkRefugio from '../middleware/checkRefugio.js'
import Usuario from '../models/Usuario.js'
const router = express.Router()

router.post('/', checkAuth(Refugio), newPet)
router.get('/myPets', checkAuth(Refugio), obtenerMiPets)
router.get('/', obtenerPets)

router.get('/:id', checkAuth(Usuario), petId)
router
  .route('/myPet/:id')
  .get(checkAuth(Refugio), myPetId)
  .put(checkAuth(Refugio), updatePet)
  .delete(checkAuth(Refugio), deletePet)
export default router
