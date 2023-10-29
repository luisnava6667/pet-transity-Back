import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const refugioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  razon_social: {
    type: String,
    required: true
  },
  img: {
    type: String,
    default:
      'https://img.freepik.com/vector-premium/refugio-perros-ilustracion-personaje-mujer-hombre-gente-mascota-dibujos-animados-cachorro-hogar-jaula-mira-familia-padre-e-hijo-preocupan-perro-callejero-feliz-ayuda-rescate-adopta-diseno_169479-1292.jpg'
  },
  cuit: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'refugio'
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
  provincia: {
    type: String,
    require: true,
    default: 'CABA'
  },
  departamento: {
    type: String
  },
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
  facebook: {
    type: String
  },
  youtube: {
    type: String
  },
  instagram: {
    type: String
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Animales'
    }
  ],
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  token: {
    type: String
  },
  confirmado: {
    type: Boolean,
    default: false
  }
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
