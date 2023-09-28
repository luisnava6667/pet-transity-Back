import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const refugioSchema = mongoose.Schema({
  razon_social: {
    type: String,
    required: true
  },
  cuit: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
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
  // departamento: {//ver
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Departamento'
  // },
  localidad: {
    type: String,
    require: true
  },
  estado_refugio: {
    type: String,
    require: true
  },
  web: {
    type: String
  },
  whatsApp: {
    type: String
  },
  confirmado: {
    type: Boolean,
    default: false
  },
  token: {
    type: String
  }
  // redes_link: {//ver
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Redes'
  // }
})

refugioSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
refugioSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const Refugio = mongoose.model('Refugio', refugioSchema)

export default Refugio
