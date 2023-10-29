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
  // provincia: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Provincia'
  // },
  // departamento: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Departamento'
  // },
  localidad: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: 'usuario'
  },

  password: {
    type: String,
    require: true
  },
  telefono: {
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
  img: {
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
  historial: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Historial'
    }
  ],
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
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
