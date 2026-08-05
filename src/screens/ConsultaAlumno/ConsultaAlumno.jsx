import React, { useState } from 'react';
import './ConsultaAlumnos.css';
import '../../styles/theme.css';

const initialStudents = [
  { id: 1, dni: '45841133', apellido: 'Pérez', nombre: 'Juan', fecha: '2026-06-15', estado: 'Activo', frecuencia: 'Pase Libre', patologias: 'Hipertensión' },
  { id: 2, dni: '33221455', apellido: 'González', nombre: 'María', fecha: '2026-06-28', estado: 'Activo', frecuencia: '3 veces por semana', patologias: 'Ninguna' },
  { id: 3, dni: '41236547', apellido: 'Martínez', nombre: 'Sofía', fecha: '2026-07-02', estado: 'Activo', frecuencia: 'Pase Libre', patologias: 'Asma' },
  { id: 4, dni: '27889900', apellido: 'Rodríguez', nombre: 'Carlos', fecha: '2026-05-10', estado: 'Inactivo', frecuencia: '2 veces por semana', patologias: 'Diabetes Tipo 2' },
  { id: 5, dni: '36985214', apellido: 'Fernández', nombre: 'Diego', fecha: '2026-04-22', estado: 'Inactivo', frecuencia: '3 veces por semana', patologias: 'Ninguna' },
  { id: 6, dni: '28554477', apellido: 'López', nombre: 'Lucía', fecha: '2026-06-18', estado: 'Suspendido', frecuencia: '5 veces por semana', patologias: 'Artritis' },
];

export default function ConsultaAlumnos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [mostrarError, setMostrarError] = useState(false);

  // Filtrado por Apellido, Nombre o DNI, y rango de fechas
  const filteredStudents = initialStudents.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      student.nombre.toLowerCase().includes(searchLower) || 
      student.apellido.toLowerCase().includes(searchLower) ||
      student.dni.includes(searchTerm);
      
    const meetsDateFrom = dateFrom ? new Date(student.fecha) >= new Date(dateFrom) : true;
    const meetsDateTo = dateTo ? new Date(student.fecha) <= new Date(dateTo) : true;
    
    return matchesSearch && meetsDateFrom && meetsDateTo;
  });

  // Corte de Control (Agrupamiento por Estado)
  const groupedStudents = filteredStudents.reduce((acc, student) => {
    if (!acc[student.estado]) acc[student.estado] = [];
    acc[student.estado].push(student);
    return acc;
  }, {});

  return (
    <div className="mi-pantalla">
      {/* Encabezado */}
      <div className="header-container">
        <h2>Consulta de Alumnos</h2>
        <button 
          className="btn btn-danger" 
          onClick={() => setMostrarError(!mostrarError)}
        >
          {mostrarError ? 'Ocultar Error' : 'Simular Error de Conexión'}
        </button>
      </div>

      {mostrarError && (
        <div className="error-banner">
          <strong>Error de sistema:</strong> No se pudo conectar con la base de datos central. Mostrando datos temporales en caché.
        </div>
      )}

      {/* Tarjeta de Filtros y Búsqueda */}
      <div className="card">
        <h3 className="section-title">Filtros y Búsqueda</h3>

        <div className="filters-row">
          <div className="form-group search-group">
            <label>Buscar Alumno</label>
            <input
              type="text"
              placeholder="Buscar por Apellido, Nombre o DNI..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-control"
            />
          </div>

          <div className="form-group date-group">
            <label>Fecha Desde</label>
            <input 
              type="date" 
              value={dateFrom} 
              onChange={(e) => setDateFrom(e.target.value)} 
              className="input-control" 
            />
          </div>

          <div className="form-group date-group">
            <label>Fecha Hasta</label>
            <input 
              type="date" 
              value={dateTo} 
              onChange={(e) => setDateTo(e.target.value)} 
              className="input-control" 
            />
          </div>
        </div>
      </div>

      {/* Tarjeta de Resultados con Tabla */}
      <div className="card">
        <h3 className="section-title">Listado de Registros</h3>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>DNI</th>
                <th>APELLIDO</th>
                <th>NOMBRE</th>
                <th>FECHA INSCRIPCIÓN</th>
                <th>PLAN (FRECUENCIA)</th>
                <th className="th-center">INFO MÉDICA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(groupedStudents).length > 0 ? (
                Object.keys(groupedStudents).map((estado) => (
                  <React.Fragment key={estado}>
                    {/* Corte de Control visual por Estado */}
                    <tr className="control-break-row">
                      <td colSpan="7">
                        Estado del Alumno: {estado.toUpperCase()}
                      </td>
                    </tr>
                    
                    {groupedStudents[estado].map((student) => (
                      <tr key={student.id}>
                        <td>{student.dni}</td>
                        <td>{student.apellido}</td>
                        <td>{student.nombre}</td>
                        <td>{new Date(student.fecha).toLocaleDateString('es-AR')}</td>
                        <td>{student.frecuencia}</td>
                        <td className="td-center">
                          {/* Ícono con Tooltip de Patologías */}
                          <div className="tooltip-container">
                            <span className="info-icon">ⓘ</span>
                            <div className="tooltip-content">
                              <strong>Patologías:</strong><br />
                              {student.patologias}
                            </div>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-outline">Ver Ficha</button>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="no-data-msg">
                    No se encontraron registros que coincidan con los filtros aplicados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}