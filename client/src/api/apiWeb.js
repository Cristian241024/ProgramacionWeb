import axios from 'axios';

export const getDocentesRequest = async () =>
    await axios.get('http://localhost:3050/docentes');


export const getNivelRequest = async () =>
    await axios.get('http://localhost:3050/nivel');


export const getMateriasRequest = async () =>
    await axios.get('http://localhost:3050/materias');

export const getDocenteRequest = async (id) =>
    await axios.get(`http://localhost:3050/docentes/${id}`);

