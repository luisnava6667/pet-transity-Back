import Animales from '../models/Animales.js'

const newPet = async (req, res) => {
  const pet = new Animales(req.body)
  console.log(req);
//   pet.refugio  = req.
}

export { newPet }
