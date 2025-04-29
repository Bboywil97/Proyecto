const Usuario = require('../models/Usuario');


exports.registrarUsuario = async (req, res) => {
    const { nombre, email, password } = req.body;
  
    try {
      // Verificar si el usuario ya existe
      let usuario = await Usuario.obtenerPorEmail(email);
      if (usuario) {
        return res.status(400).json({ 
          success: false,
          error: 'El usuario ya existe' 
        });
      }
  
      // Crear hash de la contraseña
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
  
      // Crear nuevo usuario
      const nuevoUsuario = {
        nombre,
        email,
        password_hash: passwordHash,
        rol: 'usuario'
      };
  
      const usuarioId = await Usuario.crear(nuevoUsuario);
  
      // Generar token JWT
      const token = generarToken(usuarioId);
  
      res.status(201).json({
        success: true,
        token,
        user: {
          id: usuarioId,
          nombre,
          email,
          rol: 'usuario'
        }
      });
  
    } catch (error) {
      console.error('Error en registro:', error);
      res.status(500).json({ 
        success: false,
        error: 'Error en el servidor' 
      });
    }
  };
  

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.obtenerTodos();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.obtenerPorId(req.params.id);
        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        await Usuario.actualizar(req.params.id, req.body);
        res.json({ mensaje: 'Usuario actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.eliminar(req.params.id);
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};