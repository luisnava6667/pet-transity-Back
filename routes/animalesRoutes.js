import express from 'express'
import {
  deletePet,
  newPet,
  obtenerMiPets,
  obtenerPets,
  myPetId,
  petId,
  updatePet,
  changeState,
  newPetUser
} from '../controllers/index.js'
import Refugio from '../models/Refugio.js'
import checkAuth from '../middleware/checkAuth.js'
import checkRefugio from '../middleware/checkRefugio.js'
import Usuario from '../models/Usuario.js'
const router = express.Router()

router.post('/', checkAuth(Refugio), newPet)
router.post('/user', checkAuth(Usuario), newPetUser)
router.get('/myPets', checkAuth(Refugio), obtenerMiPets)
router.get('/', checkAuth(Usuario), obtenerPets)
router.put('/state/:idAnimal', checkAuth(Refugio), changeState)
router
  .route('/myPet/:id')
  .get(checkAuth(Refugio), myPetId)
  .delete(checkAuth(Refugio), deletePet)
router.put('/myPet/:id', checkAuth(Refugio), updatePet)
router.put('/userPet/:id', checkAuth(Usuario), updatePet)
router.get('/view/:id', checkAuth(Usuario), petId)
export default router
