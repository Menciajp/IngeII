import React, { useState } from 'react';
import './VistasRutinas.css';
import '../../styles/theme.css'; // Integración con el tema global del repo

const initialRutinasData = [
  { id: 1, rutina: 'Hipertrofia Nivel 1', tipo: 'nuevo bloque', grupoMuscular: 'Pecho', ejercicio: 'Aperturas con Mancuernas', series: 4, repeticiones: 10 },
  { id: 2, rutina: 'Hipertrofia Nivel 1', tipo: 'nuevo bloque', grupoMuscular: 'Hombros', ejercicio: 'Press Militar con Barra', series: 4, repeticiones: 10 },
  { id: 3, rutina: 'Hipertrofia Nivel 1', tipo: 'nuevo bloque', grupoMuscular: 'Espalda', ejercicio: 'Jalón al Pecho', series: 4, repeticiones: 10 },
  { id: 4, rutina: 'Hipertrofia Nivel 2', tipo: 'nuevo bloque', grupoMuscular: 'Espalda', ejercicio: 'Remo con Barra', series: 4, repeticiones: 10 },
  { id: 5, rutina: 'Hipertrofia Nivel 2', tipo: 'nuevo bloque', grupoMuscular: 'Bíceps', ejercicio: 'Curl Martillo', series: 4, repeticiones: 10 },
  { id: 6, rutina: 'Hipertrofia Nivel 2', tipo: 'nuevo bloque', grupoMuscular: 'Hombros', ejercicio: 'Press Arnold', series: 4, repeticiones: 10 },
  { id: 7, rutina: 'Hipertrofia Nivel 2', tipo: 'nuevo bloque', grupoMuscular: 'Pecho', ejercicio: 'Press Inclinado', series: 4, repeticiones: 10 },
  { id: 8, rutina: 'Hipertrofia Nivel 1', tipo: 'nuevo bloque', grupoMuscular: 'Pecho', ejercicio: 'Press de Banca Plano', series: 4, repeticiones: 12 },
];

export default function VistasRutinas() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrado reactivo por Nombre de Rutina o Ejercicio
  const filteredData = initialRutinasData.filter(item => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.rutina.toLowerCase().includes(searchLower) ||
      item.ejercicio.toLowerCase().includes(searchLower) ||
      item.grupoMuscular.toLowerCase().includes(searchLower)
    );
  });

  // Corte de Control: Agrupamiento por Nombre de Rutina
  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.rutina]) acc[item.rutina] = [];
    acc[item.rutina].push(item);
    return acc;
  }, {});

  return (
    <div className="mi-pantalla">
      
      {/* Encabezado */}
      <div className="header-container">
        <h2>Vistas de Rutinas</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>05 de julio de 2026</span>
          <div className="card" style={{ padding: '0.4rem 0.8rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ backgroundColor: 'var(--color-primary)', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>👤</span>
            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.8rem' }}>
              <strong>Corpore GYM</strong>
              <span style={{ color: 'var(--color-text-muted)', fontSize: '0.7rem' }}>Admin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjetas de Estadísticas Superiores */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div className="card" style={{ padding: '0.6rem 1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: '20px' }}>
          <span style={{ fontWeight: 'bold', padding: '0.1rem 0.6rem', borderRadius: '12px', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>42</span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Total ejercicios</span>
        </div>
        <div className="card" style={{ padding: '0.6rem 1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: '20px' }}>
          <span style={{ fontWeight: 'bold', padding: '0.1rem 0.6rem', borderRadius: '12px', backgroundColor: 'rgba(63, 185, 80, 0.15)', color: '#3fb950' }}>9</span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Rutinas</span>
        </div>
        <div className="card" style={{ padding: '0.6rem 1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem', borderRadius: '20px' }}>
          <span style={{ fontWeight: 'bold', padding: '0.1rem 0.6rem', borderRadius: '12px', backgroundColor: 'rgba(187, 134, 252, 0.15)', color: '#bb86fc' }}>9</span>
          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Grupos musculares</span>
        </div>
      </div>

      {/* Tarjeta Principal de la Tabla */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 className="section-title" style={{ border: 'none', margin: 0, padding: 0 }}>Detalle General de Ejercicios</h3>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Vista de solo lectura · {filteredData.length} resultados</span>
          </div>
          
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '10px', fontSize: '0.85rem' }}>🔍</span>
              <input
                type="text"
                placeholder="Buscar rutina o ejercicio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-control"
                style={{ paddingLeft: '2.2rem', width: '260px' }}
              />
            </div>
            <button className="btn btn-outline" style={{ fontSize: 'var(--font-size-sm)' }}>
              ⚙️ Filtros
            </button>
          </div>
        </div>

        {/* Tabla utilizando el theme.css */}
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>NOMBRE DE LA RUTINA ▾</th>
                <th>GRUPO MUSCULAR ▾</th>
                <th>NOMBRE EJERCICIO ▾</th>
                <th style={{ textAlign: 'center' }}>SERIES ▾</th>
                <th style={{ textAlign: 'center' }}>REPETICIONES</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedData).length > 0 ? (
                Object.keys(groupedData).map((rutinaName) => (
                  <React.Fragment key={rutinaName}>
                    {/* Corte de Control visual por Rutina */}
                    <tr style={{ backgroundColor: 'var(--color-background)', borderTop: '2px solid var(--color-border)' }}>
                      <td colSpan="5" style={{ padding: '0.8rem 1rem' }}>
                        <span style={{ fontWeight: 'bold', fontSize: '0.95rem', marginRight: '0.8rem' }}>{rutinaName}</span>
                        <span style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '10px' }}>nuevo bloque</span>
                      </td>
                    </tr>

                    {groupedData[rutinaName].map((item, index) => (
                      <tr key={item.id}>
                        <td style={{ width: '40px', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                          {index === 0 && '└'}
                        </td>
                        <td>
                          <span style={{ backgroundColor: 'rgba(187, 134, 252, 0.12)', color: '#bb86fc', padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600' }}>
                            {item.grupoMuscular}
                          </span>
                        </td>
                        <td style={{ fontWeight: 500 }}>{item.ejercicio}</td>
                        <td style={{ textAlign: 'center' }}>
                          <span style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)', width: '24px', height: '24px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {item.series}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>{item.repeticiones}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data-msg">
                    No se encontraron resultados para los filtros aplicados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginador inferior */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Filas por página:</span>
            <select className="input-control" defaultValue="10" style={{ width: '70px', padding: '0.3rem' }}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>1-10 de {filteredData.length}</span>
            <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} disabled>&lt;&lt;</button>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }} disabled>&lt;</button>
              <button className="btn" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', backgroundColor: 'var(--color-primary)', color: '#fff' }}>1</button>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>2</button>
              <span>...</span>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>5</button>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>&gt;</button>
              <button className="btn btn-outline" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>&gt;&gt;</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}