import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { animalesRoutes, refugioRoutes, usuarioRoutes } from './routes/index.js'
import Refugio from './models/Refugio.js'
import Usuario from './models/Usuario.js'
import {
  checkToken,
  checkTokenPassword,
  confirm,
  newPassword
} from './controllers/controllers.js'
import cors from 'cors'

const app = express()

app.use(express.json())
dotenv.config()

connectDB()

const whitelist = [process.env.FRONTEND_URL]

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      console.log(`Solicitud desde origen permitido: ${origin}`)
      callback(null, true)
    } else {
      // No está permitido
      console.log(`Solicitud desde origen no permitido: ${origin}`)
      callback(new Error('Error de Cors'))
    }
  }
}

app.use(cors(corsOptions))

app.get('/confirm/:token', (req, res) => {
  confirm(req, res, [Refugio, Usuario])
})
const verificarToken = async (req, res, next) => {
  await checkTokenPassword(req, res, [Refugio, Usuario])
  next()
}
const confirmarPassword = async (req, res, next) => {
  await newPassword(req, res, [Refugio, Usuario])
}

app.route('/nuevo-password/:token').get(verificarToken).post(confirmarPassword)

app.use('/usuarios', usuarioRoutes)
app.use('/refugio', refugioRoutes)
app.use('/animales', animalesRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`⚡️ Server running on port ${PORT}!!! ⚡️`)
})
//
