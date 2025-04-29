const pool = require('../bd'); // Asegúrate de que la ruta sea correcta
class Imagen {
    static async crear(imagenData) {
        const [result] = await pool.execute(
            'INSERT INTO imagenes (sitio_id, url_imagen, es_principal, descripcion) VALUES (?, ?, ?, ?)',
            [imagenData.sitio_id, imagenData.url_imagen, imagenData.es_principal || false, imagenData.descripcion]
        );
        return result.insertId;
    }

    static async obtenerPorSitio(sitioId) {
        const [rows] = await pool.query('SELECT * FROM imagenes WHERE sitio_id = ?', [sitioId]);
        return rows;
    }

    static async obtenerPorId(id) {
        const [rows] = await pool.query('SELECT * FROM imagenes WHERE id = ?', [id]);
        return rows[0];
    }

    static async actualizar(id, imagenData) {
        await pool.execute(
            'UPDATE imagenes SET url_imagen = ?, es_principal = ?, descripcion = ? WHERE id = ?',
            [imagenData.url_imagen, imagenData.es_principal, imagenData.descripcion, id]
        );
    }

    static async eliminar(id) {
        await pool.execute('DELETE FROM imagenes WHERE id = ?', [id]);
    }
}

module.exports = Imagen;