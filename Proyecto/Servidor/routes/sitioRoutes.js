const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/SitioController');
const { verificarAuth } = require('../middlewares/auth');

// Obtener todos los sitios (público)
router.get('/', sitioController.obtenerSitios);

// Rutas protegidas
router.use(verificarAuth);

// Crear sitio
router.post('/', sitioController.crearSitio);

// Obtener, actualizar y eliminar sitio específico
router.route('/:id')
    .get(sitioController.obtenerSitio)
    .put(sitioController.actualizarSitio)
    .delete(sitioController.eliminarSitio);

module.exports = router;