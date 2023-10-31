import Animales from '../models/Animales.js'
import Refugio from '../models/Refugio.js'

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
const obtenerPets = async (req, res) => {
  

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
const petId = async (req, res) => {
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
  const pet = await Animales.findById(id)
  if (!pet) {
    return res.status(404).json({ msg: 'Mascota no encontrada' })
  }
  if (pet.refugio.toString() !== req.usuario._id.toString()) {
    return res
      .status(404)
      .json({ msg: 'No tienes permiso para ver estos datos' })
  }
  try {
    await Animales.findByIdAndDelete(id)
    res.status(200).json({ msg: 'Mascota eliminada' })
  } catch (error) {
    console.log(error)
  }
}
export { newPet, obtenerPets, petId, updatePet, deletePet }
