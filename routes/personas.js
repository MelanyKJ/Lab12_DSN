const express = require('express')
const router = express.Router()

const personaController = require('../controllers/personaController')

//MOSTRAR
router.get('/', personaController.mostrar)

//CREAR
router.post('/crear', personaController.crear)
module.exports = router

//EDITAR
router.post('/editar', personaController.editar)
module.exports = router

//BORRAR
router.get('/borrar/:id', personaController.borrar)
module.exports = router
