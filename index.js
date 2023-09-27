import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()
app.use(express.json())

connectDB()

// app.use((_req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
//   next()
// })
app.get('/', async (req, res) => {
  res.send('Hello World!')
})
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`⚡️ Server running on port ${PORT}!!! ⚡️`)
})
