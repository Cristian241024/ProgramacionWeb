import {pool} from '../db.js';

export const getDocentes = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM docente");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ menssage: error.menssage});
    }
};

export const getNivel = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM nivel");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ menssage: error.menssage});
    }
};

export const getMaterias = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM materia");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ menssage: error.menssage});
    }
};

export const getDocente = async (req, res) => { //los docentes de la materia id
    try {
        const [result] = await pool.query("SELECT * FROM docente WHERE ID_MATERIA = ?", [req.params.id_materia]);
        if(result.length === 0)
        return res.status(404).json({menssage: "Materia no encontrada"});
        res.json(result);
    } catch (error) {
        return res.status(500).json({ menssage: error.menssage});
    }
};



