import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'navaluisrodolfo@gmail.com',
    pass: 'rwzktmdguzzjazxh'
  }
})
transporter.verify().then(() => {
  console.log('Ready for send emails')
})