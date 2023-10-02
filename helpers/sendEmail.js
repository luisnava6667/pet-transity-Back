import { transporter } from '../config/mailer.js'

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos
  await transporter.sendMail({
    from: '"PetTransity - Administración de negocios" <PetTransity@PetTransity.com>', // sender address
    to: email, // list of receivers
    subject: 'PetTransity - Comprueba tu cuenta', // Subject line
    text: 'Comprueba tu cuenta en PetTransity', // plain text body
    html: `
        <p>Hola ${nombre},</p> 
        <p>Gracias por registrarte en PetTransity.</p>
        <p>Para confirmar tu cuenta, por favor haz click en el siguiente enlace:</p>
        <a href="http://localhost:3000/confirmar/${token}">Confirmar cuenta</a>
    ` // html body
  })
}
