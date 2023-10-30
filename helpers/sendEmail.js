import { transporter } from '../config/mailer.js'

export const emailRegistro = async (datos) => {
  const { email, nombre, token, tipo } = datos
  await transporter.sendMail({
    from: '"PetTransity - Animales en Transito" <PetTransity@PetTransity.com>', // sender address
    to: email, // list of receivers
    subject: 'PetTransity - Comprueba tu cuenta', // Subject line
    text: 'Comprueba tu cuenta en PetTransity', // plain text body
    html: `
        <p>Hola ${nombre},</p> 
        <p>Gracias por registrarte en PetTransity.</p>
        <p>Para confirmar tu cuenta, por favor haz click en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>
    ` // html body
  })
}
export const emailRecuperar = async (datos) => {
  const { email, nombre, token } = datos
  await transporter.sendMail({
    from: '"PetTransity - Animales en Transito" <PetTransity@PetTransity.com>',
    to: email,
    subject: 'PetTransity - Recuperar contraseña',
    text: 'Recuperar contraseña en PetTransity',
    html: `
        <p>Hola ${nombre},</p> 
        <p>Para recuperar tu contraseña, por favor haz click en el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Recuperar contraseña</a>
    `
  })
}
