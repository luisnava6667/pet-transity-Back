const mongoose = require('mongoose')

const provinciaSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    enum: [
      'Buenos Aires',
      'Catamarca',
      'Chaco',
      'Chubut',
      'Córdoba',
      'Corrientes',
      'Entre Ríos',
      'Formosa',
      'Jujuy',
      'La Pampa',
      'La Rioja',
      'Mendoza',
      'Misiones',
      'Neuquén',
      'Rio Negro',
      'Salta',
      'San Juan',
      'San Luis',
      'Santa Cruz',
      'Santa Fe',
      'Santiago del Estero',
      'Tierra del Fuego',
      'Tucuman'
    ]
  }
})

const Provincias = mongoose.model('Provincias', provinciaSchema)

module.exports = Provincias