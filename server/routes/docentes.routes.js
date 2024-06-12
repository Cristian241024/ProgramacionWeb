import { Router } from "express";
import {
    getDocentes, addDocente, deleteDocente,
    getNivel, addNivel, deleteNivel,
    getMaterias, addMateria, deleteMateria,
    getDocente
} from "../controllers/docentes.controllers.js";

const router = Router();

// Docentes
router.get('/docentes', getDocentes);
router.post('/docentes', addDocente);
router.delete('/docentes/:id', deleteDocente);
router.get('/docentes/:id_materia', getDocente);

// Niveles
router.get('/niveles', getNivel);
router.post('/niveles', addNivel);
router.delete('/niveles/:id', deleteNivel);

// Materias
router.get('/materias', getMaterias);
router.post('/materias', addMateria);
router.delete('/materias/:id', deleteMateria);

export default router;
