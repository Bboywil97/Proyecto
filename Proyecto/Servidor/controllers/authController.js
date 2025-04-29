const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

// Registrar usuario
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let usuario = await Usuario.obtenerPorEmail(email);
        if (usuario) {
            return res.status(400).json({ errors: [{ msg: 'El usuario ya existe' }] });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Crear nuevo usuario
        const newUser = {
            nombre: name,
            email,
            password_hash: passwordHash,
            rol: 'usuario'
        };

        const userId = await Usuario.crear(newUser);

        // Crear y devolver token JWT
        const payload = {
            user: {
                id: userId,
                rol: 'usuario'
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                res.json({ 
                    token,
                    user: {
                        id: userId,
                        name,
                        email,
                        rol: 'usuario'
                    }
                });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};

// Autenticar usuario
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const usuario = await Usuario.obtenerPorEmail(email);
        if (!usuario) {
            return res.status(400).json({ errors: [{ msg: 'Credenciales inválidas' }] });
        }

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, usuario.password_hash);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Credenciales inválidas' }] });
        }

        // Crear y devolver token JWT
        const payload = {
            user: {
                id: usuario.id,
                rol: usuario.rol
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5h' },
            (err, token) => {
                if (err) throw err;
                res.json({ 
                    token,
                    user: {
                        id: usuario.id,
                        name: usuario.nombre,
                        email: usuario.email,
                        rol: usuario.rol
                    }
                });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error en el servidor');
    }
};