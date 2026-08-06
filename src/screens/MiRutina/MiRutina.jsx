import React, { useState } from 'react';
import './MiRutina.css';
import '../../styles/theme.css';

export default function MiRutina() {
  // Estado para manejar los ejercicios completados y las secciones desplegables
  const [ejerciciosCompletados, setEjerciciosCompletados] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const [seccionesAbiertas, setSeccionesAbiertas] = useState({
    pecho: true,
    torsoEspalda: true,
    core: true,
  });

  const toggleEjercicio = (id) => {
    setEjerciciosCompletados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSeccion = (seccion) => {
    setSeccionesAbiertas(prev => ({
      ...prev,
      [seccion]: !prev[seccion]
    }));
  };

  // Cantidad total y completados para la barra de progreso
  const totalEjercicios = 8;
  const completadosCount = Object.values(ejerciciosCompletados).filter(Boolean).length;
  const porcentajeProgreso = Math.round((completadosCount / totalEjercicios) * 100);

  return (
    <div className="mi-pantalla rutina-container">
      
      {/* Header Superior */}
      <header className="rutina-header">
        <div className="header-left">
          <span className="menu-icon">☰</span>
          <h2>Mi Rutina</h2>
        </div>
        <div className="user-avatar">MG</div>
      </header>

      {/* Tarjeta de Resumen General */}
      <div className="card rutina-summary-card">
        <div className="summary-top">
          <div>
            <span className="saludo">Buenos días 👋</span>
            <h3>Hola, Martín</h3>
          </div>
          <div className="progress-circle-badge">
            {porcentajeProgreso}%
          </div>
        </div>

        <div className="rutina-info-row">
          <span className="rutina-tag">● Rutina A — Fuerza</span>
          <span className="rutina-vencimiento">Válida hasta: 29-07-2026</span>
        </div>

        <div className="rutina-stats">
          <div className="stat-item">
            <span className="stat-icon">🔄</span>
            <div>
              <strong>{totalEjercicios}</strong>
              <p>Ejercicios</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">✅</span>
            <div>
              <strong>{completadosCount}</strong>
              <p>Completados</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⏱️</span>
            <div>
              <strong>~45</strong>
              <p>Minutos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Progreso de Hoy */}
      <div className="progreso-hoy-container">
        <div className="progreso-label-row">
          <span>Progreso de hoy</span>
          <span className="progreso-fraction">{completadosCount}/{totalEjercicios}</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${porcentajeProgreso}%` }}></div>
        </div>
      </div>

      {/* SECCIÓN 1: PECHO */}
      <div className="section-group">
        <div className="section-header-collapsible" onClick={() => toggleSeccion('pecho')}>
          <div className="section-title-left">
            <span>💪</span>
            <h4>Pecho</h4>
          </div>
          <div className="section-title-right">
            <span className="badge-counter">0/3</span>
            <span className={`arrow ${seccionesAbiertas.pecho ? 'open' : ''}`}>▼</span>
          </div>
        </div>

        {seccionesAbiertas.pecho && (
          <div className="exercises-list">
            {/* Ejercicio 1 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Press de Banca Plano</h5>
                <p>4 Series • 12 Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[1] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(1)}
                >
                  {ejerciciosCompletados[1] && '✓'}
                </div>
              </div>
            </div>

            {/* Ejercicio 2 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Aperturas con Mancuernas</h5>
                <p>4 Series • 10 Reps</p>
                <span className="exercise-tip">Controlar el descenso</span>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[2] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(2)}
                >
                  {ejerciciosCompletados[2] && '✓'}
                </div>
              </div>
            </div>

            {/* Ejercicio 3 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Press Inclinado con Barra</h5>
                <p>3 Series • 10 Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[3] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(3)}
                >
                  {ejerciciosCompletados[3] && '✓'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN 2: TORSO / ESPALDA */}
      <div className="section-group">
        <div className="section-header-collapsible" onClick={() => toggleSeccion('torsoEspalda')}>
          <div className="section-title-left">
            <span>🏋️‍♂️</span>
            <h4>Torso / Espalda</h4>
          </div>
          <div className="section-title-right">
            <span className="badge-counter">0/3</span>
            <span className={`arrow ${seccionesAbiertas.torsoEspalda ? 'open' : ''}`}>▼</span>
          </div>
        </div>

        {seccionesAbiertas.torsoEspalda && (
          <div className="exercises-list">
            {/* Ejercicio 4 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Dominadas</h5>
                <p>3 Series • Al fallo Reps</p>
                <span className="exercise-tip">Agarre supino</span>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[4] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(4)}
                >
                  {ejerciciosCompletados[4] && '✓'}
                </div>
              </div>
            </div>

            {/* Ejercicio 5 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Remo con Barra</h5>
                <p>4 Series • 10 Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[5] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(5)}
                >
                  {ejerciciosCompletados[5] && '✓'}
                </div>
              </div>
            </div>

            {/* Ejercicio 6 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Jalón al Pecho</h5>
                <p>3 Series • 12 Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[6] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(6)}
                >
                  {ejerciciosCompletados[6] && '✓'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN 3: CORE */}
      <div className="section-group">
        <div className="section-header-collapsible" onClick={() => toggleSeccion('core')}>
          <div className="section-title-left">
            <span>⚡</span>
            <h4>Core</h4>
          </div>
          <div className="section-title-right">
            <span className="badge-counter">0/2</span>
            <span className={`arrow ${seccionesAbiertas.core ? 'open' : ''}`}>▼</span>
          </div>
        </div>

        {seccionesAbiertas.core && (
          <div className="exercises-list">
            {/* Ejercicio 7 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Plancha Isométrico</h5>
                <p>3 Series • 45s Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[7] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(7)}
                >
                  {ejerciciosCompletados[7] && '✓'}
                </div>
              </div>
            </div>

            {/* Ejercicio 8 */}
            <div className="exercise-card card">
              <div className="exercise-icon-box">🏋️</div>
              <div className="exercise-details">
                <h5>Crunch con Polea</h5>
                <p>3 Series • 15 Reps</p>
              </div>
              <div className="exercise-actions">
                <span className="info-icon-small">ⓘ</span>
                <div 
                  className={`check-circle ${ejerciciosCompletados[8] ? 'checked' : ''}`}
                  onClick={() => toggleEjercicio(8)}
                >
                  {ejerciciosCompletados[8] && '✓'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Pie de página y Botón Entrenar */}
      <div className="rutina-footer">
        <p className="footer-instruction">Toca el círculo para marcar un ejercicio como completado.</p>
        <button className="btn btn-success btn-entrenar">
          ▶ Entrenar
        </button>
      </div>

    </div>
  );
}