const express = require('express');
const { check, validationResult } = require('express-validator');
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middlewares/authMiddleware');

const router = express.Router();

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

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