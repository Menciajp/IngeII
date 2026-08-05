import React, { useState } from 'react';
import './GestionAlumnos.css';
import '../../styles/theme.css';

export default function GestionAlumnos() {
  // Estado inicial de la grilla de últimos alumnos agregados
  const [ultimosAlumnos, setUltimosAlumnos] = useState([
    { id: 1, dni: '45841133', nombre: 'Juan Pérez', usuario: 'juan.perez', activo: 'Sí' },
    { id: 2, dni: '42112233', nombre: 'María Gómez', usuario: 'maria.gomez', activo: 'Sí' },
    { id: 3, dni: '39887766', nombre: 'Carlos López', usuario: 'carlos.lopez', activo: 'No' },
  ]);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    usuario: '',
    direccion: '',
    contacto: '',
    activo: 'Sí',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mi-pantalla ga-wrapper">
      
      {/* Encabezado */}
      <header className="ga-header">
        <h2>Gestión de Alumnos</h2>
        <div className="ga-admin-badge">
          <span>👤 Administrador</span>
        </div>
      </header>

      {/* Grilla con últimos alumnos agregados */}
      <div className="card ga-section-card">
        <h3 className="section-title">Últimos Alumnos Agregados</h3>
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>DNI</th>
                <th>Nombre y Apellido</th>
                <th>Usuario</th>
                <th>Activo</th>
              </tr>
            </thead>
            <tbody>
              {ultimosAlumnos.map((alumno) => (
                <tr key={alumno.id}>
                  <td>{alumno.dni}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.usuario}</td>
                  <td>
                    <span className={`ga-status ${alumno.activo === 'Sí' ? 'activo' : 'inactivo'}`}>
                      {alumno.activo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulario Principal (Sin sección de búsqueda y sin tarjeta de membresía interna) */}
      <div className="card ga-section-card">
        <h3 className="section-title">Datos Personales, Dirección y Contacto</h3>

        <div className="ga-form-grid">
          <div className="ga-input-group">
            <label>Nombre *</label>
            <input 
              type="text" 
              name="nombre" 
              placeholder="Ej: Juan" 
              value={formData.nombre} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>Apellido *</label>
            <input 
              type="text" 
              name="apellido" 
              placeholder="Ej: García" 
              value={formData.apellido} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>DNI *</label>
            <input 
              type="text" 
              name="dni" 
              placeholder="Ej: 45841133" 
              value={formData.dni} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>Usuario *</label>
            <input 
              type="text" 
              name="usuario" 
              placeholder="Ej: juan.garcia" 
              value={formData.usuario} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>Dirección *</label>
            <input 
              type="text" 
              name="direccion" 
              placeholder="Ej: San Martín 1234" 
              value={formData.direccion} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>Contacto (Teléfono / Email) *</label>
            <input 
              type="text" 
              name="contacto" 
              placeholder="Ej: 3764000000" 
              value={formData.contacto} 
              onChange={handleChange} 
              className="input-control" 
            />
          </div>

          <div className="ga-input-group">
            <label>Estado (Activo)</label>
            <select 
              name="activo" 
              value={formData.activo} 
              onChange={handleChange} 
              className="input-control"
            >
              <option value="Sí">Sí (Activo)</option>
              <option value="No">No (Inactivo)</option>
            </select>
          </div>
        </div>

        {/* Botón único de Membresía debajo del formulario */}
        <div className="ga-membresia-container">
          <button className="btn btn-outline ga-btn-membresia">
            💳 Membresía
          </button>
        </div>

        {/* Botones de acción solicitados: Alta, Baja, Modificación */}
        <div className="ga-actions-footer">
          <button className="btn btn-outline" style={{ color: '#f85149', borderColor: '#f85149' }}>Baja</button>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button className="btn btn-outline">Modificación</button>
            <button className="btn" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>Alta</button>
          </div>
        </div>

      </div>
    </div>
  );
}