import mongoose from 'mongoose'

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
