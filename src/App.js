import React from 'react';
import './App.css';
import ReportePagos from './screens/ReportePagos/ReportePagos';
import GestionAlumnos from './screens/GestionAlumnos/GestionAlumnos';
import AsignarRutina from './screens/AsignarRutina/AsignarRutina';
import AgregarRutina from './screens/AgregarRutina/AgregarRutina';
import ConsultaAlumno from './screens/ConsultaAlumno/ConsultaAlumno';
import MiRutina from './screens/MiRutina/MiRutina';

function App() {
  return (
    <div className="App">
      {/* Comentá o descomentá la pantalla que quieras ir probando */}
      {/* <ReportePagos /> */}
      {/* <GestionAlumnos /> */}
      {/* <AsignarRutina /> */}
      {/* <AgregarRutina /> */}
      {/* <ConsultaAlumno /> */}
      <MiRutina />
    </div>
  );
}

export default App;