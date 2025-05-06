const express = require('express');
const { check } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');
const validarCampos = require('../middlewares/validationMiddleware');
const verificarToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Ruta de registro
router.post('/registro', 
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Ingresa un email válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos // Middleware para validar los campos
  ],
  usuarioController.registrarUsuario
);

// Ruta de inicio de sesión
router.post('/login', 
  [
    check('email', 'Ingresa un email válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos // Middleware para validar los campos
  ],
  usuarioController.iniciarSesion
);

// Resto de las rutas
router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);
router.get('/perfil', verificarToken, usuarioController.obtenerPerfil);

module.exports = router;