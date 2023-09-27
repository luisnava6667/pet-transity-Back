const express = require('express')
const { registrar } = require('../controllers/index')

const router = express.Router()

router.post('/', registrar)

module.exports = router
