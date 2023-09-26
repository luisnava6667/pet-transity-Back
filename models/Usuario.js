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
  role_id: {
    type: Number,
    require: true,
    default: 0
  },

  password: {
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
  }
})
