import React, { useState } from 'react';
import '../styles/Admin.css';

const Admin = () => {
  const [form, setForm] = useState({
    docente: '',
    nivelMateria: '',
    archivo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleAddDocente = () => {
    // Lógica para añadir docente
    console.log('Añadir docente:', form.docente);
  };

  const handleDeleteDocente = () => {
    // Lógica para eliminar docente
    console.log('Eliminar docente:', form.docente);
  };

  const handleAddNivel = () => {
    // Lógica para añadir nivel de materia
    console.log('Añadir nivel de materia:', form.nivelMateria);
  };

  const handleDeleteNivel = () => {
    // Lógica para eliminar nivel de materia
    console.log('Eliminar nivel de materia:', form.nivelMateria);
  };

  const handleAddArchivo = () => {
    // Lógica para añadir archivo
    console.log('Añadir archivo:', form.archivo);
  };

  const handleDeleteArchivo = () => {
    // Lógica para eliminar archivo
    console.log('Eliminar archivo:', form.archivo);
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="form-group">
        <label htmlFor="docente">Docente</label>
        <input
          type="text"
          id="docente"
          name="docente"
          value={form.docente}
          onChange={handleChange}
        />
        <button onClick={handleAddDocente}>Añadir Docente</button>
        <button onClick={handleDeleteDocente}>Eliminar Docente</button>
      </div>
      <div className="form-group">
        <label htmlFor="nivelMateria">Nivel de Materia</label>
        <input
          type="text"
          id="nivelMateria"
          name="nivelMateria"
          value={form.nivelMateria}
          onChange={handleChange}
        />
        <button onClick={handleAddNivel}>Añadir Nivel</button>
        <button onClick={handleDeleteNivel}>Eliminar Nivel</button>
      </div>
      <div className="form-group">
        <label htmlFor="archivo">Archivo</label>
        <input
          type="text"
          id="archivo"
          name="archivo"
          value={form.archivo}
          onChange={handleChange}
        />
        <button onClick={handleAddArchivo}>Añadir Archivo</button>
        <button onClick={handleDeleteArchivo}>Eliminar Archivo</button>
      </div>
    </div>
  );
};

export default Admin;
