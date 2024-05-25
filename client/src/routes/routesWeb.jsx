import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import Docentes from '../pages/Docentes';
import Materiales from '../pages/Materiales';
import Archivos from '../pages/Archivos';
import NotFound from '../pages/NotFound';

export function MyRoutes(){
    return(
        <Routes>
            <Route path='/docentes/:id' element={<Docentes />} />
            <Route path='/material' element={<Materiales />} />
            <Route path='/archivos' element={<Archivos />} />
            <Route path='/' element={<Inicio />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}