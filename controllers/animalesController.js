import Animales from '../models/Animales.js'
import Refugio from '../models/Refugio.js'
import Usuario from '../models/Usuario.js'

const newPet = async (req, res) => {
  if (!req.usuario?.id) {
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  }
  const idRefugio = req.usuario.id
  const existeRefugio = await Refugio.findById(idRefugio)
  if (!existeRefugio) {
    return res.status(404).json({ msg: 'Refugio no encontrado' })
  }
  try {
    const pet = new Animales(req.body)
    pet.refugio = req.usuario._id
    const petAlamcenado = await pet.save()
    existeRefugio.pets.push(petAlamcenado._id)
    await existeRefugio.save()
    res.status(201).json(petAlamcenado)
  } catch (error) {
    console.log(error)
  }
}
const obtenerMiPets = async (req, res) => {
  if (!req.usuario?.id) {
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  }
  const idRefugio = req.usuario._id

  const existeRefugio = await Refugio.findById(idRefugio)
  if (!existeRefugio) {
    return res.status(404).json({ msg: 'Refugio no encontrado' })
  }
  if (idRefugio.toString() !== existeRefugio._id.toString()) {
    return res
      .status(404)
      .json({ msg: 'No tienes permiso para ver estos datos' })
  } else {
    const pets = await Animales.find({ refugio: idRefugio })
    res.status(200).json(pets)
  }
}
const obtenerPets = async (req, res) => {
  if (!req.usuario?.id) {
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  }
  const pets = await Animales.find()
  res.status(200).json(pets)
}
const petId = async (req, res) => {
  if (!req.usuario?.id) {
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  }
  const { id } = req.params
  const pet = await Animales.findById(id)
  if (!pet) {
    return res.status(404).json({ msg: 'Mascota no encontrada' })
  }
  const refugio = await Refugio.findById(pet.refugio)

  res.status(200).json({ pet, refugio })
}
const myPetId = async (req, res) => {
  if (!req.usuario?.id) {
    return res
      .status(404)
      .json({ msg: 'No tienes acceso para realizar esta operacion' })
  }
  const { id } = req.params
  const pet = await Animales.findById(id)
  if (!pet) {
    return res.status(404).json({ msg: 'Mascota no encontrada' })
  }
  if (pet.refugio.toString() !== req.usuario.id.toString()) {
    return res
      .status(404)
      .json({ msg: 'No tienes permiso para ver estos datos' })
  }
  res.status(200).json(pet)
}
const updatePet = async (req, res) => {
  const { id } = req.params
  const pet = await Animales.findById(id)
  if (!pet) {
    return res.status(404).json({ msg: 'Mascota no encontrada' })
  }
  if (pet.refugio.toString() !== req.usuario._id.toString()) {
    return res
      .status(404)
      .json({ msg: 'No tienes permiso para ver estos datos' })
  }

  pet.especie = req.body.especie || pet.especie
  pet.raza = req.body.raza || pet.raza
  pet.nombre = req.body.nombre || pet.nombre
  pet.edad = req.body.edad || pet.edad
  pet.peso = req.body.peso || pet.peso
  pet.tamaño = req.body.tamaño || pet.tamaño
  pet.image = req.body.image || pet.image
  try {
    const animalActualizado = await pet.save()
    res.status(200).json(animalActualizado)
  } catch (error) {
    console.log(error)
  }
}
const deletePet = async (req, res) => {
  const { id } = req.params
  const idUser = req.usuario._id.toString()

  try {
    // Verifica que el usuario existe
    const user = await Refugio.findById(idUser)
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }

    // Verifica si la mascota existe
    const pet = await Animales.findById(id)
    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no encontrada' })
    }

    // Verifica si el usuario tiene permisos para eliminar la mascota
    if (pet.refugio.toString() !== req.usuario._id.toString()) {
      return res
        .status(404)
        .json({ msg: 'No tienes permiso para ver estos datos' })
    }

    // Actualiza el array de mascotas del usuario eliminando el ID de la mascota

    // Puedes eliminar la mascota si es necesario
    await Animales.findByIdAndDelete(id)
    await Refugio.updateOne({ _id: idUser }, { $pull: { pets: id } })

    res.status(200).json({ msg: 'Mascota eliminada del usuario' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Error interno del servidor' })
  }
}
const changeState = async (req, res) => {
  const { idAnimal } = req.params
  const pet = await Animales.findById(idAnimal)

  if (!pet) {
    return res.status(404).json({ msg: 'Mascota no encontrada' })
  }
  if (pet.estado === true) {
    pet.users = null
  }
  pet.estado = !pet.estado
  if (pet.users) {
    user.pets = user.pets.filter(
      (pet) => pet.toString() !== idAnimal.toString()
    )
    await user.save()
  }

  await pet.save()
  res.status(200).json({ mg: 'Estado cambiado' })
}
const asignedUser = async (req, res) => {
  const { idAnimal } = req.params
  const { email } = req.body
  try {
    const pet = await Animales.findById(idAnimal)
    const usuario = await Usuario.findOne({ email })
    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no encontrada' })
    }
    if (!usuario) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }
    if (pet.refugio.toString() !== req.usuario._id.toString()) {
      return res
        .status(404)
        .json({ msg: 'No tienes permiso para realizar esta operacion' })
    }
    pet.users = usuario._id
    pet.estado = false
    usuario.pets.push(pet._id)
    await Promise.all([pet.save(), usuario.save()])
    res.status(200).json({ msg: 'Usuario asignado' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: 'Error en el servidor' })
  }
}
export {
  newPet,
  obtenerPets,
  obtenerMiPets,
  myPetId,
  petId,
  updatePet,
  deletePet,
  changeState,
  asignedUser
}
