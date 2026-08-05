import React, { useState } from 'react';
import './AsignarRutina.css';
import '../../styles/theme.css';

export default function AsignarRutina() {
  // Lista de rutinas disponibles con sus días asignados y estado de selección previo
  const [rutinasDisponibles, setRutinasDisponibles] = useState([
    { id: 1, nombre: 'Rutina A - Fuerza', musculo: 'Pecho', cantEjercicios: 8, cantSeries: 12, dias: 'Lunes, Miércoles, Viernes', asignada: true },
    { id: 2, nombre: 'Full Body', musculo: 'Torso', cantEjercicios: 6, cantSeries: 14, dias: 'Martes, Jueves', asignada: true },
    { id: 3, nombre: 'Rutina B - Cardio', musculo: 'Piernas', cantEjercicios: 5, cantSeries: 10, dias: 'Lunes, Jueves', asignada: false },
    { id: 4, nombre: 'Plan Flexibilidad', musculo: 'Espalda', cantEjercicios: 4, cantSeries: 8, dias: 'Miércoles, Viernes', asignada: false },
    { id: 5, nombre: 'Circuito HIIT', musculo: 'Core', cantEjercicios: 7, cantSeries: 15, dias: 'Sábados', asignada: false },
  ]);

  const toggleAsignada = (id) => {
    setRutinasDisponibles(rutinasDisponibles.map(r => 
      r.id === id ? { ...r, asignada: !r.asignada } : r
    ));
  };

  return (
    <div className="mi-pantalla ar-wrapper">
      
      {/* Encabezado */}
      <header className="ar-header">
        <div>
          <h2>Asignar Rutina</h2>
          <span className="ar-alumno-selected-tag">Alumno seleccionado: <strong>Juan Pérez (DNI: 45841133)</strong></span>
        </div>
        <div className="ar-admin-badge">
          <span>👤 Prof. Ramírez</span>
        </div>
      </header>

      {/* Tarjeta Principal de Asignación (Sin la sección de búsqueda superior) */}
      <div className="card ar-section-card">
        <h3 className="section-title">Grilla de Asignación de Rutinas</h3>
        <p className="ar-subtitle-info">Seleccione las rutinas que desea asignar al alumno y verifique los días correspondientes.</p>

        <div className="table-responsive">
          <table className="custom-table ar-table">
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: 'center' }}>CHECK</th>
                <th>NOMBRE RUTINA</th>
                <th>MÚSCULO</th>
                <th style={{ textAlign: 'center' }}>EJERCICIOS</th>
                <th style={{ textAlign: 'center' }}>SERIES</th>
                <th>DÍAS ASIGNADOS</th>
                <th style={{ textAlign: 'center' }}>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {rutinasDisponibles.map((rutina) => (
                <tr key={rutina.id} className={rutina.asignada ? 'ar-row-checked' : ''}>
                  <td style={{ textAlign: 'center' }}>
                    <input 
                      type="checkbox" 
                      checked={rutina.asignada} 
                      onChange={() => toggleAsignada(rutina.id)} 
                      style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                    />
                  </td>
                  <td className="ar-td-bold">{rutina.nombre}</td>
                  <td>
                    <span className="ar-musculo-badge">{rutina.musculo}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>{rutina.cantEjercicios}</td>
                  <td style={{ textAlign: 'center' }}>{rutina.cantSeries}</td>
                  <td>
                    <span className="ar-dias-text">📅 {rutina.dias}</span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                      🔍 Ver Detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer con botones de acción */}
        <div className="ar-actions-footer">
          <button className="btn btn-outline">Cancelar</button>
          <button className="btn" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
            Guardar Asignación
          </button>
        </div>

      </div>
    </div>
  );
}