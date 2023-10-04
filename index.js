import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { animalesRoutes, refugioRoutes, usuarioRoutes } from './routes/index.js'

const app = express()

app.use(express.json())
dotenv.config()

connectDB()

// app.use((_req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//   next()
// })
app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use('/usuarios', usuarioRoutes)
app.use('/refugio', refugioRoutes)
app.use('/animales', animalesRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`⚡️ Server running on port ${PORT}!!! ⚡️`)
})
