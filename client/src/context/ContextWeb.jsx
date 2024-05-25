import {createContext, useContext, useState} from 'react';
import { getNivelRequest, getMateriasRequest, getDocenteRequest} from '../api/apiWeb'

export const TaskContex = createContext();

export const useTasks = () => {
    const context = useContext(TaskContex);
    if(!context){
        throw new Error('useTasks must be used within a WebContextProvider')
    }
    return context;
}

export const WebContextProvider = ({children}) => {


    const [nivel, setNivel] = useState([]);

    async function loadNivel(){
        const response = await getNivelRequest();
        setNivel(response.data);
    }

    const [materias, setMaterias] = useState([]);

    async function loadMaterias(){
        const response = await getMateriasRequest();
        setMaterias(response.data);
    }

    const getDocente = async (id) => {
        try {
            const response = await getDocenteRequest(id);
            //console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <TaskContex.Provider value={{nivel, loadNivel, materias, loadMaterias, getDocente}}>
            {children}
        </TaskContex.Provider>
    );
};