const express = require('express');
const router = express.Router();
const SitiosController = require('../Controllers/SitiosController');

// Crear un nuevo sitio turístico
router.post('/', SitiosController.crearSitio);

// Obtener todos los sitios turísticos
router.get('/', SitiosController.obtenerSitios);

// Obtener un sitio turístico por ID
router.get('/:id', SitiosController.obtenerSitioPorId);

// Actualizar un sitio turístico
router.put('/:id', SitiosController.actualizarSitio);

// Eliminar un sitio turístico
router.delete('/:id', SitiosController.eliminarSitio);

module.exports = router;