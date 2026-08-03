import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import './EjemploPantalla.css';

// Esta pantalla es solo un ejemplo de referencia.
// Cada boceto real debe crear su propia carpeta dentro de src/screens/
export default function EjemploPantalla() {
  return (
    <div className="ejemplo-pantalla">
      <Card>
        <h1>Pantalla de ejemplo</h1>
        <Input label="Nombre" placeholder="Escribí tu nombre" />
        <Button>Continuar</Button>
      </Card>
    </div>
  );
}
