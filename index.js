const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db.js')
const usuarioRoutes = require('./routes/usuarioRoutes.js')

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use('/', usuarioRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`⚡️ Server running on port ${PORT}!!! ⚡️`)
})
