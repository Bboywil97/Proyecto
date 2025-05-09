const pool = require('../bd2'); // Conexión a la base de datos

class SitioTuristico {
    // Crear un nuevo sitio turístico
    static async crear(sitioData) {
        const { nombre, descripcion, ubicacion, pais, estado, ciudad, precio_entrada, horario_apertura, horario_cierre, imagen_url } = sitioData;
        const [result] = await pool.execute(
            `INSERT INTO sitios_turisticos (nombre, descripcion, ubicacion, pais, estado, ciudad, precio_entrada, horario_apertura, horario_cierre, imagen_url)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [nombre, descripcion, ubicacion, pais, estado, ciudad, precio_entrada, horario_apertura, horario_cierre, imagen_url]
        );
        return result.insertId; // Retorna el ID del sitio insertado
    }

    // Obtener todos los sitios turísticos
    static async obtenerTodos() {
        const [rows] = await pool.query('SELECT * FROM sitios_turisticos');
        return rows;
    }

    // Obtener un sitio turístico por ID
    static async obtenerPorId(id) {
        const [rows] = await pool.query('SELECT * FROM sitios_turisticos WHERE id = ?', [id]);
        return rows[0];
    }

    // Actualizar un sitio turístico
    static async actualizar(id, sitioData) {
        const { nombre, descripcion, ubicacion, pais, estado, ciudad, precio_entrada, horario_apertura, horario_cierre, imagen_url } = sitioData;
        await pool.execute(
            `UPDATE sitios_turisticos
             SET nombre = ?, descripcion = ?, ubicacion = ?, pais = ?, estado = ?, ciudad = ?, precio_entrada = ?, horario_apertura = ?, horario_cierre = ?, imagen_url = ?
             WHERE id = ?`,
            [nombre, descripcion, ubicacion, pais, estado, ciudad, precio_entrada, horario_apertura, horario_cierre, imagen_url, id]
        );
    }

    // Eliminar un sitio turístico
    static async eliminar(id) {
        await pool.execute('DELETE FROM sitios_turisticos WHERE id = ?', [id]);
    }
}

module.exports = SitioTuristico;
