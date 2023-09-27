import express from 'express'
import { autenticar, confirmar, nuevoUsuario } from '../controllers/index.js'

const router = express.Router()

router.post('/', nuevoUsuario)
router.post('/login', autenticar)
router.get('/confirmar/:token', confirmar)

export default router
