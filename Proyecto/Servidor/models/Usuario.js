const pool = require('../bd'); // Conexión a la base de datos
const bcrypt = require('bcrypt'); // Importar bcrypt para encriptar contraseñas

class Usuario {
    static async crear(usuarioData) {
        // Validación básica
        if (!usuarioData.nombre || !usuarioData.email || !usuarioData.password) {
            throw new Error('Nombre, email y password son requeridos');
        }

        // Verificar si el usuario ya existe
        const [existing] = await pool.execute(
            'SELECT id FROM usuarios WHERE email = ?', 
            [usuarioData.email]
        );
        
        if (existing.length > 0) {
            throw new Error('El email ya está registrado');
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(usuarioData.password, salt);

        // Insertar nuevo usuario
        const [result] = await pool.execute(
            'INSERT INTO usuarios (nombre, email, password_hash, rol) VALUES (?, ?, ?, ?)',
            [
                usuarioData.nombre,
                usuarioData.email,
                passwordHash,
                usuarioData.rol || 'usuario' // Rol por defecto
            ]
        );

        return result.insertId; // Retorna el ID del usuario insertado
    }

    static async obtenerTodos() {
        const [rows] = await pool.query('SELECT id, nombre, email, rol FROM usuarios');
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await pool.query('SELECT id, nombre, email, rol FROM usuarios WHERE id = ?', [id]);
        return rows[0];
    }

    static async actualizar(id, usuarioData) {
        await pool.execute(
            'UPDATE usuarios SET nombre = ?, email = ?, rol = ? WHERE id = ?',
            [usuarioData.nombre, usuarioData.email, usuarioData.rol, id]
        );
    }

    static async eliminar(id) {
        await pool.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    }

    static async obtenerPorEmail(email) {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return rows[0]; // Devuelve el primer resultado o undefined si no hay resultados
    }
}

module.exports = Usuario;