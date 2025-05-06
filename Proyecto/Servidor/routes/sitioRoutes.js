const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');

// Obtener todos los sitios (público)
router.get('/', sitioController.obtenerSitios);

// Crear sitio
router.post('/', sitioController.crearSitio);

// Obtener, actualizar y eliminar sitio específico
router.route('/:id')
    .get(sitioController.obtenerSitio)
    .put(sitioController.actualizarSitio)
    .delete(sitioController.eliminarSitio);

module.exports = router;