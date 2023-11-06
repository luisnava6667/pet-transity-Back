import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.APIKEYCLOUD,
  api_secret: process.env.APISECRETCLOUD
})

export default cloudinary
