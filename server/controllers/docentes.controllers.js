import { pool } from '../db.js';

// Docentes
export const getDocentes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM docente");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const addDocente = async (req, res) => {
    const { nombre } = req.body;
    try {
        await pool.query("INSERT INTO docente (nombre) VALUES (?)", [nombre]);
        res.json({ message: 'Docente added' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteDocente = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM docente WHERE id = ?", [id]);
        res.json({ message: 'Docente deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Niveles
export const getNivel = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM nivel");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const addNivel = async (req, res) => {
    const { nivel } = req.body;
    try {
        await pool.query("INSERT INTO nivel (nivel) VALUES (?)", [nivel]);
        res.json({ message: 'Nivel added' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteNivel = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM nivel WHERE id = ?", [id]);
        res.json({ message: 'Nivel deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Materias
export const getMaterias = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM materia");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const addMateria = async (req, res) => {
    const { materia } = req.body;
    try {
        await pool.query("INSERT INTO materia (materia) VALUES (?)", [materia]);
        res.json({ message: 'Materia added' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteMateria = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM materia WHERE id = ?", [id]);
        res.json({ message: 'Materia deleted' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDocente = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM docente WHERE ID_MATERIA = ?", [req.params.id_materia]);
        if (result.length === 0)
            return res.status(404).json({ message: "Materia no encontrada" });
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
