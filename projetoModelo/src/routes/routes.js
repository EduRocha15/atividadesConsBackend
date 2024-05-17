const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')

router.post('/cargos', CargoController.create)

module.exports = router