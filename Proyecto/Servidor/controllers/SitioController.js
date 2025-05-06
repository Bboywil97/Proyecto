const pool = require('../bd'); // Conexión a la base de datos

exports.obtenerSitios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sitios');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los sitios' });
    }
};

exports.crearSitio = async (req, res) => {
    const { nombre, descripcion, ubicacion } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO sitios (nombre, descripcion, ubicacion) VALUES (?, ?, ?)',
            [nombre, descripcion, ubicacion]
        );
        res.status(201).json({ id: result.insertId, nombre, descripcion, ubicacion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el sitio' });
    }
};

exports.obtenerSitio = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM sitios WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Sitio no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el sitio' });
    }
};

exports.actualizarSitio = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, ubicacion } = req.body;
    try {
        const [result] = await pool.execute(
            'UPDATE sitios SET nombre = ?, descripcion = ?, ubicacion = ? WHERE id = ?',
            [nombre, descripcion, ubicacion, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Sitio no encontrado' });
        }
        res.json({ id, nombre, descripcion, ubicacion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el sitio' });
    }
};

exports.eliminarSitio = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.execute('DELETE FROM sitios WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Sitio no encontrado' });
        }
        res.json({ message: 'Sitio eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el sitio' });
    }
};