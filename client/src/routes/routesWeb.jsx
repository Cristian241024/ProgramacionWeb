import { Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import Docentes from '../pages/Docentes';
import Materiales from '../pages/Materiales';
import Archivos from '../pages/Archivos';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Registro from '../pages/Registro';
import Admin from '../pages/Admin';

export function MyRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/docentes/:id' element={<Docentes />} />
      <Route path='/material' element={<Materiales />} />
      <Route path='/archivos' element={<Archivos />} />
      <Route path='/register' element={<Registro />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/' element={<Inicio />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
