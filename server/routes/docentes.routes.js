import { Router } from "express";
import { getDocentes, getNivel, getMaterias, getDocente} from "../controllers/docentes.controllers.js";

const router = Router();

router.get('/docentes', getDocentes);

router.get('/nivel', getNivel);

router.get('/materias', getMaterias);

router.get('/docentes/:id_materia', getDocente);


export default router;