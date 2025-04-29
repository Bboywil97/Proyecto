const Sitio = require('../models/Sitio');

exports.crearSitio = async (req, res) => {
    try {
        const sitioId = await Sitio.crear(req.body);
        res.status(201).json({ id: sitioId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerSitios = async (req, res) => {
    try {
        const sitios = await Sitio.obtenerTodos();
        res.json(sitios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerSitio = async (req, res) => {
    try {
        const sitio = await Sitio.obtenerPorId(req.params.id);
        if (!sitio) return res.status(404).json({ error: 'Sitio no encontrado' });
        res.json(sitio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarSitio = async (req, res) => {
    try {
        await Sitio.actualizar(req.params.id, req.body);
        res.json({ mensaje: 'Sitio actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarSitio = async (req, res) => {
    try {
        await Sitio.eliminar(req.params.id);
        res.json({ mensaje: 'Sitio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};