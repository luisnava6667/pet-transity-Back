import express from 'express'
import checkRefugio from '../middleware/checkRefugio.js'
import { newPet } from '../controllers/index.js'
const router = express.Router()

router.post('/', checkRefugio, newPet)

export default router
