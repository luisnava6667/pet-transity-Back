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
  personalidad: {
    type: String
  },
  salud: {
    type: String
  },
  fecha_ingreso: {
    type: String,
    default: Date,
    required: true
  },
  fecha_egreso: {
    type: String
    // required: true
  },
  estado: {
    type: Boolean,
    required: true
  },
  //imagen del animal
  avatar: {
    type: String,
    default:
      'https://images.vexels.com/media/users/3/201898/isolated/preview/55be9a1a39abff39bc3596e8ddd224cd-trazo-de-huella-de-perro-azul.png'
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario'
    }
  ],
  refugio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Refugio'
  },
  observaciones: {
    type: String
  }
})

const Animales = mongoose.model('Animales', animalesSchema)
export default Animales
