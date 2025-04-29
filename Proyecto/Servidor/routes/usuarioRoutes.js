const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // Añadido validationResult
const usuarioController = require('../controllers/usuarioController');

// Ruta de registro con validaciones
router.post('/registro', 
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Ingresa un email válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  usuarioController.registrarUsuario
);

// Resto de las rutas
router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;