import React, { useState } from 'react';
import './AgregarRutina.css';
import '../../styles/theme.css';

export default function AgregarRutina() {
  const [paso, setPaso] = useState(1); // 1: Crear Rutina, 2: Agregar Ejercicios
  const [nombreRutina, setNombreRutina] = useState('');
  
  // Lista de ejercicios disponibles con sus inputs interactivos de series y repeticiones
  const [ejerciciosDisponibles, setEjerciciosDisponibles] = useState([
    { id: 1, nombre: 'Press de Banca Plano', grupo: 'Pecho', seleccionado: true, series: 4, repeticiones: 12 },
    { id: 2, nombre: 'Aperturas con Mancuernas', grupo: 'Pecho', seleccionado: true, series: 3, repeticiones: 10 },
    { id: 3, nombre: 'Remo con Barra', grupo: 'Espalda', seleccionado: false, series: 4, repeticiones: 10 },
    { id: 4, nombre: 'Jalón al Pecho', grupo: 'Espalda', seleccionado: false, series: 3, repeticiones: 12 },
    { id: 5, nombre: 'Press Militar', grupo: 'Hombros', seleccionado: false, series: 4, repeticiones: 10 },
    { id: 6, nombre: 'Curl Martillo', grupo: 'Bíceps', seleccionado: false, series: 3, repeticiones: 12 },
  ]);

  const handleCrearRutina = (e) => {
    e.preventDefault();
    if (!nombreRutina.trim()) return;
    setPaso(2);
  };

  const toggleSeleccion = (id) => {
    setEjerciciosDisponibles(ejerciciosDisponibles.map(ex => 
      ex.id === id ? { ...ex, seleccionado: !ex.seleccionado } : ex
    ));
  };

  const handleNumericChange = (id, field, value) => {
    setEjerciciosDisponibles(ejerciciosDisponibles.map(ex => 
      ex.id === id ? { ...ex, [field]: value } : ex
    ));
  };

  return (
    <div className="mi-pantalla arut-wrapper">
      
      {/* Encabezado */}
      <header className="arut-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '1.5rem' }}>📋</span>
          <h2>Agregar Rutina</h2>
        </div>
        <div className="arut-admin-badge">
          <span>👤 Administrador</span>
        </div>
      </header>

      {/* Stepper de Progreso */}
      <div className="arut-stepper">
        <div className={`arut-step ${paso === 1 ? 'active' : 'completed'}`}>
          <span className="arut-step-num">1</span>
          <span>Crear Rutina</span>
        </div>
        <div className="arut-step-line"></div>
        <div className={`arut-step ${paso === 2 ? 'active' : ''}`}>
          <span className="arut-step-num">2</span>
          <span>Grilla de Ejercicios</span>
        </div>
      </div>

      {/* PASO 1: Crear Rutina */}
      {paso === 1 && (
        <div className="card arut-section-card">
          <h3 className="section-title">Datos de la Rutina</h3>
          <p className="arut-subtitle">Paso 1 — Ingresá el nombre para la nueva rutina</p>

          <form onSubmit={handleCrearRutina} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
              <label style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Nombre de la Rutina *</label>
              <input 
                type="text" 
                placeholder="Ej: Rutina Full Body Principiante" 
                value={nombreRutina} 
                onChange={(e) => setNombreRutina(e.target.value)} 
                className="input-control"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
              <button type="submit" className="btn" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                + Siguiente: Agregar Ejercicios
              </button>
            </div>
          </form>
        </div>
      )}

      {/* PASO 2: Grilla de Asignación de Ejercicios */}
      {paso === 2 && (
        <div className="card arut-section-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div>
              <h3 className="section-title" style={{ margin: 0, border: 'none' }}>Asignar Ejercicios a: "{nombreRutina}"</h3>
              <p className="arut-subtitle" style={{ margin: 0 }}>Paso 2 — Seleccioná con check y definí series y repeticiones</p>
            </div>
            <button className="btn btn-outline" onClick={() => setPaso(1)} style={{ fontSize: '0.8rem' }}>
              ← Cambiar Nombre
            </button>
          </div>

          <div className="table-responsive" style={{ marginTop: '1.5rem' }}>
            <table className="custom-table arut-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'center', width: '60px' }}>CHECK</th>
                  <th>EJERCICIO</th>
                  <th>GRUPO MUSCULAR</th>
                  <th style={{ textAlign: 'center', width: '120px' }}>SERIES</th>
                  <th style={{ textAlign: 'center', width: '120px' }}>REPETICIONES</th>
                </tr>
              </thead>
              <tbody>
                {ejerciciosDisponibles.map((item) => (
                  <tr key={item.id} className={item.seleccionado ? 'arut-row-selected' : ''}>
                    <td style={{ textAlign: 'center' }}>
                      <input 
                        type="checkbox" 
                        checked={item.seleccionado} 
                        onChange={() => toggleSeleccion(item.id)} 
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </td>
                    <td className="arut-td-bold">{item.nombre}</td>
                    <td>
                      <span className="arut-badge">{item.grupo}</span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <input 
                        type="number" 
                        value={item.series} 
                        disabled={!item.seleccionado}
                        onChange={(e) => handleNumericChange(item.id, 'series', e.target.value)}
                        className="input-control" 
                        style={{ textAlign: 'center', padding: '0.3rem', width: '70px', margin: '0 auto' }}
                      />
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <input 
                        type="number" 
                        value={item.repeticiones} 
                        disabled={!item.seleccionado}
                        onChange={(e) => handleNumericChange(item.id, 'repeticiones', e.target.value)}
                        className="input-control" 
                        style={{ textAlign: 'center', padding: '0.3rem', width: '70px', margin: '0 auto' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer de acciones */}
          <div className="arut-actions-footer">
            <button className="btn btn-outline" onClick={() => setPaso(1)}>Volver</button>
            <button className="btn" style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }} onClick={() => alert('¡Rutina guardada y asignada con éxito!')}>
              Guardar Rutina Completa
            </button>
          </div>

        </div>
      )}

    </div>
  );
}