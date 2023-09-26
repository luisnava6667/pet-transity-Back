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
  provincia: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provincia'
  },
  departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Departamento'
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
  redes_link: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Redes'
  }
})
