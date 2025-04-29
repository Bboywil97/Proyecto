const pool = require('../bd'); // Importa el pool de conexiones

class Sitio {
    static async crear(sitioData) {
        const [result] = await pool.execute(
            'INSERT INTO sitios_turisticos (nombre, descripcion, ubicacion, pais, ciudad, latitud, longitud, precio_entrada, horario_apertura, horario_cierre, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                sitioData.nombre,
                sitioData.descripcion,
                sitioData.ubicacion,
                sitioData.pais,
                sitioData.ciudad,
                sitioData.latitud || null,  // Usa null si no está definido
                sitioData.longitud || null,
                sitioData.precio_entrada || null,
                sitioData.horario_apertura || null,
                sitioData.horario_cierre || null,
                sitioData.usuario_id || null
            ]
        );
        return result.insertId;
    }

    static async obtenerTodos() {
        const [rows] = await pool.query(`
            SELECT s.*, u.nombre as usuario_nombre 
            FROM sitios_turisticos s
            LEFT JOIN usuarios u ON s.usuario_id = u.id
        `);
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await pool.query(`
            SELECT s.*, u.nombre as usuario_nombre 
            FROM sitios_turisticos s
            LEFT JOIN usuarios u ON s.usuario_id = u.id
            WHERE s.id = ?
        `, [id]);
        return rows[0];
    }

    static async actualizar(id, sitioData) {
        await pool.execute(
            'UPDATE sitios_turisticos SET nombre = ?, descripcion = ?, ubicacion = ?, pais = ?, ciudad = ?, latitud = ?, longitud = ?, precio_entrada = ?, horario_apertura = ?, horario_cierre = ?, usuario_id = ? WHERE id = ?',
            [
                sitioData.nombre,
                sitioData.descripcion,
                sitioData.ubicacion,
                sitioData.pais,
                sitioData.ciudad,
                sitioData.latitud || null,
                sitioData.longitud || null,
                sitioData.precio_entrada || null,
                sitioData.horario_apertura || null,
                sitioData.horario_cierre || null,
                sitioData.usuario_id || null,
                id
            ]
        );
    }

    static async eliminar(id) {
        await pool.execute('DELETE FROM sitios_turisticos WHERE id = ?', [id]);
    }
}

module.exports = Sitio;