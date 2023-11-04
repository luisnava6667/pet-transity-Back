import jwt from 'jsonwebtoken'

const checkAuth = (model) => async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET) // Verifica el token
      req.usuario = await model
        .findById(decoded.id)
        .select('-password -confirmado -token -createdAt -updatedAt -__v')
      // console.log({ usuario: req.usuario })
      return next()
    } catch (error) {
      console.log(error) // Imprime cualquier error que ocurra durante la verificación del token
      return res.status(404).json({ msg: 'Hubo un error' })
    }
  }
  next()
}
export default checkAuth
