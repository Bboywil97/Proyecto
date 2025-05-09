const SitioTuristico = require('../Models/Sitios');

// Crear un nuevo sitio turístico
exports.crearSitio = async (req, res) => {
    try {
        const sitioId = await SitioTuristico.crear(req.body);
        res.status(201).json({ success: true, id: sitioId });
    } catch (error) {
        console.error('Error al crear el sitio:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Obtener todos los sitios turísticos
exports.obtenerSitios = async (req, res) => {
    try {
        const sitios = await SitioTuristico.obtenerTodos();
        res.status(200).json({ success: true, data: sitios });
    } catch (error) {
        console.error('Error al obtener los sitios:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Obtener un sitio turístico por ID
exports.obtenerSitioPorId = async (req, res) => {
    try {
        const sitio = await SitioTuristico.obtenerPorId(req.params.id);
        if (!sitio) {
            return res.status(404).json({ success: false, error: 'Sitio no encontrado' });
        }
        res.status(200).json({ success: true, data: sitio });
    } catch (error) {
        console.error('Error al obtener el sitio:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Actualizar un sitio turístico
exports.actualizarSitio = async (req, res) => {
    try {
        await SitioTuristico.actualizar(req.params.id, req.body);
        res.status(200).json({ success: true, message: 'Sitio actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el sitio:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};

// Eliminar un sitio turístico
exports.eliminarSitio = async (req, res) => {
    try {
        await SitioTuristico.eliminar(req.params.id);
        res.status(200).json({ success: true, message: 'Sitio eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el sitio:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};