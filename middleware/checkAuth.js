import jwt from 'jsonwebtoken'

const checkAuth = (model) => async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      console.log(String(token)) // Asegúrate de que el token tenga el formato correcto
      const decoded = jwt.verify(String(token), process.env.JWT_SECRET) // Verifica el token

      console.log('Token decodificado:')
      console.log(decoded) // Imprime el token decodificado

      req.usuario = await model
        .findById(decoded.id)
        .select('-password -confirmado -token -createdAt -updatedAt -__v')

      return next()
    } catch (error) {
      console.log({ error }) // Imprime cualquier error que ocurra durante la verificación del token
      return res.status(404).json({ msg: 'Hubo un error' })
    }
  }
}
export default checkAuth