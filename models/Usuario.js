import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  direccion: {
    type: String,
    require: true
  },
  piso: {
    type: String
  },
  unidad: {
    type: String
  },
  codigoPostal: {
    type: String,
    require: true
  },
  provincia: {
    type: String,
    require: true,
    default: 'CABA'
  },
  comuna: {
    type: String
  },
  localidad: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'usuarios'
  },
  barrio: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  whatsApp: {
    type: String,
    require: true
  },
  hogar: {
    type: String,
    require: true
  },
  ambientes: {
    type: Number,
    require: true
  },
  patio_jardin: {
    type: Boolean,
    require: true
  },
  mascotas: {
    type: Boolean,
    require: true
  },
  desc_mascotas: {
    type: String
  },
  estado_domicilio: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    default:
      'https://cdn.create.vista.com/api/media/small/385289964/stock-vector-pet-adopt-family-plays-with-dog-at-animal-shelter'
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Animales'
    }
  ],
  confirmado: {
    type: Boolean,
    default: false
  },
  token: {
    type: String
  }
})

usuarioSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
usuarioSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario
