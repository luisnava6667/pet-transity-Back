import mongoose from 'mongoose'

const animalesSchema = mongoose.Schema({
  especie: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  tamaño: {
    type: String,
    required: true,
    enum: ['Chico', 'Mediano', 'Grande']
  },
  personal: {
    type: String
  },
  salud: {
    type: String
  },
  fecha_ingreso: {
    type: Date,
    default: Date.now,
    required: true
  },
  fecha_egreso: {
    type: Date,
    default: Date.now,
    required: true
  },
  estado: {
    type: Boolean,
    required: true
  },
  //imagen del animal
  image: {
    type: String,
    required: true
  },
  refugio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Refugio'
  }
})
//! Solo para capital federal

const Animales = mongoose.model('Animales', animalesSchema)
export default Animales
