const mongoose = require('mongoose')


const redesSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

const Redes = mongoose.model('Redes', redesSchema)

module.exports = Redes
