const express = require('express');
const router = express.Router();
const imagenController = require('../controllers/ImagenController');

// CRUD Imágenes
router.post('/', imagenController.crearImagen);
router.get('/sitio/:sitioId', imagenController.obtenerImagenesSitio);
router.get('/:id', imagenController.obtenerImagen);
router.put('/:id', imagenController.actualizarImagen);
router.delete('/:id', imagenController.eliminarImagen);

module.exports = router;