import React from 'react';
import './App.css';
import ReportePagos from './screens/ReportePagos/ReportePagos';
import GestionAlumnos from './screens/GestionAlumnos/GestionAlumnos';
import AsignarRutina from './screens/AsignarRutina/AsignarRutina';

function App() {
  return (
    <div className="App">
      {/* Acá podés cambiar qué pantalla querés ver, por ahora dejamos AsignarRutina */}
      <AsignarRutina />
    </div>
  );
}

export default App;