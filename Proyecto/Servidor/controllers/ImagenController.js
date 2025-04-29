const Imagen = require('../models/Imagen');

exports.crearImagen = async (req, res) => {
    try {
        const imagenId = await Imagen.crear(req.body);
        res.status(201).json({ id: imagenId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerImagenesSitio = async (req, res) => {
    try {
        const imagenes = await Imagen.obtenerPorSitio(req.params.sitioId);
        res.json(imagenes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerImagen = async (req, res) => {
    try {
        const imagen = await Imagen.obtenerPorId(req.params.id);
        if (!imagen) return res.status(404).json({ error: 'Imagen no encontrada' });
        res.json(imagen);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarImagen = async (req, res) => {
    try {
        await Imagen.actualizar(req.params.id, req.body);
        res.json({ mensaje: 'Imagen actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.eliminarImagen = async (req, res) => {
    try {
        await Imagen.eliminar(req.params.id);
        res.json({ mensaje: 'Imagen eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};